# 📰해커뉴스

## 소개
- 오픈 소스인 Hacker news API를 연동해 vue.js로 구현 
- [해커뉴스](https://news.ycombinator.com/)
- [해커뉴스 API](https://github.com/HackerNews/API)

## 사용기술
- vue.js
- vuex
- vue-router
- Axios
- javascript
- html
- css

## 프로젝트 정보
- 실행코드

```
// 개발시 서버 실행
npm run serve 

// 빌드
npm rub build

// 라우터
npm i vue-router --save
```

## 주요기술
### Dynamic Route Matching (동적 라우트 매칭)

- 특정 라우츠로 이동할 때 `:id` 패턴을 쓰면 파라미스에 id가 넘어가는데 그걸 사용하는 법
- 특정 페이지의 정보를 갖고 다른 페이지로 이동할 때 쓰임
  
  ```vue
        {
            path:'/user/:id',
            component:UserView,
        },
        {
            path:'/item/:id',
            component:ItemView,
        },
  ```
  
### 비동기 통신

- 각 항목별 페이지를 만들고 선택시 뷰페이지만 바뀌도록 비동기연결

  ```vue
  routes: [
        {
          path:'/',
          redirect: '/news',
        },
        {
          path:'/news',
          name: 'news',
          component: NewsView,
          beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });                 
          },
          // component: createListView('NewsView')
        },
        {
          path:'/ask',
          name: 'ask',
          component: AskView,
          beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });                 
          },
          // component: createListView('AskView')
        },
        {
          path:'/jobs',
          name: 'jobs',
          component: JobsView,
          beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST', to.name)
	              .then(() => {
	                  // bus.$emit('end:spinner');
	                  next();
	              })
	              .catch((error) => {
	                  console.log(error);
	              });                 
	        },
	        // component: createListView('NJobsView')
	      },
	  ]
  ```

### API 연동 (axios)

- API를 관리하는 폴더 분류

  ```vue
  import axios from 'axios';
  
  
  // 1. HTTP리스폰, 리퀘스트 관련 기본주소 설정
  const config = {
      baseUrl: 'https://api.hnpwa.com/v0/'
  }
  
  // 2.API 함수들 정리
  function fetchNewsList() {
      return axios.get(`${config.baseUrl}news/1.json`);
  }
  function fetchJobsList() {
      return axios.get(`${config.baseUrl}jobs/1.json`);
  }
  async function fetchAskList() {
      try {
          const response = axios.get(`${config.baseUrl}ask/1.json`);
          return response
      } catch (error) {
          console.log(error)
      }
  }
  function fetchList(pageName) {
      try {
          const response = axios.get(`${config.baseUrl}${pageName}/1.json`);
          return response
      } catch (error) {
          console.log(error)
      }
  }
  function fetchUserInfo(username) {
      try {
          const response = axios.get(`${config.baseUrl}user/${username}.json`);
          return response
      } catch (error) {
          console.log(error)
      }
  }
  function fetchcommentItem(id) {
      try {
          const response = axios.get(`${config.baseUrl}item/${id}.json`);
          return response
      } catch (error) {
          console.log(error)
      }
  }
  
  
  export{
      fetchNewsList,
      fetchJobsList,
      fetchAskList,
      fetchList,
      fetchUserInfo,
      fetchcommentItem,
  }
  ```

### Vue.js

- [Vue.js정리](https://github.com/LeeSH2468/vue/blob/master/vue-basic/vue.md)

#### v-for

  - v-for함수를 이용해 반복적으로 나오는 페이지를 구현

      ```vue
      <li v-for="item in listItems" class="post">
      ...
      </li>
      ```

  

#### v-if / v-else

- v-if 와 v-else를 이용하여 조건에 따른 구현

  ```vue
  <template v-if="item.domain">
    <a v-bind:href="item.url">
        {{ item.title }}
    </a>
  </template>
  <template v-else>
    <router-link :to="`item/${item.id}`"> 
        {{ item.title }}
    </router-link>
  </template>
  ```




### Vuex

- 헬퍼함수 (vuex helper)를 사용해 깔끔하고 편리하게 사용
- [Vuex 정리](https://github.com/LeeSH2468/vue/blob/master/vue-basic/vuex.md)

