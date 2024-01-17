import React, {
  type SyntheticEvent,
  useRef, useState,
} from 'react';

import { PlaySymbol } from '@/icons';
import { PlayButton, Player } from './Video.styled';
import { type VideoFormat, type VideoProps } from './Video.types';

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

  return (
    <>
      <Player
        onPause={handlePlaying}
        onPlaying={handlePlaying}
        poster={poster}
        preload="metadata"
        ref={playerRef}
      >
        {Object.keys(sources).map(source => (
          <source
            key={sources[source as VideoFormat].filename}
            src={sources[source as VideoFormat].url}
            type={`${sources[source as VideoFormat].type}/${sources[source as VideoFormat].subtype}`}
          />
        ))}
        Your browser does not support HTML5 video.
      </Player>
      <PlayButton
        $isVisible={isPlayButtonVisible}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handlePlayback}
      >
        <PlaySymbol />
      </PlayButton>
    </>
  );
};
