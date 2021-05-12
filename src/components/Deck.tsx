import React, { useEffect, useState } from 'react';
import { useSprings, animated, to as interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import styled from 'styled-components';
import DeckImgOne from 'assets/Image/deckOne.jpg';
import DeckImgTwo from 'assets/Image/deckTwo.jpg';
import DeckImgThree from 'assets/Image/deckThree.jpg';
import DeckImgFour from 'assets/Image/deckFour.jpg';
import DeckImgFive from 'assets/Image/deckFive.jpg';
import DeckImgSix from 'assets/Image/deckSix.jpg';
import DeckImgSeven from 'assets/Image/deckSeven.jpg';
import DeckImgEight from 'assets/Image/deckEight.jpg';
import DeckImgNine from 'assets/Image/deckNine.jpg';
import DeckImgTen from 'assets/Image/deckTen.jpg';
import { useTranslationPosition } from 'hooks/useTranslatePosition';
import { useAboutState } from 'store/aboutStore/context';

const cards = [
  DeckImgTen,
  DeckImgNine,
  DeckImgEight,
  DeckImgSeven,
  DeckImgSix,
  DeckImgFive,
  DeckImgFour,
  DeckImgThree,
  DeckImgTwo,
  DeckImgOne,
];

const cardsExplain = [
  { header: '-IU, Love Alone', body: '“Maybe love is like looking for a placeThat doesn’t even exist”' },
  {
    header: '-IU, Can’t Love You Anymore',
    body: '“It’s so funny. I try to turn things back We try to ignore it. But at this point How can we love again?”',
  },
  {
    header: '-IU, Through the Night',
    body:
      '“Just like letters on the sand where waves were. I feel you’ll disappear to a far off place. I miss you again and miss you more”',
  },
  {
    header: '-IU, Gloomy Clock',
    body:
      '“When time passes, this depression When time passes, the things I said were hard and complained about. They will become things of the past The sharp and emotional memories. They will become dull, become dull like a square wearing down to become a circle”',
  },
  {
    header: '-IU, Love Alone',
    body: '“I had nothing. But thanks to the scars you gave me I became the main character in a sad love story”',
  },
  {
    header: '-IU, Love Story',
    body: '“We were each other’s mirror reflections. Even until we broke apart from the looks we threw at each other”',
  },
  {
    header: '-IU, nding Scene',
    body:
      '“Make sure you eat well, because it’ll all pass. You’ll be able to fall asleep like you did before. I really mean it You have the right to be happier”',
  },
  {
    header: '-IU, Full Stop',
    body:
      '“I’ll miss you a lot. But I don’t ever wanna see you again. It hurts and I’ll cry. But I never want to smile because of you again”',
  },
  {
    header: '-IU, Palette',
    body:
      '“Past twenty, not yet thirty In between, right thereWhen I’m not a kid or an adultWhen. I’m just meI shine the brightestSo don’t get scared when darkness comes',
  },
  {
    header: '-IU, Gloomy Clock',
    body:
      '“When time passes, the breakup that tore my heart apartWhen time passes, the young memories that kicked away at the blanketsIt gets forgotten, gets forgotten, it just passes right byIt gets forgotten, gets forgotten, but back then I thought that was everything”',
  },
];

const CardContainer = styled(animated.div)`
  position: relative;
  display: flex;
  align-items: center;
  width: 60vw;
  height: 100%;
  overflow: hidden;
  transition: transform 0.3s linear;
`;

const CardWrapper = styled(animated.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  will-change: transform;
`;

const CardOne = styled(animated.div)`
  background-color: white;
  background-size: auto 85%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 45vh;
  max-width: 300px;
  height: 85vh;
  max-height: 570px;
  will-change: transform;
  border-radius: 10px;
  box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
  cursor: grab;
`;

const CardExplainContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  padding: 7rem 0;
  width: 40vw;
  height: 100vh;
  background-color: #ba55d3;
  transition: transform 0.3s linear;
`;

const CardExplainHeader = styled(animated.h2)`
  margin-bottom: 5rem;
  font-size: 5rem;
  color: white;
`;

const CardExplainBody = styled(animated.p)`
  font-size: 2rem;
  color: white;
`;

const to = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 });
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function shuffleCardStack(card: string[], cardExplain: { header: string; body: string }[]) {
  for (let i = card.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [card[i], card[j]] = [card[j], card[i]];
    [cardExplain[i], cardExplain[j]] = [cardExplain[j], cardExplain[i]];
  }
  return [card, cardExplain];
}

const Deck: React.FunctionComponent = () => {
  const { translateX } = useAboutState();
  const subTranslate = useTranslationPosition(translateX)[1];
  const [suffleCards, setShuffleCards] = useState(cards);
  const [suffleCardsEp, setShuffleCardsEp] = useState(cardsExplain);
  const [gone] = useState(() => new Set());
  const [last, setLast] = useState(suffleCards.length - 1);
  const [springs, setSprings] = useSprings(suffleCards.length, (i) => ({ ...to(i), from: from(i) }));

  const getLastValue = (set) => {
    let value: number | undefined;
    for (value of set);
    if (value === undefined || value === 0) return gone.size - 1;
    return value - 1;
  };

  const bind = useDrag(({ args: [index], down, movement: [mx, my], direction: [xDir, yDir], velocity }) => {
    const trigger = velocity > 0.2;
    const verticalDir = xDir < 0 ? -1 : 1;
    const horizontalDir = yDir < 0 ? -1 : 1;
    if (!down && trigger && (Math.abs(mx) > (window.innerWidth * 0.6) / 4 || Math.abs(my) > window.innerHeight / 4)) {
      gone.add(index);
      setLast(() => {
        const lastValue = getLastValue(gone);
        return lastValue;
      });
    }
    setSprings((i) => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? Math.abs(mx) * 4 * verticalDir : down ? mx : 0;
      const y = isGone ? Math.abs(my) * 4 * horizontalDir : down ? my : 0;
      const rot = mx / 100 + (isGone ? verticalDir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1;
      return { x, y, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } };
    });
    if (!down && gone.size === suffleCards.length)
      setTimeout(() => {
        gone.clear();
        setSprings((i) => to(i));
      }, 600);
  });

  useEffect(() => {
    const [randCard, randCardEp] = shuffleCardStack(cards, cardsExplain);
    setShuffleCards(() => randCard as string[]);
    setShuffleCardsEp(() => randCardEp as { header: string; body: string }[]);
  }, []);

  return (
    <>
      <CardContainer style={subTranslate}>
        {springs.map(({ x, y, rot, scale }, i) => (
          <CardWrapper key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
            <CardOne
              {...bind(i)}
              style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${suffleCards[i]})` }}
            />
          </CardWrapper>
        ))}
      </CardContainer>
      <CardExplainContainer style={subTranslate}>
        <CardExplainHeader>{suffleCardsEp[last].header}</CardExplainHeader>
        <CardExplainBody>{suffleCardsEp[last].body}</CardExplainBody>
      </CardExplainContainer>
    </>
  );
};

export default Deck;
