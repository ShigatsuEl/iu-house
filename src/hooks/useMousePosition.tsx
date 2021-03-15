import { useState, useEffect } from 'react';

type Position = {
  x: number | null;
  y: number | null;
};

export const useMousePosition = (): Position => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: null, y: null });

  const updateMousePosition: { (e: MouseEvent): void } = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};
