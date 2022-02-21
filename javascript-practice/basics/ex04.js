/*
변수의 범위(Scope) - Block 범위
1. 자바스크립트는 어휘에서 변수의 범위를 알 수 있다.(Lexical Scope)
2. ES6 이전(<=ES5)
    - 자바와 같은 블록 범위를 지원하지 못했다.
    - 함수범위
    - function() {...} 안에서 변수 앞에 var 키워드를 사용하면 함수 범위를 가지게 된다. 
    - 만약에 var 키워드가 없이 함수 안에서 변수를 정의하면 전역 범위를 가지게 된다.(hoisting)

3. ES6 이후(ES6)
    - Block Scop을 적용할 수 있는 두 개의 키워드를 지원(let, const)
    - let : 변수
    - const : 상수

4. 결론
    const / let 만 사용하고 반드시 붙이자. (안붙이면 hoisting, 전역이 된다.)

*/ 

var i = 10;

var f = function() {
    i = 10;
}

f();

if(i > 10) {
    
}

var j = 10;
var ff = function() {
    var j = 20;
    k = 100;
    console.log(j);

    j = k-1;
}

ff();

// 여기서는 k는 전역범위다.
// var 키워드는 함수블록에서 함수 범위만 가지게 할 때 적용된다.
if(90+10 == 100){
    var p = 20;
}

o = {

}

console.log(j);
console.log(k);

console.log('---------------------');

{
    let x = 1000000;
    const PI = 3.14;
    x = 100;

    // 상수이기 때문에 에러
    //PI = 0;
}

// error: 접근이 안된다.
// console.log(PI);
//console.log(x);

o = 10;
o;

//var p;
t;