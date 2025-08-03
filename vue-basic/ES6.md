## ES6

### ES5와 차이점

- 기존 자바스크립드는 { }에 상관없이 스코프가 설정됨
- 호이스팅(Hoisting)
  - 선언한 함수와 변수를 해석기가 가상 상단에 있는 것처럼 인식한다
  - js해석기는 코드의 라인 순서와 관계없이 함수 선언식과 변수를 위한 메모리 공간을 먼저 확보한다
  - 따라서 function a(), 와 var는 코드의 최상단으로 끌어 올려진 것(hoisting)처럼 보인다
  - 함수 선언식과 변수선언만 해당된다 (함수 표현식은 해당안됨)
    - 함수선언식(function statement) : function a()
    - 함수표현식(function expression) : var a = function() { }

### const & left

- 새로운 변수 선언 방식
- 블록 단위 { }로 변수의 범위가 제한됨
- const : 한 번 선언한 값에 대해서 변경할 수 없음(상수개념)
- let : 한 번 선언한 값에 대해서 다시 선언 가능



### Arrow Function - 화살표 함수

- 함수를 정의할 때 `function` 이라는 키워드를 사용하지 않고 `=>`로 대체

- 흔히 사용하는 콜백함수의 문법을 간결화

- 예시1

  ```javascript
  // ES5
  var sum = function(a, b) {
      return a + b;
  };
  
  // ES6
  let sum = (a, b) => {
      return a + b;
  }
  
  sum(10, 20);
  ```

- 예시2

  ```javascript
  //ES5
  var arr = ['a', 'b', 'c'];
  arr.forEach(function(value) {
      console.log(value); //a ,b ,c
  });
  
  
  //ES6
  let arr = ['a', 'b', 'c'];
  arr.forEach(value => console.log(value)); //a ,b ,c
  ```

  

### Enhanced Object Literals - 향상된 객체 리터럴

- 객체의 속성을 메서드로 사용할 때 `function` 예약어를 생략하고 생성 가능

-  test: function()  ==  test()

  ```javascript
  // ES5
  var dictionart1 = {
      lookup : function() {
          console.log('test');
      }
  }
  
  // ES6
  var dictionart2 = {
      lookup() {
          console.log('test');
      }
  }
  
  dictionart2.lookup();
  ```

- 객체의 속성명과 값 명이 동일할 때 축약 가능

  ```javascript
  var figures = 10;
  var dictionary = {
      // figures: figures,
      figures
  }
  ```

  
