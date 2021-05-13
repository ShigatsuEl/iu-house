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

### Memoirs

**개발을 진행하면서 어려웠던 부분과 해결방법 그리고 부족한 부분에 대해 공유한다.**<br>

- Video와 Audio가 라우트 이동 시에도 재생되도록 하기 위해 생각해 본 방법

  이번 프로젝트는 외부 서버로부터 데이터를 받아오는 일이 없기 때문에 로딩이 필요 없다고 느껴졌다.<br>
  그래서 막연하게 든 생각이 라우트를 이동해도 마치 하나로 이어진 것처럼 비디오와 오디오가 계속해서 재생된다면 좋은 사용자 경험을 주지 않을까 싶어 실제로 해보기로 했다.<br>
  라우트를 이동해도 그대로 재생하기 위해 비디오와 오디오를 라우트 밖에다 위치하고 라우트를 이동할 때마다 비디오와 오디오를 컨트롤 해야 했다.<br>
  문제는 라우트 밖에 있는 비디오와 오디오를 라우트 안에서 컨트롤 하기 위해 형제 컴포넌트간에 ref를 전달하는 방법이 필요했다.<br>
  추후에 구글에서 검색을 하다 forwardRef라는 메서드를 통해 서로 다른 컴포넌트간에 ref를 전달하는 방법을 찾았고 이를 통해 ref를 컨트롤 할 수 있게 되었다.<br>

- 마우스가 일정 영역을 진입할 시, 엘리먼트가 마우스를 따라가게 하기 위해 시도한 방법

  LewaHouse 홈페이지에 접속을 해보면 모달창 정 가운데에 있는 start버튼에 마우스를 갖다대면 버튼이 마우스를 따라오도록 되어있는데 이것을 구현해보고 싶었다.<br>
  처음에는 start버튼의 getBoundingClientRect라는 Web API 메서드를 사용해 엘리먼트의 영역 안에 마우스가 들어가면 따라오도록 구현해봤다.<br>
  하지만 막상 구현하니 엘리먼트가 사각형 박스이기 때문에 굉장히 어색하게 마우스를 따라가며 뚝뚝 끊어지는 느낌을 주었다.<br>
  이것을 해결하기 위해 수학을 조금 사용했는데 start버튼의 중심에서 원을 그려 원 내부에 마우스가 위치하면 따라올 수 있도록 방법을 바꾸어보았다.<br>
  다행히 원의 내부 영역위치를 구하는 방법은 내장 메서드로 이미 구현이 되어있는 부분이 많아 내가 직접 구현할 수고를 덜었고 덕분에 마우스를 굉장히 매끄럽게 따라오는 기능을 구현할 수 있었다.<br>

- 휠 이벤트를 제한하기

  Horizontal Scroll을 구현하기 위해서 Wheel Event를 추가하고 deltaY값에 따라 translateX값을 변동하여 Element 위치를 업데이트 할 수 있었다.<br>
  문제점은 수직 Scroll과 다르게 Whell Event는 Document의 어느 위치에 있는지 인지하지 못하기 때문에 Document의 양끝 사이드에 위치하는지 확인할 수 없었다.<br>
  생각해본 해결방안은 deltaY값의 총합이 < 0 이고 (Horizontal Container의 전체 width - 마지막 Horizontal Container의 자식 Element width) < deltaY인 두 경계 내에서만 translate가 작동하도록 해보는 것이다.<br>
  추후에 슬라이딩 효과를 집어넣게 되면서 슬라이딩한 translateX만큼 더 감소한 X값을 한계점으로 지정하였다.<br>

- 휠 이벤트 횟수 제한하기

  휠 이벤트는 아주 조금 발생해도 1초에 매우 많은 이벤트가 발생할 수 있다.<br>
  콘솔로 출력해보면 매우 빈번하게 발생하는데 이것은 렉의 주요 원인이 될 것이다.<br>
  구글링을 통해 알아보니 이렇게 많이 발생하는 이벤트를 통제하기 위해 Throttle 또는 Debounce 함수를 구현해 적용시켜 이벤트 회수를 제한하는 것이다.<br>
  두 방식에는 약간의 차이가 있는데 Throttle은 지정시간 내에 단 한번만 발생할 수 있도록 하는 것이고 Debounce는 지정시간 이후에 이벤트를 한 번만 실행하도록 도와주는 함수이다.<br>
  이번 프로젝트에서는 Throttle을 사용하여 휠 이벤트를 최적화하였다.<br>

- Styled Component 재사용

  Video Component를 Home Route 이외에도 About Route에서 최소 2~3번 이상의 Video Component를 재사용할 계획이었다.<br>
  Sub Video Component를 만들자니 이미 만들어둔 Video Component가 만드려고 하는 Video와 매우 비슷한 방식의 로직을 가질 예정이었고 그것 외에는 Style부분만 다르게 하고 싶었기 때문에 굳이 새로운 Sub Video Component를 만들어야 할까? 라는 생각이 들었다.<br>
  똑같은 컴포넌트인데 Style만 다르다고 새로운 컴포넌트를 만든다는 건 Component를 원하는 대로 붙일 수 있는 React의 장점을 죽이는 것만 같았다.<br>
  그래서 내가 선택한 방법은 Video Component에 새 prop을 내려주어 그 prop에 따라 새로운 css style을 적용할 수 있도록 하였다.<br>
  분명 더 좋은 방법이 있을 것 같은데 구글링으로 찾아본 결과 중 이 방법이 최선이었다.<br>
  아쉽지만 일단 구현하고 더 좋은 방법을 찾으면 리팩토링 해볼 예정이다.<br>

