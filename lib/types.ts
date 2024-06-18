type Track = {
  soundcloud_id?: number;
  artist: string;
  title: string;
  duration_ms?: number;
  date_added?: string;
  waveform_url?: string;
  permalink_url: string;
  audio_url?: string;
}

type Tracklist = Track[];

type Playlist = {
  id: number;
  name: string;
  tracks: Tracklist;
};

export type { Tracklist, Track, Playlist };