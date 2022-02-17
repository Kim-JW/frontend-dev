/*
 변수와 데이터 타입
 [기본타입(primitive, 원시)]
 - undefined
 - number
 - string
 - boolean

 [객체]
 - object type
    1. new 생성자 함수(역할) 사용
    2. 
    3.
    4.

 - function type

* 함수의 역할이 2개
- 생성자
- 일반 함수 (값을 리턴)

*/

console.log("==== 기본타입(primitive, 원시) ============");
var u = undefined;  // var u; 동일 , 선언과 정의의 구분이 없다. 
var i = 10;
var s = "Hello World";
var b = true;

console.log("u: " + typeof(u));
console.log("i: " + typeof(i));
console.log("s: " + typeof(s));
console.log("b: " + typeof(b));

var a;
console.log(a);

console.log("====== 객체타입(object type) ======");
var i2 = new Number(1);
var s2 = new String("Hello World");
var b2 = new Boolean(false);
var o = new Object();
var a = new Array();        // 배열도 객체다!!

console.log("i2: " + typeof(i2));
console.log("s2: " + typeof(s2));
console.log("b2: " + typeof(b2));
console.log("o: " + typeof(o));
console.log("a: " + typeof(a));

function f() {
    console.log("!!!");
}

f();

var o = new f();

console.log("====== 객체타입(function type) ======");