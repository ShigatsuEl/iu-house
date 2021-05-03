import React, { useEffect, useState } from 'react';
import { useSprings, animated, to as interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import styled from 'styled-components';
import { useTranslationPosition } from 'hooks/useTranslatePosition';
import { useAboutState } from 'store/aboutStore/context';

const cards = [
  'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
  'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg',
];

const cardsExplain = [
  { header: 'a', body: 'a' },
  { header: 'b', body: 'b' },
  { header: 'c', body: 'c' },
  { header: 'd', body: 'd' },
  { header: 'e', body: 'e' },
  { header: 'f', body: 'f' },
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
`;

const CardExplainContainer = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 100vh;
  background-color: #ba55d3;
  transition: transform 0.3s linear;
`;

const CardExplainHeader = styled(animated.h2)`
  font-size: 5rem;
  color: white;
`;

const CardExplainBody = styled(animated.span)`
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
