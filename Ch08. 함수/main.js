// 함수
// - 하나의 단위로 실행할 수 있도록 명령문을 그룹화

// 함수 생성
// - 함수 선언식, 함수 표현식 2가지

// 함수 선언식
// - function 키워드, 함수 이름(), 함수 블록{...} 
function hello() {
    console.log("안녕하세요");
    console.log("반갑습니다");
}
hello();

// 함수 표현식
// - 함수를 변수에 담아 생성
// - 호이스팅의 영향을 받지 않음
let hello2 = function() {
    console.log("안녕하세요");
    console.log("반갑습니다");
};
hello2();

// 파라미터(매개변수)
// - 괄호() 안에 파라미터를 선언하여 함수 호출 시 값을 전달
// ES6에서 파라미터에 default(기본값) 지정하는 기능 추가
function person(name, age = 0) {
    console.log("내 이름은 : " + name);
    console.log("내 나이는 : " + age);
}
person("송현석", 11);

// 반환
// - return 키워드를 사용하여 함수에서 값을 반환
function sum(num1, num2) {
    let num = num1 + num2;
    return num;
}
let result = sum(3,5);
console.log(result);

// 함수 스코프
// - 전역 스코프 : 최상단에 선언된 함수
// - 블록 스코프 : 블록 단위로 선언된 함수
// - 같은 블록 안의 변수만 사용이 가능
// - 자식은 부모 것을 사용 가능
function aBlock() {
    let name = "송현석";
    function bBlock() {
        let age = "100";
        console.log(age);
        console.log(name);
    }
    // console.log(age); // 자식 변수는 사용 불가
}
aBlock();

// Arrow Function
// - ES6에서 추가된 화살표 표기법
// - function 예약어 생략 가능
// - 함수의 파라미터(매개변수)가 하나뿐이면 괄호 생략 가능
// - 함수 블록 안의 표현식이 하나라면 중괄호, return 생략 가능
let f1 = function() {
    console.log("f1");
};
let f2 = () => {
    console.log("f2");
};
f1();
f2();

let f3 = function(name) {
    console.log(name);
};
// 파라미터 괄호, 블록 중괄호 생략
let f4 = name => console.log(name);
f3("홍길동");
f4("홍길동");

let f5 = function(a, b) {
    return a + b;
};
let f6 = (a, b) => a + b;
let result2 = f6(2, 3);
console.log(result2);

// 콜백함수
// - 다른 함수가 실행을 끝낸 뒤 다시 호출되는 함수
function func() {
    console.log("수행");
    callback();
}
function callback() {
    console.log("콜백함수");
}
func();

// 함수 연습
// 배열 요소의 평균값을 구하는 함수
function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
let calculate = [1, 3, 6, 7, 8, 2];
console.log(calculateAverage(calculate));

// 계산기 함수
function calculate2 (num1, num2, operator) {
    switch(operator) {
        case '+' :
            return num1 + num2;
        case '-' :
            return num1 - num2;
        case '*' :
            return num1 * num2;
        case '/' :
            return num1 / num2;
        default:
            return "잘못된 연산자입니다";   
    }
}
let result3 = calculate2(10, 5, "*");
console.log(result3);

// 배열값에서 최대값 구하기 함수
function getMaxValue(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
let array2 = [10, 5, 3, 1, 15, 30, 19];
console.log(getMaxValue(array2));