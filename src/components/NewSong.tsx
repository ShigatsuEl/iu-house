import { useTranslationPosition } from 'hooks/useTranslatePosition';
import React from 'react';
import { animated } from 'react-spring';
import { useAboutState } from 'store/aboutStore/context';
import styled from 'styled-components';

const NewSongContainer = styled(animated.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 7rem 0 7rem 7rem;
  width: 30vw;
  height: 100%;
  transition: transform 0.3s linear;
`;

const NewSongBox = styled.div`
  color: ${(props) => props.theme.light.secondaryText};
  margin-bottom: 8rem;
`;

const NewSongHeader = styled.h2`
  font-size: ${(props) => props.theme.px.mainTitle};
  margin-bottom: 2rem;
`;

const NewSongIntro = styled.p`
  font-size: ${(props) => props.theme.px.headingThree};
`;

const NewSong: React.FunctionComponent = () => {
  const { translateX } = useAboutState();
  const subTranslate = useTranslationPosition(translateX)[1];

  return (
    <NewSongContainer style={subTranslate}>
      <NewSongBox>
        <NewSongHeader>New Song Introduction</NewSongHeader>
        <NewSongIntro>
          &quot;Hi, hi like petals.&quot; &#xA;
          <br />
          &quot;I don&apos;t have any questions in my mind. I&apos;m next&quot;
          <br />
          The flower words of Lilac, which was used in the title song title along with the album name, are First Love
          and Memories of Young Day
        </NewSongIntro>
      </NewSongBox>
    </NewSongContainer>
  );
};

export default NewSong;
