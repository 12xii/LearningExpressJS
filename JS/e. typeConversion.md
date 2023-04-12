# Type Conversion

---

Casting이라고도 하며, 명시적 혹은 묵시적으로 타입을 변환하는 것을 말한다

JS에서의 형변환은 값의 대입을 통해 자동으로 이루어지며 명시적으로 변환하는 경우 값의 일부가 소실될 수 있다

```JS
let a = 10

console.log(typeof(a), a) // number 10

a = a.toString()

console.log(typeof(a), a) // string 10


let b = "string"

console.log(typeof(b), b) // string string

b = Number(b)

console.log(typeof(b), b) // number NaN
```

숫자가 아닌 값을 숫자로 강제형변환하는 경우 ( `Number()` 함수 ) NaN, 즉 Not a number를 반환한다 

```JS
let a = 1.7

console.log(typeof(a), a) // number 1.7

a = parseInt(a)

console.log(typeof(a), a) // number 1

a = parseFloat(a)

console.log(typeof(a), a) // number 1
```

JS는 정수와 실수의 타입을 구분하지 않으므로 타입은 결국 같은 `Number`다

=> 실수를 정수로 변환하고 싶을 경우 `parseInt`나 `toFixed`, `Math.floor()` 등을 이용