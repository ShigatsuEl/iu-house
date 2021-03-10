import React, { useEffect, useRef, useState } from 'react';
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

const Video: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isVideoLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (videoRef) {
      videoRef.current?.addEventListener('loadeddata', isVideoLoad);
    }
    return () => videoRef.current?.removeEventListener('loadeddata', isVideoLoad);
  }, []);

  return (
    <VideoComponent ref={videoRef} $loading={loading} autoPlay muted loop controlsList="nodownload">
      <source src={Source} type="video/mp4" />
      Your browser does not support the video tag.
    </VideoComponent>
  );
};

export default Video;
