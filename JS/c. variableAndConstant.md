# Variable and Constant

---

## Const와 Let과 Var

### var

변수 선언 키워드

모든 `var` 선언문은 프로그램 실행 시 최상위로 끌어올려져 실행된다 (`호이스팅`)

전역변수로 활동하므로 각각의 함수 내에서 선언할 경우는 쓰지 않는 것이 좋다

초기화되지 않은 당시의 값은 `undifined`가 된다

### let

`ES6 2015`에서 `const`와 함께 출시된 블록스코프 선언문

값의 자유로운 변환이 특징이다

초기화되지 않은 당시의 값은 `undefined`가 된다

### const

`ES6 2015`에서  `let`과 함께 출시된 블록스코프 선언문

값의 불변이 특징이다

---

## 변수 Variable

값을 저장할 수 있도록 이름 붙여진 메모리 공간

+ 가변적

```

let a = 1; // 선언과 동시에 초기화

let b; // undefined가 담겨 있다

b = 'a'; // 선언 이후 초기화

a = 1.7; // 타입 간의 변환도 자유롭다

```

---

## 변수 명명 규칙

+ 변수는 '_', 숫자로 시작하지 않는다

+ 선언하는 단어는 모두 소문자, 이후 다른 단어가 붙을 경우 첫자를 대문자로 한다

    + camelCase, student, aLittleTree 등

+ 최대한 직관적인 이름을 부여한다

+ 대소문자를 구별해 작성한다

+ 예약어는 사용할 수 없다

---

## 데이터 타입 유형 kind of data type

+ 원시 값

    + 숫자 ( 정수와 실수를 모두 포함한다 ) : `number` or `BigInt`

    + 문자열 : `String`

    + 논리값 : `Boolean`

    + `Symbol`

        + 솔직히 자주 안 쓴다

        + 고유하고 변경 불가능한 원시 값

    + `Null`

    + `Undifined`

+ 객체 object

JS에서는 변수나 상수를 선언할 때 선언 키워드에 데이터 타입 유형을 쓸 필요가 없다

이는 JS가 동적 타입 언어로서 이후에도 데이터 유형이 바뀔 수 있기 때문이다

이미 선언된 상수, 변수의 데이터 유형은 `typeof` 키워드를 이용해 확인 가능하다