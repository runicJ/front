// test15.js
// 날짜함수 연습

'use strict';

let str = '';

// 오늘날짜... Date()
const today = new Date();
const year = today.getFullYear();  // 연도 4자리
str += "오늘 연도는 : " + year + "<br/>";
const month = today.getMonth() + 1;  // js도 0부터 출력, 형식에 구애x 숫자로 보고 +1이 됨
str += "오늘 월은 : " + month + "<br/>";
const date = today.getDate();
str += "오늘 일은 : " + date + "<br/>";  // 날짜
const hour = today.getHours();
str += "현재 시간은 : " + hour + "<br/>";
const minute = today.getMinutes();
str += "현재 분은 : " + minute + "<br/>";
const second = today.getSeconds();
str += "현재 초는 : " + second + "<br/>";
const yymmdd = year + "-" + month + "-" + date + " " + 
      hour + ":" + minute + ":" + second;
str += "오늘 날짜/시간 : " + yymmdd + "<hr/>";

// let weekStr = new Array();
let weekStr = ["월", "화", "수", "목", "금", "토", "일"];
let weekDay = today.getDay();  // 요일(숫자로 나옴 1(월))
str += "오늘 요일 : " + weekStr[weekDay] + "요일<br/>";

let lastDate = new Date(2024, 4, 0);  // 문자x  // js에서는 0을 넣어줌
str += "이번달의 마지막 일자는 : " + lastDate.getDate();  // 먼저 날짜 객체 형식으로 바꿔야


demo.innerHTML = "<font size='5' color='red'><b>" + str + "</b></font>";

function dateCheck() {
  let yy = document.getElementById("yy").value;
  let mm = document.getElementById("mm").value;

  const strDate = new Date(year, mm, 0);

  demo.innerHTML = `${yy}년 ${mm}월의 마지막 일자는? <font size='4' color='blue'><b>${strDate.getDate()}</b></font>`;
}