import { RefObject, useEffect, useState } from 'react';

type Position = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

export const useElementPosition = (ele: RefObject<HTMLElement>): Position => {
  const [elementPosition, setElementPosition] = useState<Position>({
    x: undefined,
    y: undefined,
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const DOMRect = ele?.current?.getBoundingClientRect();
    setElementPosition({ x: DOMRect?.x, y: DOMRect?.y, width: DOMRect?.width, height: DOMRect?.height });
  }, []);

  return elementPosition;
};
