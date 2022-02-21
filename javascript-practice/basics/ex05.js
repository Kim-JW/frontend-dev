/*

구문(statement)
1. 자바 실행 단위
2. 구문의 구성 요소
    - 값, 연산자: 표현식
    - 주석: 구문을 구성해도 실행되지 않는다.
    - 예약어들: if, const, for, ...

3. 구문의 예
    - 주석 구문
    - if(1-1 == 0) {}
    - if ~ else
    - switch
    - for, do~while, for~in
4. 공백 : 토큰 분리
5. 세미콜론 : 
    - 원칙적으로 구문을 분리한다.
    - 표현식을 표현식구문으로 만들어서 표현식을 실행하게 한다.
6. 개행

*/ 

i = 10; j = 10; i;
var s = "hello world"; console.log(s)
console.log(i)

// 개행의 역할1 : ;를 대체한다.
// 개행의 역할2 : 공백을 대체한다.
// 어쩔때 1 or 2: 자바스크립트 엔진이 Parser가 에러 없는 실행을 우선 원칙으로 1번과 2번을 판단해 낸다.

// 1) 예시
var s = "hello world"
console.log(s)

// 2) 예시
a 
= 
2 
+ 
2;

console.log(s)

o = {
};

f = function() {};

if(i == 10) {
    
}

/*
; 
*/