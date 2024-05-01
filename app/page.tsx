import { Desktop } from "@/components/Desktop";
import type { Tracklist } from "@/lib/types";
import { tracklist } from '@/lib/tracklist';

const shuffledTracklist: Tracklist = tracklist.sort((a, b) => 0.5 - Math.random());

export default function Home() {
  return (
    <Desktop tracklist={shuffledTracklist} />
  );
}
