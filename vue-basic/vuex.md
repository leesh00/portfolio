## Vuex

### Vuex 설치

- Vuex는 싱글 파일 컴포넌트 체계에서 NPM 방식으로 라이브러리 설치를 권장

```
npm i vuex --save
```

* ES6와 함께 사용해야 더 많은 기능과 이점을 제공받을 수 있음



### Vuex 시작하기

- 관행적으로 vuex를 store라 부름

- src/store/store.js 생성

- 뷰와 뷰엑스 import

```javascript
import Vue from 'vue'
import Vuex from 'vue'

Vue.use(Vuex); // 뷰 플러그인 사용 - 전역에 추가하는 방법

export const store = new Vuex.Store({
    //
});
```

- main.js에 등록

```javascript
import { store } from './store/store'
//변수이기 때문에 {}로 선언

new Vue({
    store,
})
// 변수 등록
```



### Vuex 기술 요소

- state : 여러 컴포넌트에 공유되는 데이터`data`
- getters : 연산된 state 값을 접근하는 속성 `computed`
- mutations : state값을 변경하는 이벤트 로직.메서드 `methods`
- actions : 비동기 처리 로직을 선언하는 메서드 `aysnc methods`



### state란?

- 여러 컴포넌트 간에 공유할 데이터(상태)
- Vue와 동일한 형식이지만 속성명과 여러 컴포넌트에 공유된다는 것만 다름

```javascript
// Vue
data: {
    message: 'Hello Vue.js'
}

// Vuex
state: {
    message: 'Hello Vue.js'
}
```

```html
<!-- Vue -->
<p> {{ message}} </p>

<!-- Vuex -->
<p> {{ this.$store.state.message }} </p>
```



### getters란?

- state 값을 접근하는 속성이지 computed()처럼 미리 연산된 값을 접근하는 속성

```javascript
// store.js
state: {
    num : 10
},
getters: {
    getNumber(state){
        return state.num;
    },
    doubleNumber(state) {
        return state.num * 2;
    }
}
```

```html
<p>{{ this.$store.getters.getNumber}}</p>
<p>{{ this.$store.getters.doubleNumber}}</p>
```



### mutations란?

- state의 값을 변경할 수 있는 유일한 방법이자 메서드
- 뮤테이션은 `commit()`으로 동작시킨다.
- 속성메서드를 가짐.
- 속성메서드의 첫번째 인자는 state

```javascript
// store.js
state: { num: 10 },
mutations: {
    printNumbers(state) {
        return state.num
    },
    sumNumbers(state, anotherNum) {
        return state.num + anotherNum;
    }
}

// App.vue
this.$store.commit('printNumbers'); // 10
this.$store.commit('sumNumbers', 20); // 30
```



### mutations의 commit() 형식

- state를 변경하기 위해 mutations를 동작시킬 때 인지(payload)를 전달할 수 있음
- 여러 값을 전할 때는 객채화시켜서 전달 가능(키: 값 형태)

```javascript
// store.js
state: { storeNum: 10 },
mutations: {
    modifyState(state, payload) {
        console.log(payload.str);
        return state.storeNum += payload.num;
    }
}

// App.vue
this.$store.commit('modifyState',{
    str: 'test',
    num: 20
})
```



### mutations를 사용하는 이유

- state로 직접 접근하지 않고 mutations를 사용
- 여러 개의 컴포넌트에서 아래와 같이 state값을 변경하는 경우 어느 컴포넌트에서 해당 state를 변경했는지 추적하기 어렵다.

```javascript
methods: {
    increaseCounter() { this.$store.state.counter++; }
}
```

- 특정 시점에 어떤 컴포넌트가 state를 접근하여 변경한건지 확인하기 어렵기 때문
- 따라서, 뷰의 반응성을 거스르지 않게 명시적으로 상태 변화를 수행. (반응성, 디버깅, 테스팅 혜택)



### actions란?

- 비동기 처리 로직을 선언하는 메서드. 비동기 로직을 담당하는 mutations
- 데이터요청, [Promise](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/), ES6 async과 같은 [비동기 처리](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)는 모두 actions에 선언
- `dispatch()`로 동작시킨다 

```javascript
// store.js
state: {
    num:10
},
mutations: {
    doubleNumber(state) {
        state.num * 2;
    }
},
actions: {
	delayDoubleNumber(context) { // context로 store의 메서드와 속성에 접근
        context.commit('doubleNumber');
    }        
}

// App.vue
this.$store.dispatch('delayDoubleNumber');
```



- actions 비동기 코드 예제1

```javascript
// store.js
state: {
    addCounter(state){
        state.counter++
    }
},
actions: {
	delayedAddCounter(context) { // context로 store의 메서드와 속성에 접근
        setTimeout(() => context.commit('addCounter'), 2000);
    }        
}

// App.vue
methods: {
    incrementCounter() {
        this.$store.dispatch('delayedAddCounter');
    }
}
```

- actions 비동기 코드 예제2

```javascript
// store.js
mutations: {
    setDate(state, fetchedData) {
        state.product = fetchedData;
    }
},
actions: {
	fetchProductData(context){
        return axios.get('https://domain.com/test')
        			.then(response => context.commit('setData', response));
    }
}

// App.vue
methods: {
    getProduct() {
        this.$store.dispatch('fetchProductData');
    }
}
```



## 헬퍼함수(Helper)

- 각 속성들을 더 쉽게 사용하는 방법
- store에 있는 4가지 속성을 간편하게 코딩하는 방법
  - state -> mapState
  - getters -> mapGetters
  - mutations -> mapMutations
  - actions -> mapActions



### 헬퍼 사용법

- 헬퍼를 사용하고자하는 vue파일에서 아래와 같이 해당 헬퍼를 로딩

```javascript
// App.vue
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
    computed() {...mapstate(['num']), ...mapGetters(['countedNum']) },
    methods: {...mapMutations(['clickBtn']), ...mapActions(['asyncClickBtn']) }
}
```

- `...` 는 ES6 Object Spread Operator의 약자이다

  - 다른 함수의 값을 그대로 불러올 때 사용

  ```javascript
  let test1 = {
      num: 1,
      name: 'test'
  }
  
  let testParent = {
      color: 'red'
      ...test1
  }
  ```

