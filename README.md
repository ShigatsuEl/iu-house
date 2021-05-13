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

### Development Process

- 타입스크립트와 함께 CRA 프로젝트 생성
- ESLint | Prettier | TypeScript 설정
- 타입 정의와 함께 Styled Component 구성 및 Global Style 적용
- Home | About 라우터 구성
- 모달창 주요 기능(시작버튼, 음소거 시작버튼) 구현
- 모달창 시작버튼, 음소거 시작버튼을 비디오와 오디오에 연동
- 일정 영역 진입시, 마우스 따라가는 기능 구현
- 외부 라이브러리 타입 정의
- Footer 영역에 음소거 및 음소거 해제 버튼 구현
- 마우스 커서 구현
- 라우트 위치에 따른 비디오 컴포넌트 투명도 조절
- About 페이지에서 좌우 스크롤 기능 구현
- 좌우 스크롤에 Throttle | Debounce 함수 적용
- 영상과 오디오 시간에 맞춰 가사 리더기 구현
- Home 영상 플레이타임에 맞춰 About 영상 플레이타임 동일화
- 인물을 소개하는 Introduce 컴포넌트 구현
- 스크롤 동작에 따라 Introduce컴포넌트의 Top Banner와 Bottom Banner의 슬라이딩 대칭 효과
- 전체적인 슬라이딩 효과를 위해 About Context | Reducer 구현
- React Spring 라이브러리를 사용해 Deck 컴포넌트 구현
- 좌우로 섞던 Deck 컴포넌트를 360도로 섞을 수 있도록 기능 추가
- Deck 컴포넌트와 Deck 설명 컴포넌트를 연동
- 슬라이드 양끝 제한으로 프로젝트 마무리
