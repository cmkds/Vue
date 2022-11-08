# homework

1.

```python
Vue 프로젝트에서 상태 관리르 하기 위해서는 반드시 Vuex를 설치해야 한다.
- F
---항상 Vuex를 사용해야 하는 것은 아니다.
---기본은 데이터 간 단방향 흐름을 진행되며 규모가 작은 프로젝트의 경우 Event Bus를 통한 형제 컴포넌트의 상태 정보 공유를 하기도 한다.

mutations는 반드시 state를 수정하기 위해서만 사용되어야 한다.
- T

mutations는 store.dispatch로, actions는 store.commit으로 호출 할 수 있다.
- F
---반대 mutations는 commit 으로 actions는 dispatch로

state는 data의 역할, getters는 computed와 유사한 역할을 담당한다.
- T
```





2.

Vuex에서 State, Getters, Mutations, Actions의 역할을 각각 서술하시오.



State

```python
- vue 인스턴스의 data에 해당한다
- 중앙에서 관리하는 모든 상태 정보이다.
- 개별 component는 state에서 데이터를 가져와서 사용한다.
  - 개별 component가 관리하던 data를 중앙저장소(Vuex Store의 State)에서 관리하게 된다.
- state의 데이터가 변화하면 해당 데이터를 사용하는 component도 자동으로 다시 렌더링 된다.
- $store.state로 state 데이터에 접근 가능하다.
```

Getters

```python
- vue 인스턴스의 computed에 해당한다
- state를 활용하여 계산된 값을 얻고자 할 때 사용
  state의 원본 데이터를 건들지 않고 계싼된 값을 얻을 수 있다
- computed와 마찬가지로 getters의 결과는 캐시 되며,
  종속된 값이 변경된 경우에만 재계산된다.
- getters에서 계산된 값은 state에 영향을 미치지 않는다.
- 첫번째 인자로 state, 두번째 인자로 getter를 받는다.
```

Mutations

```python
- 실제로 state를 변경하는 유일한 방법이다.
- vue 인스턴스의 methods에 해당하지만 Mutations에서 호출되는 핸들러 함수는 반드시 동기적 이어야 한다.
   - 비동기 로직으로 mutations를 사용해서 state를 변경하는 경우, state의 변화의 시기를 특정할 수 없기      때문
- 첫 번째 인자로 state를 받으며, component 혹은 Actions에서 commit()메서드로 호출된다.
```

Actions

```python
- mutations와 비슷하지만 비동기 작업을 포함할 수 있다는 차이가 있다.
- state를 직접 변경하지 않고 commit()메서드로 mutations를 호출해서 state를 변경함
- context 객체를 인자로 받으며, 이 객체를 통해 store.js의 모든 요소와 메서드에 접근 할 수 있음
  (즉 state를 직접 변경할 수는 있지만 액션에서 변경하지 않아야 한다.)
- component에서 dispatch() 메서드에 의해 호출된다.
```







3.

```python
a - state
b - getters
c - mutations
d - state
```





4.

```python
created!
mounted!
```









