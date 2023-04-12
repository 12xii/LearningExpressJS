# Object Oriented Programming

---

## JS는 멀티-패러다임 언어 

 + 명령형(imperative) 언어
 + 함수형(functional) 언어
 + 프로토타입 기반(prototype-based) 언어
 + 객체지향 언어

다만 ES6에서 신규 문법으로 클래스가 도입되어 진입장벽을 더욱 낮추는 데 일조했다

---

## 객체지향 프로그래밍

**Object Oriented Programming**

### 객체

- 물리적 / 추상적으로 생각할 수 있음
- 자신의 속성을 가지고 있음
- 식별 가능

**생성하기**
```JS
// 객체 리터럴
let obj1 = {};
obj1.name = 'Lee';

// Object() 생성자 함수
let obj2 = new Object();
obj2.name = 'Lee';

// 생성자 함수
function func() {}
let obj3 = new func();
obj3.name = 'Lee';
```

### 객체지향 프로그래밍 OOP ; Object Oriented Programming

- 부품에 해당하는 객체를 먼저 제작, 조립해서 완성된 프로그램의 생성
    
    일반적인 클래스 기반 객체지향의 특징은 프로토타입과 클로저로 구현할 수 있다

- **캡슐화 Encapsulation**
    - 실제 구현 내용 은닉
    - 외부 객체는 내부의 구조를 알지 못하며 노출로 제공하는 필드, 메소드만 이용
    - 객체를 손상으로부터 보호
    - 접근 제한자 Access Modifier 사용
- **상속 Inheritance**
    - 상위 객체의 재사용으로 하위 객체 설계  → 중복 최소화
    - 상위 객체 수정이 모든 하위 객체의 수정 → 유지 보수 시간 최소화
- **다형성**

## 프로토타입 객체

기존의 객체를 복사하여 새로운 객체를 생성하는 객체의 원형

-> 프로토타입 : 프로토타입 객체로 가는 숨은 링크

