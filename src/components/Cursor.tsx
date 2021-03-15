import React from 'react';
import styled from 'styled-components';

const CursorComponent = styled.div`
  width: 5px;
  height: 5px;
  border: 1px solid ${(props) => props.theme.light.border};
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10;
  mix-blend-mode: difference;
`;

const Cursor: React.FunctionComponent = () => {
  return <CursorComponent />;
};

export default Cursor;
