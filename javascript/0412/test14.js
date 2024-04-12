// test14.js(숫자함수)
'use strict';

// max() : 최대값
// min() : 최소값
// ceil() : 무조건 올림
// floor() : 무조건 버림
// trunc() : 잘라내기
// pow() : 거듭제곱
// abs() : 절대값
// sqrt() : 제곱근
// toFixed() : 소수이하 자리출력(반올림)
// random() : 난수발생(0 <= rand < 1) 실수형
// 

let su1 = 10;
let su2 = 20;
let su3 = 3.145;
let su4 = -3.145;
let su5 = 31.5;

let num;

num = "max => " + Math.max(su1, su2, su3, su4, su5) + "<br/>";
num += "min => " + Math.min(su1, su2, su3, su4, su5) + "<br/>";
num += "ceil => " + Math.ceil(su3) + "<br/>";
num += "ceil => " + Math.ceil(su4) + "<br/>";
num += "floor => " + Math.floor(su3) + "<br/>";
num += "floor => " + Math.floor(su4) + "<br/>";  // 작은값으로
num += "trunc => " + Math.trunc(su3) + "<br/>";
num += "trunc => " + Math.trunc(su4) + "<br/>";
num += "pow(2,5) => " + Math.pow(2,5) + "<br/>";
num += "abs(-100) => " + Math.abs(su4) + "<br/>";
num += "sqrt(25) => " + Math.sqrt(25) + "<br/>";

num += "su3.toFixed(2) => " + su3.toFixed(2) + "<br/>";  // 소수 이하 2번째까지 / 소수이하 3번째에서 반올림

num += "Math.random() => " + Math.random() + "<br/>";
num += "Math.random() * 10 => " + Math.random() * 10 + "<br/>";
num += "parseInt(Math.random() * 10) => " + parseInt((Math.random() * 10) + 1) + "<br/>";
num += "parseInt(Math.random()) * 10 => " + (parseInt(Math.random() * 45) + 1) + "<br/>";
num += "parseInt(Math.random()) * 10 => " + (parseInt(Math.random() * (15-5+1)) + 5) + "<br/>";  // 5~15까지의 난수

demo.innerHTML = num;