- Lyric 기능 구현하기

  흔한 음악 어플리케이션에 있는 가사 리더기를 구현해보고 싶었다.<br>
  시간이 많지 않아 누군가 구현해 둔 dependency(@mebtte/react-lrc)를 사용했으며 생각처럼 쉽게 구현할 수 없었지만 깃허브에 있는 README파일을 읽어보고 필요한 것만 가져와 사용해 결국에 구현할 수 있었다.<br>
  만약 나 혼자서 이 기능을 만드려고 했다면 더 많은 시간을 필요로 했을 것이다. 누군가가 만들어본 패키지를 사용해보면서 감사함을 느꼈고 나 역시 언젠가 많은 개발자들에게 도움이 될 수 있는 개발자가 되고 싶다는 생각을 한다.<br>

- translateX prop을 내려주기 위해 생각해본 방법과 결과

  Main 컴포넌트에는 translateX 상태를 가지고 있다. 문제는 translateX상태를 자식 컴포넌트에서도 사용하게 하고 싶었다.<br>
  처음에는 그저 아무 생각없이 prop으로 내려주면 해결될 것 같았는데 직접 해본 결과 prop으로 받은 translateX는 상태가 변경되어도 갱신되지 않고 처음 렌더링 된 그대로의 상태값을 가지게 되었다.<br>
  따라서 내가 생각한 방법은 useContext와 useReducer를 사용해 조그마한 store를 만드는 것이었다.<br>
  사실 이번 프로젝트는 redux를 사용할 정도로 크지 않아 사용하지 않아도 되지만 수시간으로 변하는 state를 공유하는 방법은 이것밖에 생각이 나지 않아 훅을 사용해보게 되었다.<br>
  결과적으로는 Main 컴포넌트 외 자식 컴포넌트에서 state를 공유할 수 있었고 문제를 해결할 수 있었지만 하나의 상태를 해결하기위해 context와 reducer를 생성하게 된 점은 너무 아쉬웠다.<br>

- Deck 컴포넌트 구현하기

  React Spring과 React Use Gesture를 사용해 카드를 섞는 컴포넌트를 구현했다.<br>
  이번 프로젝트를 하면서 가장 어려웠던 파트이기도 했는데 첫번째는 타입이 없는 외부 라이브러리를 사용하기 위해 타입을 정의해주어야 하는 것<br>
  두번째는 공식문서에 있는 그대로 했지만 실행했을 때 오류가 발생했는데 나중에 알고보니 의존성 문제였으며 버전을 일치시켜주자 구현할 수 있었다.<br>
  세번째는 공식문서에 있는 카드 기능에 내가 추가해보고 싶었던 360도 카드 섞기 기능을 추가하는 것인데 문제는 가로 방향이 아닌 360도 방향으로 구현해야 하다보니 카드가 바깥으로 나가지 않아 트리거가 제대로 되지 않는 문제가 발생했다.<br>
  결국 약간의 트릭을 사용해 카드를 어느 일정부분까지 끌고오지 않는 이상 카드가 바깥으로 나가지 않게 되며 트리거도 유지할 수 있게 만들었다.<br>
  마지막으로 순서를 랜덤으로 배정하는 것으로 새로고침이 발생할 때마다 랜덤으로 카드를 섞게 하였고 동시에 카드 설명부분도 카드와 연동되도록 하였다.<br>

### Finally

이번 프로젝트에서 아쉬웠던 점은 아무리 봐도 TypeScript를 제대로 활용해보지 못했다는 것인데 어떤 경우에는 거의 자바스크립트랑 차이가 없어 타입스크립트의 장점을 살려보지 못한 것이 크다.<br>
그럼에도 타입스크립트는 내가 개발할 때 계속해서 경고를 보내주어 앱이 만들어질 때마다 탄탄한 기분을 느낄 수 있었으며 예전에 자바스크립트로 리액트를 개발했을 때와 비교해 굉장히 오류를 찾기 쉬워졌기 때문에 앞으로도 타입스크립트를 활용해보는 것을 멈추지 않을 것이다.<br>

또한 이 프로젝트는 아직 Detail 페이지와 Contact 페이지를 메꾸지 못했고 그 외에 반응형 작업과 다크모드를 구현해보지 못하였다.<br>
그럼에도 이 프로젝트를 멈추는 이유는 내가 저작권에 대해 무지했으며 단순히 재밌어보여서 무작정 시작했던 결과이다.<br>
다음 프로젝트를 시작할 때는 충분한 기간을 가지고 계획을 구상하고 문제가 되는 부분을 검토하는 것을 잊지 말아야겠다.<br>
