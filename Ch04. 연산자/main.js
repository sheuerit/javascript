// 연산자
// - 어떠한 연산을 기호로 사용하여 수행한다.

// 문자열 병합
// - 문자열은 + 연산자를 사용하여 병합

console.log("안녕" + "하세요");
console.log(typeof ("1" + 2)); // 문자열과 병합하면 number도 string
console.log("1" + 2 + 3);  // 123
console.log( 1 + 2 + "3"); // 33

// 산술 연산자
// - 덧셈, 뺄셈, 곱셈, 나눗셈
// x % y : 나머지
let x = 9;
let y = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// 증감 연산자
// ++x : 전위 증가 (x에 1을 증가시킨 후에 명령문 수행)
// x++ : 후위 증가 (현재 명령문을 수행 후 x에 1을 증가)
// --x : 전위 감소 (x에 1을 감소시킨 후에 명령문 수행)
// x-- : 후위 감소 (현재 명령문을 수행 후 x에 1을 감소)

// let result = ++x + y;
// let result = x++ + y;
// let result = --x + y;
let result = x-- + y;

console.log(result);
console.log(x);
console.log(y);

// 비교 연산자 (boolean)
// a > b , a >= b , a < b , a <= b
// a == b , a === b(데이터 타입까지 동일)
// a != b , a !== b(데이터 타입까지 상이)

let a = 2;
let b = '2';
console.log(a === b); // false
console.log(a !== b); // true

// 할당 연산자
// x += y >> x = x + y
// x -= y >> x = x - y
// x *= y >> x = x * y
// x /= y >> x = x / y

let i = 10;
let j = 20;
// i = i + j;
i += j;
console.log(i);

// 논리 연산자
// - boolean 값만 다룰 수 있지만 자바스크립트에서만 모든 타입의 값을 받을 수 있고 결과 역시 모든 타입이 될 수 있다
// null, 0, NaN, 빈 문자열(""), undefined는 false로 간주

// AND 연산자 (&&) - 피연산자가 모두 true일 경우에 true를 반환하고 나머지는 false로 반환
// OR 연산자 (||) - 피연산자가 하나라도 true일 경우 true를 반환하고 나머지는 false로 반환
// Not 연산자 (!) - true일 경우 false를 반환하고, false일 경우 true를 반환한다
// 단축 평가
// - AND 연산에서 앞쪽 피연산자가 false일 때, OR 연산에서 앞쪽 피연산자가 true일 때 나머지 피연산자의 평가를 생략하고 그대로 반환한다

let a1 = true && true;
let a2 = true && false;
let a3 = true && 3 == 4;
let a4 = 111 && 222;
let a5 = 111 && false;
let a6 = null && undefined;
console.log(a6);

let o1 = true || false;
let o2 = false || false;
let o3 = true || 3 == 4;
let o4 = 111 || 222;
let o5 = false || 222;
let o6 = null || undefined;
console.log(o6);

let n1 = !true;
let n2 = !false;
let n3 = !111;
console.log(n3);

// 삼항 연산자
// - 조건식 ? 값1 : 값2
// - 조건식이 true 이면 값 1을 반환하고, false이면 2를 반환한다

let number = 10;
let result2 = number % 2 == 1 ? "홀수입니다" : "짝수입니다"
console.log(result2);

