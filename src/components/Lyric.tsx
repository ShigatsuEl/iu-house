import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Lrc } from '@mebtte/react-lrc';
import LrcSource from 'assets/lrc/celebrityLrc';

const LrcComponent = styled(Lrc)`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 30%;
  height: 50%;
  overflow: hidden !important;

  /* webkit */
  ::-webkit-scrollbar {
    width: 0;
  }
  /* firefox */
  scrollbar-width: none;
  /* ie */
  -ms-overflow-style: none;
`;

interface LyricProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const Lyric: React.FunctionComponent<LyricProps> = (props: LyricProps) => {
  const { audioRef } = props;
  const [currentTime, setCurrentTime] = useState<number>(0);

  const lineRenderer = useCallback(({ lrcLine: { content }, _, active }) => {
    return (
      <div
        style={{
          padding: '10px 0',
          textAlign: 'center',
          color: active ? '#FF7B89' : 'white',
          transform: `scale(${active ? 1.2 : 1})`,
          transition: 'transform 300ms',
        }}
      >
        {content}
      </div>
    );
  }, []);

  useEffect(() => {
    const audioTimeId = setInterval(() => {
      if (audioRef.current) {
        setCurrentTime(Math.floor(audioRef.current.currentTime));
      }
    }, 1000);
    return () => clearInterval(audioTimeId);
  }, []);

  return (
    <LrcComponent
      lrc={LrcSource}
      lineRenderer={lineRenderer}
      currentTime={currentTime * 1000}
      autoScrollAfterUserScroll={0}
    />
  );
};

export default Lyric;
