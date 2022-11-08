## 문제 1

- `False`
  - 항상 Vuex를 사용해야 하는 것은 아니다. 
  - (참고) 기본은 데이터 간 단방향 흐름으로 진행되며 규모가 작은 프로젝트의 경우 
    `Event Bus`를 통한 형제 컴포넌트의 상태 정보 공유를 하기도 한다.
- `True`
- `False`
  - `Mutations`에 정의된 핸들러는 `commit` 메서드를 통해 호출하고, 
    `Actions`에 정의된 핸들러는 `dispatch` 메서드를 통해 호출한다.
- `True`




## 문제 2

https://vuex.vuejs.org/guide/actions.html

`Actions`

- Mutations와 유사하지만 다음과 같은 차이점이 있음
  - state를 변경하는 대신 Mutations를 commit() 메서드로 호출
- Mutations와 달리 비동기 작업이 포함될 수 있음 
  (Backend API와 통신하여 Data Fetching 등의 작업 수행)
-  context 객체를 인자로 받음
  - context를 통해 store.js 파일 내에 있는 모든 요소의 속성 접근 & 메서드 호출이 가능
  - 단, (가능하지만) state를 직접 변경하지 않음
- Component에서 dispatch() 메서드에 의해 호출됨



`Mutations`

- state를 변경하는 유일한 방법
- Mutations의 핸들러는 반드시 동기적이어야 함
  - 비동기적 로직(ex. 콜백함수)은 state가 변화하는 시점이 의도한 것과 달라질 수 있으며,
     콜백이 실제로 호출 될 시기를 알 수 있는 방법이 없음 (추적 할 수 없음)
- 첫번째 인자로 항상 state를 받음
- Actions에서 commit() 메서드에 의해 호출됨



```
“Actions 핸들러를 통해 state를 조작 할 수 있지만,
state는 오로지 Mutations 메서드를 통해서만 조작 해야함”
- 명확한 역할 분담을 통해 서비스 규모가 커져도 state를 올바르게 관리하기 위함
```





## 문제 3

- (a) `state`
- (b) `getters`
- (c) `mutations`
- (d) `state`





## 문제 4

created! 

mounted!

> updated hook은 data의 변화 이후 DOM이 변경되는 시점에 발생