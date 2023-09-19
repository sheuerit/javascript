// 반복문
// - 동일한 코드를 반복하여 실행시키는 명령문
// - for, while, do while

// for문
// - 정해진 숫자만큼 반복할 때 사용
// - for 문의 괄호 안은 초기화, 조건식, 표현식으로 구성
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 실행순서
// 1. let i = 0 으로 초기화
// 2. i < 5 조건식이 만족하면
// 3. for문 안에 명령문 수행
// 4. i++ i값을 1씩 증가
// 5. 다시 조건식을 만족하는지 확인하고 만족하면 계속 수행
// 6. 조건식이 거짓이면 for문 종료

// for문 연습
// 배열값 출력
let fruit = ["사과", "바나나", "딸기", "포도", "오렌지"];
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// while문
// - 반복 횟수를 알 수 없을 때 사용
// - 조건문이 true일 때 실행
let count = 0;
while (count < 5) {
    console.log(count);
    count++; // 종료되는 연산을 수행하지 않으면 무한루프 발생
}

// do while문
// - 반복 횟수를 알 수 없을 때 사용
// - 조건문이 true일 때 실행
// - false여도 최초 한번은 명령문 수행

let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

// continue : continue 아래에 있는 문장을 건너뛰고 다음 반복 실행
// break : 현재 진행 중인 제어문 흐름을 종료

let text = "";
for (let i = 0; i < 10; i++) {
    if (i ==3) {
        // continue;
        break;
    }
    text = text + i;
}
console.log(text);

// for문 연습
// 별찍기
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>")
}
document.write("==========<br>")
// 거꾸로 별찍기
for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i; j--) {
        document.write("*");
    }
    document.write("<br>")
}