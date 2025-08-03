## 뷰 CLI로 프로젝트 생성



### 1. 시작

- 파비콘 생성

- 뷰포트 메타태그(반응형 웹 태그)

  ```
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

-  < style scoped >

  - 해당 파일 안에서만 적용되는 속성(상속x)
  
- 파일 나눠서 만들고 App.vue에 컴포넌트 등록

  - template

  ```html
  <template>
    <div id="app">
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
    </div>
  </template>
  ```

  - script

  ```html
  <script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoInput from './components/TodoInput.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  
  export default {   
    components : {
      // 컴포넌트 태그명 : 컴포넌트 내용
      'TodoHeader' : TodoHeader,
      'TodoInput' : TodoInput,
      'TodoList' : TodoList,
      'TodoFooter' : TodoFooter
    }
  }
  </script>
  ```

  



### 2. TodoHeader

- 시멘틱태그 사용

- 타이틀 등록

  



### 3. TodoInput

- input , 버튼생성
- input 데이터 연결 (data, v-model="newData")
  - data : newData 값 리턴
- button 기능 설정 (v-on:click="")
  - 저장값 로컬에 저장 
  - 비우기 (this*.*newTodoItem = "";)
- 로컬에 저장( localStorage**.**setItem(키,값) )
  - 관리자창 > Application > LocalStorage
- 저장, 비우기 함수 나누기 > 저장하는 함수 안에 clear함수 적용(this.clearInput();)
- 스타일
- add버튼 폰트어썸으로 적용
- < span v-on:click="addTodo">
- input 태그에 엔터치면 적용되도록 설정
  - < input v-on:keyup.enter="addTodo" > 



### 4. TodoList

- ul> li 생성
- 함수 created : 화면이 생성되자마자 실행
  - 로컬 스토리지에 있는 정보 가져오기
  - 정보를 담을 데이터 필요. 빈 배열 선언하기 (todoItems: [])
  - if >로컬스토리지에 담긴 정보가 0개 이상이면 실행
  - for > 로컬스토리지 정보 갯수 만큼 반복 ( i < localStorage.length );
  - if > 웹팩데스~ 안나오게하기 (localStorage**.**key(i) !== 'loglevel:webpack-dev-server')
  - 아이템 넣기( this.todoItems.push*(*localStorage**.**key(i)); )
- li에 연결
  - v-for="todoItem in todoItems" (v-for = "아이템 in 배열명")
  - v-bind:key="todoItem" (for로 넣을 키)
  - (v-for를 쓰면 v-bind키 쓰는것 권장)
  - {{ todoItem }}으로 출력
- 삭제버튼 생성
  - span > i 휴지통
  - 삭제기능 (v-on:click="removeTodo")
- li에 index값 넣고 삭제 버튼에서 받아오기
  - v-for="(todoItem, index) in todoItems"
  - v-on:click="removeTodo(todoItem, index)"
  - removeTodo : function(todoItem, index)
    - 로컬스토리지에서 삭제 (localStorage.removeItem(todoItem));
    - li삭제 (this.todoItems.splice(index,1))



할일 완료 기능

- 체크박스 추가
  - i 체크
  - 체크기능 (v-on:click="toggleComplete") - 토클로 체크,해제 기능
  - toggleComplete 메소드 추가(v-on:click="toggleComplete")
  - push에 바로 키값넣음 > 밸류의 item 값으로 변경
  - 문자열(string)로 넣었기 떄문에 닷
  - console.log(typeof ~~)  : 뒤에있는 객체의 타입유형
  - JSON.parse() string을 다시 object로 변경



### 5. Todofooter

- 전체삭제 버튼
  - span > Clear All

  - css입히기

  - 클릭기능 (v-on:click="clearTodo")

  - clearTodo정의

    ```javascript
      methods: {
        clearTodo: function() {
          localStorage.clear();
        }
      }
    ```

    



## *코드수정(리팩토링)

### TodoInput.vue

- 키, 값을 구분하지 않고 넣음.

  - localStorage.setItem(**this**.newTodoItem,**this**.newTodoItem);

  - var obj를 추가해 체크여부(boolean값)으로 상태 확인

    ```JAVASCRIPT
    var obj = {completed: false, item: this.newTodoItem}
    ```
    
  - JSON.stringify
  
    자바스크립트 값을 스트링(문자열)로 변환해주는 API
  
    ```javascript
    localStorage.setItem(this.newTodoItem,JSON.stringify{obj});
    ```
  
- addTodo if문 값이 있을때만 되도록 추가

  ```javascript
  if(this.newTodoItem !== ''){}
  ```
  
- setItem(다시 불러오는 부분)을 app.vue로 이동

  - 원래 있던 부분 상위(app.vue)로 보내기
    - this.$emit("이벤트이름",인자1, 인자2)
    - this.$emit('addTodoItem', this.newTodoItem)

  

### TodoList.vue

- 키값으로 접근
  - localStorage.key
  
- getItem 으로 값 얻기

  ```javascript
  localStorage.getItem(localStorage.key(i))
  ```


- 문자열을 객체로 변환

  ```javascript
  JSON.parse(받아온 값)
  ```

- 받은 값 넣기

  ```javascript
  this.todoItems.push()
  ```

- 출력하는 값을 원하는 키의 값으로 변경

  ```html
  {{ todoItem.item }}
  ```

- 체크됐을 때 클래스 추가 ~~줄긋는효과~~ 를 체크 됐을때만 적용(v-bind:class)

  ```javascript
  <span v-bind:class="{클래스명: 배열.키(boolean값)}"
  v-bind:class="{textCompleted: todoItem.completed}"
  ```

- 체크버튼 눌렀을 때 실행

  ```javascript
  toggleComplete(todoItem, index)
  ```
- li에 받아올 값 변경

  ```
  v-bind:key="todoItem" > todoItem.item
  ```
- toggleComplete함수정의

  - 값 받아오기 toggleComplete(todoItem, index)
  
  - completed값 받아와서 변경
  
    ```javascript
    todoItem.completed = !todoItem.completed;
    ```
  
  - 로컬스토리지 값 갱신
  
    ```javascript
    localStorage.removeItem(todoItem.item); // 지우기
    localStorage.setItem(todoItem.item, JSON.stringify); // 다시받기
    ```

- TodoList에도 props추가

  ```
  props:['propsdata']
  ```

- v-for로 받아오는 값을 propsdata로 변경

  

### App.vue

- created를 app.vue로 이동

- app.vue에도 목록을 받을 todoItems 배열만들기
  - 로컬스토리지에 있는 값이 app.vue의 todoItems배열에 들어감(push)
  
- app.vue의 TodoList에 propsdata로 데이터 내리기
  - v-bind:propsdata="todoItems" push받은 값 todoList로보냄
  - TodoList에도 props추가
  
- app.vue의 TodoInput 데이터 받아오기

  - TodoInput에 이벤트에밋 처리 (v-on:'addTodoItem'='addOneItem')
    - v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 = "현재 컴포넌트의 메소드 이름"
  - app.vue에 todoItem 하나를 추가하는 메소드 추가(methods: addOneItem:function(){})
    - this.newTodoItem은 TodoInput에 있을 때 이름
    - function('새로운 이름')을 지정해준 뒤 변경해준다
    - todoItems배열에 내용을 넣어줌(push)

  ```
    methods:{
      addOneItem: function(todoItem){
        var obj = {completed: false, item: todoItem};
            localStorage.setItem(todoItem,JSON.stringify(obj));
            this.todoItems.push(obj);
      }
  ```

  

## 필기

### 값 변환

- 값 넣을 때 : JSON.stringify (값 > 문자열로 변환)
- 값 받을 때 : JSON.parse(문자열 > object로 변환)

 

