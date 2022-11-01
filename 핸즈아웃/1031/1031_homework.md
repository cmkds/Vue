# homework

1.

SPA는  Single Pattern Application의 약자이다.

- F  
- Single Page Application

SPA는 웹어플리케이션에 필요한 모든 정적 리소를 한 번에 받고, 이후부터는 페이지 갱신에 필요한 데이터만 전달 받는다.

- T



Vue.js 에서 말하는 '반응형'은 데이터가 변경되면 이에 반응하여, 연결된 DOM이 업데이트되는 것을 의미한다.

- T



v-bind 디렉티브는 "@", v-on 디렉티브는 ":" shortcut(약어)를 제공한다.

- F
- v-bind 는  ':' 제공
- v-on 은 '@' 제공



v-model 디렉티브는 input, textarea, select 같은 HTML 요소와 단반향 데이터 바인딩을 이루기 때문에 v-model 속성값의 제어를 통해 값을 바꿀 수 있다.

- F
- 양방향 데이터 바인딩을 이룬다.



2.

MVVM 

Model,  View,  View Model

```python
View - 우리 눈에 보이는 부분 = DOM
- 사용자가 보는 화면

Model - 실제 데이터 = JSON
-Plain JavaScript Object
-화면에 표현되는 내용, 데이터

View Model 
- View를 위한 Model
- View와 연결되어 Action 을 주고 받음
- Model이 변경되면 View Model도 변경되고 바인딩된 View도 변경됨
- View에서 사용자가 데이터를 변경하면
	View Model 의 데이터가 변경되고 바인딩된 다른 View 도 변경됨.-
- view에서 표시할 데이터가 추상화 되는 곳, Model 과 상호작용하여 데이터를 주고 받음
- view에서 view model 의 특정 데이터를 참조하여 화면에 표시하도록 정의하고, view model의 데이터가 바뀌면 그대로 화면에 반영
- view model은 데이터만 바꿀 뿐 view와의 직접적 교류는 x
```





3.

```python
a- message
b- new Vue
c- '#app'
```









