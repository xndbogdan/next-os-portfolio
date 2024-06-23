'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import AudioSpectrum from './Shared/AudioSpectrum';
import type { Tracklist, Playlist, Track } from "@/lib/types";
import { playlists } from '@/lib/tracklist';
import Image from 'next/image';
import { useStore } from '@/lib/state';

export const MusicPlayer = (props: { closed: boolean }) => {
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  const randomTrackIndex = 0;
  const musicApiEndpoint = process.env.NEXT_PUBLIC_TRACKLIST_ENDPOINT;

  const [menu, setMenu] = useState(false);
  const { playlist, setPlaylist } = useStore();
  const [selectedPlaylistLength, setSelectedPlaylistLength] = useState(playlist.tracks.length);
  const [trackIndex, setTrackIndex] = useState(randomTrackIndex);
  const [selectedTrack, setSelectedTrack] = useState(playlist.tracks[trackIndex]);

  const [display, setDisplay] = useState('Player Offline');
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState("0%");
  const [currentTrackTime, setCurrentTrackTime] = useState(0);
  const [currentTrackDuration, setCurrentTrackDuration] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(1);

  const audio = useRef<HTMLAudioElement>(null);
  const displayText = useRef<HTMLAnchorElement>(null);
  const displayTextContainer = useRef<HTMLDivElement>(null);
  const progressBar = useRef<HTMLDivElement>(null);
  const progressBarContainer = useRef<HTMLDivElement>(null);
  const previousWaveformUrl = useRef<string>((selectedTrack.audio_url || selectedTrack.waveform_url)!);
  
  const updateTrackProgress = (event: React.ChangeEvent<HTMLAudioElement>) => {
    if (props.closed) {
      if (isPlaying) {
        togglePlay();
      }
    }
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    setTrackProgress((currentTime + 0.25) / duration * 100 + '%');
    setCurrentTrackDuration(duration);
    setCurrentTrackTime(currentTime);
  };

  const updateSongPosition = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof Element)) {
      return;
  }
    let boundingRect = event.target.getBoundingClientRect();
    let percentage = ((event.clientX - boundingRect.left) / boundingRect.width);
    if(!audio.current) {
      return;
    }
    audio.current.currentTime = percentage * audio.current.duration;
  };

  const convertDuration = (time: number) => {
    let mins = Math.floor(time / 60);
    let secs = Math.floor(time % 60);
    let returnResult = mins < 10 ? '0' + String(mins) : String(mins);
    returnResult += ':';
    returnResult += secs < 10 ? '0' + String(secs) : String(secs);
    return returnResult;
  };

  const getTrackUrl = useCallback(
    (selectedTrack: Track) => {
      if (!selectedTrack.waveform_url) {
        return musicApiEndpoint + selectedTrack.audio_url!;
      }
      return musicApiEndpoint + selectedTrack.waveform_url!.split('/')[3].replace('_m.png', '');
    },
    [musicApiEndpoint] // Add dependencies here
  );

  const togglePlay = () => {
    if (!audio.current) {
      return;
    }
    if (audio.current.src !== getTrackUrl(selectedTrack)) {
      audio.current.src = getTrackUrl(selectedTrack);
    }
    setIsPlaying(!isPlaying);
    const trackUrl = selectedTrack.waveform_url || selectedTrack.audio_url;
    if (previousWaveformUrl.current !== trackUrl && !isPlaying) {
      return;
    }
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
  };

  const nextTrack = async () => {
    if (trackIndex >= playlist.tracks.length - 1) {
      return;
    }
    setSelectedTrack(playlist.tracks[trackIndex + 1]);
    setTrackIndex(trackIndex + 1);
    if (isPlaying && audio.current?.ended) {
      // We need to wait for a bit and then make the audio player play (togglePlay?)
      await sleep(200);
      setIsPlaying(true);
      audio.current?.play();
    }
  };

  const previousTrack = () => {
    if (trackIndex <= 0) {
      return;
    }
    setSelectedTrack(playlist.tracks[trackIndex - 1]);
    setTrackIndex(trackIndex - 1);
  };

  const changePlaylist = async (id: number) => {
    setMenu(false);
    if (playlist.id === id) {
      return;
    }
    const newPlaylist = playlists.find((playlist) => playlist.id === id);
    if (!newPlaylist) {
      return;
    }
    if (isPlaying) {
      togglePlay();
    }
    setPlaylist(newPlaylist);
    setSelectedPlaylistLength(newPlaylist.tracks.length);
    setSelectedTrack(newPlaylist.tracks[0]);
    setTrackIndex(0);
    await sleep(50);
    // set player to beginning of track
    if (audio.current) {
      audio.current.currentTime = 0;
    }
  }

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const volume = document.getElementById('music-player-volume') as HTMLInputElement | null;
      if(volume) {
        volume.value = "1";
      }
    }

    const updateScreen = () => {
      setDisplay(selectedTrack.artist + ' - ' + selectedTrack.title);
    };
    
    // Add event listeners and cleanup
    const audioElement = audio.current;

    const intervalID = setInterval(updateScreen, 50);
    if(!audioElement) {
      return;
    }

    audioElement.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      clearInterval(intervalID);
      audioElement.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [props.closed, isPlaying, selectedTrack.artist, selectedTrack.title]);

  useEffect(() => {
    const silentlyPause = () => {
      if (!audio.current) {
        return;
      }
      audio.current.pause();
    };
  
    const silentlyPlay = () => {
      if (!audio.current) {
        return;
      }
      audio.current.play();
    };

    if (audio.current?.src !== getTrackUrl(selectedTrack)) {
      if (!audio.current) {
        return;
      }
      audio.current.src = getTrackUrl(selectedTrack);
    }
    const trackUrl = selectedTrack.waveform_url || selectedTrack.audio_url;
    if (trackUrl === previousWaveformUrl.current) {
      previousWaveformUrl.current = trackUrl;
    }
    if (isPlaying) {
      silentlyPause();
      sleep(200);
      silentlyPlay();
    }
  }, [trackIndex, isPlaying, getTrackUrl, selectedTrack, playlist]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (localStorage.getItem('playlist-id')) {
      const id = parseInt(localStorage.getItem('playlist-id')!);
      const newPlaylist = playlists.find((playlist) => playlist.id === id);
      if (newPlaylist) {
        changePlaylist(newPlaylist.id);
      }
    }
  },[]);

  return (
    <div className="px-2">
      <div className='bg-gray-900 border-2 border-gray-600 my-2'>
        <div className=" h-8 text-blue-300 px-2 flex items-center" ref={displayTextContainer}>
          <a target="_blank" href={selectedTrack.permalink_url} className="opacity-75 cursor-pointer truncate" ref={displayText} rel="noreferrer">
            <span className='pr-16'>
              {display}
            </span>
          </a>
        </div>
        <div className={isPlaying ? 'h-8 text-blue-300 flex items-center justify-center' : 'hidden'} ref={displayTextContainer}>
          <div>
            <AudioSpectrum
              id="audio-canvas"
              height={25}
              width={340}
              audioId={'music-player'}
              capColor={'2564eb'}
              capHeight={2}
              meterWidth={2}
              meterCount={512}
              meterColor={[
                { stop: 0, color: '#2564eb' },
                { stop: 0.1, color: '#fff' },
                { stop: 1, color: '#fff' }
              ]}
              gap={2}
            />
          </div>
        </div>
        <div className={!isPlaying ? 'h-8 text-blue-300 flex items-center justify-start' : 'hidden'} ref={displayTextContainer}>
          <div className='opacity-75 px-2'>
            &#47;&#47;&#47; Remix OS Player - Paused &#47;&#47;&#47;
          </div>
        </div>
      </div>
      <div className='flex items-center py-1'>
        <p className='text-sm'>Station:&nbsp;</p>
        <div onMouseDown={ () => { setMenu(!menu) } } className={menu ? 'bg-gray-400 flex items-center px-1 cursor-pointer' : 'hover:invert bg-gray-mac flex items-center px-1 cursor-pointer'}>
          <p className="text-sm">{playlist.name}</p>
          <Image className="inline ml-1 w-1" src="/img/arrow-down.png" height="5" width="3" alt='arrow down'/>
        </div>
        <div id="dropdown" className={ menu ? 'z-10 w-44 bg-gray-mac shadow-mac-os absolute mt-16 ml-16' : 'hidden' }>
          <ul className="text-xs" aria-labelledby="dropdownDefault">
              <li onMouseDown={changePlaylist.bind(null, 1)}>
                  <span 
                      className="block py-1 px-4 border-b border-black hover:text-white hover:bg-black cursor-pointer" 
                  >Poolsuite FM</span>
              </li>
              <li onMouseDown={changePlaylist.bind(null, 2)}>
                  <span 
                      className="block py-1 px-4 border-b border-black hover:text-white hover:bg-black cursor-pointer" 
                  >Next FM</span>
              </li>
          </ul>
        </div>
        
      </div>
      
      <div className="w-full h-2 bg-black cursor-point" ref={progressBarContainer} onMouseUp={updateSongPosition}>
        <div ref={progressBar} className="bg-blue-300 h-2 pointer-events-none" style={{ width: trackProgress }}></div>
      </div>
      <div style={currentTrackDuration ? { display: 'block' } : { display: 'none' }}>{convertDuration(currentTrackTime)} / {convertDuration(currentTrackDuration)}</div>
      <div className='flex flex-row justify-between items-center'>
        <div className="flex flex-row space-x-4 text-sm mt-2 pb-2">
          <button onClick={previousTrack}>
            <svg className="icon h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 9">
              <path fill="var(--color-icon, #000)" d="M12 0v9h-1V8h-1V7H9V6H8V5H7v4H6V8H5V7H4V6H3V5H2v4H0V0h2v4h1V3h1V2h1V1h1V0h1v4h1V3h1V2h1V1h1V0h1z" />
            </svg>
          </button>
          <button onClick={togglePlay}>
            {!isPlaying ?
              <svg className="icon h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 9">
                <path fill="var(--color-icon, #000)" d="M3 9V0h1v1h1v1h1v1h1v1h1v1H7v1H6v1H5v1H4v1H3z" />
              </svg>
              :
              <svg className="icon h-4" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M2 0H4V9H2V0Z" fill="var(--color-icon, #000)" />
                <path d="M5 0H7V9H5V0Z" fill="var(--color-icon, #000)" />
              </svg>}
          </button>
          <button onClick={nextTrack}>
            <svg className="icon h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 9" >
              <path fill="var(--color-icon, #000)" d="M0 9V0h1v1h1v1h1v1h1v1h1V0h1v1h1v1h1v1h1V0h2v9h-2V5H9v1H8v1H7v1H6v1H5V5H4v1H3v1H2v1H1v1H0z" />
            </svg>
          </button>
        </div>
        <div className="wrapper">
          <input id="music-player-volume" value={currentVolume} className='mac-input' type="range" min="0" max="1" step="0.025" onChange={(e) => {
            const currentVolume = parseFloat(e.target.value)
            const musicPlayer = document.getElementById('music-player') as HTMLAudioElement | null;
            if(musicPlayer) {
              musicPlayer.volume = currentVolume
            }
            setCurrentVolume(currentVolume)
          }} />
          <label className="hidden" htmlFor="volume">Volume</label>
        </div>
      </div>
      <div>Track {trackIndex + 1} of {selectedPlaylistLength}</div>
      <audio id="music-player" crossOrigin="anonymous" ref={audio} onEnded={nextTrack} onTimeUpdate={updateTrackProgress} />
    </div>
  );
};
