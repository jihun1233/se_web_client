# se_web_client

se web client - normal user
SE 학과 게시판. 일반 이용자를 위한 페이지

배포는 되지않았습니다.

## 주요 기능

- 메뉴 표시
- 게시판의 게시글 조회
- 게시글 조회
- 게시글 작성

## 사용한 기술

- React
  CSR, SPA로 빠른 화면전환과 컴포넌트 단위 개발을 위해 사용했습니다.
- Redux
  여러 컴포넌트에서 사용될 상태를 관리하기 위해 사용했습니다. 구현중이던 것 외에 더 많은 기능을 추가할 예정이었기 때문에 큰 규모의 상태를 관리할것이라 생각하여 Redux를 선택했습니다.
- Redux-saga
  Redux의 미들웨어로
- React-router
  컴포넌트로 이루어진 각 페이지를 라우팅하기 위해 사용했습니다.
- msw
  백엔드와 직접 통신하지 않고도 예상되는 api의 응답상황을 데이터로 만들어 프론트엔드만으로 테스트해보기 위해 사용했습니다. 지정해둔 url으로 요청을 보내면 msw가 감지하고 지정해둔 응답을 보내줍니다.
- storybook
  UI 컴포넌트 개발 도구로, 리액트로 개발한 컴포넌트들을 문서화하여 정리해 외부에 공개하거나 팀내에서 확인할 수 있습니다. props를 storybook 환경에서 다양하게 조작할 수 있고, 애드온을 설치하여 더 많은 상호작용을 할 수 있습니다.
- eslint, prettier
  정적 코드 분석 도구로 작성한 코드가 지정한 컨벤션을 지키고 있는지 확인할 수 있습니다. prettier를 함께 사용해 더 깔끔하고 가독성 높게 포매팅을 할 수 있습니다.
- axios
  비동기 통신을 위해 사용했습니다.

## 미리보기

- 게시판 메인
  ![image](https://user-images.githubusercontent.com/56039591/149667394-c388770d-2816-4ce6-9435-1b44a7d3d479.png)
- 헤더 게시판목록
  ![image](https://user-images.githubusercontent.com/56039591/149670010-15d4cc30-f56b-4b60-b310-927c013732e5.png)
- 게시글 작성 : 태그 추가 및 제거
  ![image](https://user-images.githubusercontent.com/56039591/149669930-e13307d4-4e87-41af-8a3d-c684c947c86b.png)
-
