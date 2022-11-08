# homework

1.

```python
a - Vuex.Store

b - state.count += 1

c - context.commit('NUMBER_INCREMENT')
```





2.

```python
actions
```





3.

store에 정의한 state를 직접 변경하지 않고 mutations를 통해 변경해야 하는 이유.

```python
- state를 직접 변경하지 않고 mutations을 통해 변경하는 이유는 state의 변경사항을 추적하기 위해
   - 명시적으로 추적하기를 원하기 때문이다.
- 의도를 보다 명확하게 만들어 코드를 읽을 때 앱의 state 변경에 대해 더 잘 추론 할 수 있음
- 또한 이를 통해 모든 mutation을 기록하거나 state 스냅샷을 저장하거나 시간 흐름에 따라 디버깅을 할 수     있는 도구를 구현 할 수 있다.
```











