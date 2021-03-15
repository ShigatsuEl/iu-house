import React from 'react';
import styled from 'styled-components';
import { useMousePosition } from 'hooks/useMousePosition';

const CursorComponent = styled.div`
  width: 8px;
  height: 8px;
  border: 4px solid ${(props) => props.theme.light.border};
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10;
  transition: all 50ms ease-in;
`;

const Cursor: React.FunctionComponent = () => {
  const { x: positionX, y: positionY } = useMousePosition();
  return <CursorComponent style={{ left: `${positionX}px`, top: `${positionY}px` }} />;
};

export default Cursor;
