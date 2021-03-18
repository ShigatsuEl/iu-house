import React, { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Source from '../assets/video/celebrityVideo.mp4';

type VideoProp = {
  $loading: boolean;
};

const VideoComponent = styled.video<VideoProp>`
  position: absolute;
  z-index: -10;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 56.25vw;
  min-width: 177.77vh;
  min-height: 100vh;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props.$loading ? 0 : 1)};
  transition: opacity 2s ease-in-out;
`;

const Video = forwardRef<HTMLVideoElement>((_props, ref) => {
  const [loading, setLoading] = useState<boolean>(true);

  const isVideoLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    (ref as React.RefObject<HTMLVideoElement>)?.current?.addEventListener('loadeddata', isVideoLoad);
    return () => (ref as React.RefObject<HTMLVideoElement>)?.current?.removeEventListener('loadeddata', isVideoLoad);
  }, [ref]);

  return (
    <VideoComponent ref={ref} $loading={loading} muted loop playsInline controlsList="nodownload">
      <source src={Source} type="video/mp4" />
      Your browser does not support the video tag.
    </VideoComponent>
  );
});

Video.displayName = 'Video';

export default Video;
