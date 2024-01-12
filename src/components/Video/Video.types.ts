import { type ACFFile } from '@/types';

export type PlayButtonStyledProps = {
  $isVisible: boolean;
}

export type VideoFormat = 'webm' | 'mp4';

export type VideoProps = {
  poster: string;
  sources: {
    [key in VideoFormat]: Partial<ACFFile>
  };
}
