import { useSpring } from 'react-spring';

export const useTranslationPosition = <T extends unknown>(translateX: number): T[] => {
  const mainTranslate: T = useSpring({
    transform: `translate3d(${translateX}px, 0px, 0px)`,
    from: { transform: 'translate3d(0px, 0px, 0px)' },
  });
  const subTranslate: T = useSpring({
    transform: `translate3d(${translateX / 2}px, 0px, 0px)`,
    from: { transform: 'translate3d(0px, 0px, 0px)' },
  });
  const topBannerTranslate: T = useSpring({
    transform: `translate3d(${translateX / 10}px, 0px, 0px)`,
    from: { transform: 'translate3d(0px, 0px, 0px)' },
  });
  const bottomBannerTranslate: T = useSpring({
    transform: `translate3d(${-(translateX / 10)}px, 0px, 0px)`,
    from: { transform: 'translate3d(0px, 0px, 0px)' },
  });

  return [mainTranslate, subTranslate, topBannerTranslate, bottomBannerTranslate];
};
