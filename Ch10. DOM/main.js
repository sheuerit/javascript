// DOM (document object model)
// - 웹 문서(HTML)를 객체화 하여 제어

// HTML 요소 선택
// - get 매서드, 쿼리 메서드

// get 메서드
// - document.getElementById: HTML에서 고유한 id를 이용해 요소를 찾음
// - document.getElementByClassName: HTML에서 클래스 명으로 요소를 찾음
// - document.getElementByTagName: HTML에서 태그명으로 쵸소를 찾음

document.getElementById("title");
document.getElementsByClassName("item");
document.getElementByTagName("li")

console.log(document.getElementById("title"));
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));

// 쿼리 메서드
// - document.querySelector: CSS 선택자를 사용하여 HTML 첫 번째 요소를 찾음
// - document.querySelectorAll: CSS 선택자를 사용하여 HTML 일치하는 모든 요소를 찾음

document.querySelector("#title");
document.querySelectorAll(".item");
console.log(document.querySelectorAll(".item"));