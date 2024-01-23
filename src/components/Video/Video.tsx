import {
  type SyntheticEvent,
  useRef, useState,
} from 'react';

import { PlaySymbol } from '@/icons';
import {
  PlayButton, Player, Wrapper,
} from './Video.styled';
import { type VideoProps } from './Video.types';

export const Video = ({
  poster, sources,
}: VideoProps) => {
  const playerRef = useRef<HTMLVideoElement>(null);

  const [isPlayButtonVisible, setPlayButtonVisible] = useState(true);

  const handlePlayback = async () => {
    const { current: playerElement } = playerRef;

    if (!playerElement) return;

    if (playerElement.paused) {
      await playerElement.play();
    } else {
      playerElement.pause();
    }
  };

  const handlePlaying = ({ type }: SyntheticEvent<HTMLVideoElement>) => {
    setPlayButtonVisible(type === 'pause');
  };

  const sourceNodes = Object.entries(sources).map(([format, source]) => (
    <source
      key={format} src={source.url}
      type={source.mime_type}
    />
  ));

  return (
    <Wrapper>
      <Player
        onPause={handlePlaying}
        onPlaying={handlePlaying}
        poster={poster}
        preload="metadata"
        ref={playerRef}
      >
        {sourceNodes}
        Your browser does not support HTML5 video.
      </Player>
      <PlayButton
        $isVisible={isPlayButtonVisible}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handlePlayback}
      >
        <PlaySymbol />
      </PlayButton>
    </Wrapper>
  );
};
