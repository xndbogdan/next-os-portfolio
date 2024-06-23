import { create } from 'zustand'
import { Playlist } from './types';
import { playlists } from './tracklist';

type Store = {
  icons: { focused: boolean; clicks: number; dragging: boolean }[],
  setIcons: (icons: { focused: boolean; clicks: number; dragging: boolean }[]) => void
  playlist: Playlist,
  setPlaylist: (playlist: Playlist) => void,
  windows: { focused: boolean; closed: boolean; minimized: boolean }[],
  setWindows: (windows: { focused: boolean; closed: boolean; minimized: boolean }[]) => void
}

const useStore = create<Store>()((set) => ({
  icons: Array(8).fill({ focused: false, clicks: 0, dragging: false }),
  setIcons: (icons) => set({ icons }),
  playlist: typeof window !== 'undefined' ? 
    localStorage.getItem('playlist-id') ? 
      playlists.find((playlist) => playlist.id === parseInt(localStorage.getItem('playlist-id')!))! : 
      playlists[0] : 
    playlists[0],
  setPlaylist: (playlist) => {
    set({ playlist });
    if (typeof window !== 'undefined') {
      localStorage.setItem('playlist-id', playlist.id.toString());
    }
  },
  windows: [
    { focused: false, closed: false, minimized: false },
    ...Array(7).fill({ focused: false, closed: true, minimized: false })
  ],
  setWindows: (windows) => set({ windows })
}))

export { useStore }