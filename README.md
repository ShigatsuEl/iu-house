# IU House

Let's try to using React and TypeScript to introduce IU

### Description

이 레포지토리는 Create React App에 TypeScript를 적용해 [Lewa House](https://lewahouse.com/) 사이트를 IU를 소개하는 웹으로 클론해보는 것이다.<br>

완전히 똑같이 만드는 것에 중점을 두는 것이 아니고 TypeScript를 React에 적용할 때 효율적으로 설정하는 법과 기본적인 타입과 인터페이스를 활용하는 방법, 좋은 컴포넌트 구조를 형성하는 법에 관해 검색해보며 여러가지를 테스트해볼 것이다.<br>

### Further Description

- 2021.05.21(수정)

  **IU House 프로젝트는 저작권 침해 가능성이 존재하므로 더 이상 업데이트 하지 않습니다.**

  \+ 지금까지 만들어온 결과물과 개발과정 및 회고록을 작성으로 마무리 한다.

### Technology Stack

| Frontend |    Technology     |        Description        |
| :------: | :---------------: | :-----------------------: |
|    01    |    React(CRA)     |        UI Library         |
|    02    |    Reach Hook     |  Functional Programming   |
|    03    |    TypeScript     | More Type with JavaScript |
|    04    | Styled Components |        CSS Method         |
|    05    |   React Spring    |    Third Party Library    |
|    06    |  React Throttle   |      For Wheel Event      |
|    07    |    React icons    |       Icon Library        |

### Directory Structure

```
.vscode
node_modules
public
src
|-- @types
|   |-- react-spring
|   |-- react-throttle
|   |-- react-use-gesture
|-- assets
|   |-- audio
|   |-- Image
|   |-- lrc
|   |-- video
|-- components
|   |-- Autio.tsx
|   |-- Cursor.tsx
|   |-- Deck.tsx
|   |-- Footer.tsx
|   |-- Header.tsx
|   |-- Introduce.tsx
|   |-- IntroList.tsx
|   |-- Lyric.tsx
|   |-- Main.tsx
|   |-- Modal.tsx
|   |-- NewSong.tsx
|   |-- Video.tsx
|-- containers
|   |-- About.tsx
|   |-- Home.tsx
|-- hooks
|   |-- useElementPosition.tsx
|   |-- useMousePosition.tsx
|   |-- useTranslatePosition.tsx
|-- store
|   |-- aboutStore
|   |   |-- context.tsx
|   |   |-- reducer.ts
|   |   |-- store.ts
|   |   |-- types.ts
|-- styles
|   |-- globalStyles.ts
|   |-- styled.d.ts
|   |-- theme.ts
|-- App.tsx
|-- index.tsx
|-- react-app-env.d.ts
|-- Router.tsx
.eslintrc.js
.gitattributes
.gitignore
.prettierrc
package-lock.json
package.json
README.md
tsconfig.json
yarn.lock
```

### Install and SetUp

Git this repository. You will need node and (npm or yarn) installed globally on your device.<br>

It is recommended to start with yarn rather than npm<br>

1. `git clone https://github.com/ShigatsuEl/iu-house.git`
2. `yarn install` or `npm install`

### Run

To start Server:<br>

`yarn start` or `npm start`<br>

### Screen Function

- Whole

  - Home | About 라우트 구현
  - 영상 음소거, 음소거 해제 버튼 구현
  - 음소거, 음소거 해제 버튼이 마우스를 따라가도록 구현

- Modal

  - 아이유 Celebrity MV와 오디오 플레이 버튼 구현
  - 아이유 Celebrity MV와 오디오 음소거로 플레이하는 버튼 구현
  - 마우스가 플레이 버튼으로부터 일정 영역 안으로 진입 시, 플레이 버튼이 마우스를 따라도록 구현

- Home

  - 백그라운드 아이유 Celebrity MV 구현

- About

  - 좌우 스크롤 구현
  - Celebrity 가사 리더기 구현
  - 좌우 슬라이딩 모션 구현
  - Home 영상과 About 영상이 동시에 시작할 수 있도록 구현
  - 아이유 카드 덱 구현
  - 카드 덱 360도 드래그 기능 추가
  - 카드 덱 상태와 카드 설명 덱 연동
