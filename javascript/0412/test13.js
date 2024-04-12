// test13.js(문자함수연습)
'use strict';

let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let text2 = '   ABC   BCABC  GHI  JKLABCAMN.......  ABC... OPQ.. abc   ';

// length : 길이
// substring() : 특정 문자열의 문자열 출력
// indexOf() : 문자열 검색(인덱스 값을 반환, 없으면 -1을 반환)
// includes() : 문자열 포함유무(true/false)
// concat() : 문자열 결합
// slice() : 지정된 인덱스 위치부터 문자열 가져오기  // 시작번호, 끝번호 -1
// trim() : 문자열의 앞뒤 공백 삭제
// replace() : 치환(첫번째 자료만 찾아서 치환)
// replaceAll() : 치환(모든 자료를 찾아서 치환)
// toUpperCase() : 영문대문자변환
// toLowerCase() : 영문소문자변환
// charAt() : 문자열 중에서 1개씩 추출
// charCodeAt() : 지정된 인덱스 번지의 영문자의 아스키 코드값을 출력
// split() : 지정된 문자로 분리시킨 후 배열로 저장한다. // join과 반대 개념
// join() : 지정 문자로 결합

let str = "01234567890123456789012345678901234567890<br/>";
str += text1 + '<br/>';
str += text2 + '<br/><br/>';

str += text1.substring(5) + "<br/>";
str += text1.substring(5,10) + "<br/>";
str += text1.indexOf("abc") + "<br/>";
str += text1.indexOf("abd") + "<br/>";
str += text1.slice(5) + "<br/>";
str += "slice : " + text1.slice(5) + "<br/>";
str += "slice : " + text1.slice(5, 10) + "<br/>";
str += "replace : " + text2.replace('ABC', 'ooppqq') + "<br/>";  // 자바는 모두 바뀌지만, js는 첫번째 하나만 바뀜
str += "replace : " + text2.replaceAll('BCA', 'ooppqq') + "<br/>";
str += "charAt : " + text1.charAt(3) + "<br/>";
str += "charAt : " + text1.charCodeAt(3) + "<br/>";
str += "split : " + text2.split("BC",3)[1] + "<br/>";

let tel = '010-1234-5678';
let tels = tel.split("-");
for(let tel of tels) {
  console.log(tel);
}

tels.forEach((data, i) => console.log(i, data));

demo.innerHTML = str;