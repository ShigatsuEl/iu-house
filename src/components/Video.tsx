import React, { forwardRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Source from '../assets/video/celebrityVideo.mp4';

type VideoComponentProps = {
  $loading: boolean;
  isHome?: boolean;
};

type SizeType = Pick<VideoProps, 'isHome'>;

const sizeStyles = css<SizeType>`
  ${({ isHome }) =>
    isHome === true &&
    css`
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
    `}
  ${({ isHome }) =>
    isHome !== true &&
    css`
      width: 44vw;
      height: 33vw;
      min-width: 88vh;
      min-height: 66vh;
      object-fit: fill;
    `}
`;

const VideoComponent = styled.video<VideoComponentProps>`
  ${sizeStyles};
  opacity: ${(props) => (props.$loading ? 0 : 1)};
  transition: opacity 2s ease-in-out;
  user-select: none;
`;

interface VideoProps {
  isHome?: boolean;
}

const Video = forwardRef<HTMLVideoElement, VideoProps>((props: VideoProps, ref) => {
  const [loading, setLoading] = useState<boolean>(true);

  const isVideoLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    (ref as React.RefObject<HTMLVideoElement>)?.current?.addEventListener('loadeddata', isVideoLoad);
    return () => (ref as React.RefObject<HTMLVideoElement>)?.current?.removeEventListener('loadeddata', isVideoLoad);
  }, [ref]);

  return (
    <VideoComponent ref={ref} $loading={loading} {...props} muted loop playsInline controlsList="nodownload">
      <source src={Source} type="video/mp4" />
      Your browser does not support the video tag.
    </VideoComponent>
  );
});

Video.displayName = 'Video';

Video.defaultProps = {
  isHome: true,
};

export default Video;
