# to do list

## 소개
- vue.js를 이용해 to do list 구현 
- [해커뉴스](https://news.ycombinator.com/)
- [해커뉴스 API](https://github.com/HackerNews/API)

## 사용기술
- vue.js
- vuex
- vue-router
- javascript
- html
- css


## 프로젝트 정보
- 실행코드

```
// 개발시 서버 실행
npm run dev

// 빌드
npm rub build

// 라우터
npm i vue-router --save
```

## 주요기술

### 사용되는 함수 분류
```
const addOneItem = (state, todoItem) => {
    const obj = {completed: false, item: todoItem};
    localStorage.setItem(todoItem,JSON.stringify(obj));
    state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index,1);
}

const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const removeAllItem = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, removeAllItem } 
```

### Vue.js

- [Vue.js정리](https://github.com/LeeSH2468/vue/blob/master/vue-basic/vue.md)

### Vuex

- 헬퍼함수 (vuex helper)를 사용해 깔끔하고 편리하게 사용
- [Vuex 정리](https://github.com/LeeSH2468/vue/blob/master/vue-basic/vuex.md)

