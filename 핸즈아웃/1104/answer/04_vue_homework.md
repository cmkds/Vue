## 문제 1.

- `False`
  - 단방향 데이터 흐름을 지향하기 때문에 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하고, 
    하위 컴포넌트는 이벤트 emit을 통해 상위 컴포넌트에 특정 이벤트를 보내는 방식으로, 
    상위 컴포넌트로 하여금 데이터를 수정하도록 한다.
- `True`
- `False`
  - 부모 컴포넌트는 props를 통해 데이터를 전달하고, 자식 컴포넌트는 emit을 통해 이벤트를 보낸다.



## 문제 2.

https://vue2.hphk.io/v2/guide/#%EC%84%A0%EC%96%B8%EC%A0%81-%EB%A0%8C%EB%8D%94%EB%A7%81

모든 props는 하위 속성과 상위 속성 사이의 단방향 바인딩을 형성합니다. 

상위 속성이 업데이트되면 하위로 흐르게 되지만 그 반대는 안됩니다. 

이렇게하면 하위 컴포넌트가 실수로 부모의 상태를 변경하여 앱의 데이터 흐름을 추론하기 
더 어렵게 만드는 것을 방지할 수 있습니다.



## 문제 3.

> https://vue2.hphk.io/v2/guide/components-custom-events.html#%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%A5%BC-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90-%EB%B0%94%EC%9D%B8%EB%94%A9-%ED%95%98%EA%B8%B0
>
> Vue CLI로 프로젝트 생성 후 만들어지는 기본 컴포넌트로 진행

- `.native`  수식어
  - 루트엘리먼트의 이벤트를 직접 감지하고 싶은 경우
  - 원래는 하위 컴포넌트에 버튼을 두고 상위컴포넌트로 감싸고 있는 형태에, 
    하위컴포넌트의 이벤트를 전달하기 위해서는 $emit을 사용해야 함
  - 즉, 상위컴포넌트의 이벤트를 직접 호출하고 싶을때 사용

```vue
// App.vue

<template>
  <div id="app">
    <hello-World @click="onClick"></hello-world>
    <hello-World @click.native="onClick"></hello-world>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    onClick: function () {
      console.log('Hello!')
    }
  }
}
</script>
```

```vue
// HelloWorld.vue

<template>
  <div>
    <button>버튼</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>
```





## 문제 4.

(a) `this.$emit`

(b) `@add-todo="onAddTodo"`

(c) 

```javascript
onAddTodo: function (todo) {
  console.log(todo)
}
```

