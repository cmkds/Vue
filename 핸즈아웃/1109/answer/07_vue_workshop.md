> ##### 사전 준비 사항
> * vue project를 생성하고 vue router를 추가한다.
> * 랜덤 뽑기 기능이 필요하므로 lodash를 설치한다.

## 런치 페이지 작성
* 기본 런치 페이지를 작성한다.

```html
<template>
  <div>
    <h1>Lunch</h1>
    <button @click="pickLunchMenu">Pick Lunch</button>
    <p>{{ menu }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TheLunch',
  data () {
    return {
      menus: ['짜장면', '짬뽕', '라면', '냉면', '비빔냉면', '국수'],
      menu: null,
    }
  },
  methods: {
    pickLunchMenu () {
      this.menu = _.sample(this.menus)
    },
  }
}
</script>

<style>

</style>
```

* router에 등록한다.
```javascript
import TheLunch from '@/views/TheLunch'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'lunch',
    component: TheLunch
    // component: () => import('@/views/TheLunch')  // lazy loading 
  },
}
...

```
* 메뉴 선택시에만 메뉴와 버튼이 보이도록 한다.
```html
<template>
  <div>
    <h1>Lunch</h1>
    <button @click="pickLunchMenu">Pick Lunch</button>
    <div v-show="menu">
      <p>{{ menu }}</p>
      <button>Lotto 뽑으러가기</button>
    </div>
  </div>
</template>
```

* 이동 버튼을 누르면 로또 페이지로 이동과 동시에 선택된 메뉴 정보를 같이 전달한다.

```html
<template>
  <div>
    <h1>Lunch</h1>
    <button @click="pickLunchMenu">Pick Lunch</button>
    <div v-show="menu">
      <p>{{ menu }}</p>
      <button @click="goLottoPage">Lotto 뽑으러가기</button>
    </div>
  </div>
</template>

<script>
  ...
  methods: {
    ...
    goLottoPage () {
      this.$router.push({ 
        name: 'lotto', 
        params: {
          lunchMenu: this.menu,
        }
      })
    }
  }
}
</script>
```

## 로또 페이지 작성하기
* 로또 기본 동작 페이지를 작성한다.

```html
<template>
  <div>
    <h1>Lotto 추첨</h1>
    <button @click="pickLottoNumbers">Pick Numbers</button>
    <p>{{ lottoNums }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TheLunch',
  data () {
    return {
      lottoNums: null,
    }
  },
  methods: {
    pickLottoNumbers () {
      const numbers = _.range(1, 46)
      this.lottoNums = _.sampleSize(numbers, 6)
    },
  }

}
</script>

<style>

</style>
```
* URL로 전달되는 점심 메뉴를 화면에 출력한다.
```html
<template>
  <div>
    <h1>{{ lunchMenu }} 먹고 Lotto 추첨</h1>
    <button @click="pickLottoNumbers">Pick Numbers</button>
    <p>{{ lottoNums }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TheLunch',
  data () {
    return {
      lottoNums: null,
      lunchMenu: this.$route.params.lunchMenu,
    }
  },
  methods: {
    pickLottoNumbers () {
      const numbers = _.range(1, 46)
      this.lottoNums = _.sampleSize(numbers, 6)
    },
  }

}
</script>

```
* Lotto를 선택하면 처음으로 이동할 수 있는 버튼이 나타나도록 한다.
```html
<template>
  <div>
    <h1>{{ lunchMenu }} 먹고 Lotto 추첨</h1>
    <button @click="pickLottoNumbers">Pick Numbers</button>
    <div v-show="lottoNums">
      <p>{{ lottoNums }}</p>
      <button @click="goLunchPage">처음으로</button>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TheLunch',
  ...
  methods: {
    ...
    goLunchPage () {
      this.$router.push({ name: 'lunch' })
    }
  }

}
</script>

```