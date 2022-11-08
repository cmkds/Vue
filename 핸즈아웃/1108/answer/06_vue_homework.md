## 문제 1.

(a) `Vuex.Store`

(b) `state.count++`

(c) `context.commit('NUMBER_INCREMENT')`



## 문제 2.

- (a) actions
  - 비동기 API 및 mutation 호출에 적합한 함수는 actions에 작성한다.





## 문제 3.

> https://vuex.vuejs.org/guide/#the-simplest-store

- state를 직접 변경하지 않고 mutation을 통해 변경하는 이유는 `state의 변경사항을 추적`하기 위해
  - 명시적으로 추적하기를 원하기 때문
- 의도를 보다 명확하게 만들어 코드를 읽을 때 앱의 state 변경에 대해 더 잘 추론할 수 있음
- 또한 이를 통해 모든 mutation를 기록하거나 state 스냅샷을 저장하거나  
  시간 흐름에 따라 디버깅을 할 수 있는 도구를 구현할 수 있음

