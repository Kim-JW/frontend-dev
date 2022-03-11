/** 
 *
 * 
 * named export1
 * 
 * exports(require.js)와 유사하다. 이 모듈을 import할 때에는 desctructing이 가능하다.
 * 
 */

const add = function(a, b) {
    return a + b;
}

const sub = function(a, b) {
    return a - b;
}

// ES6 객체 단축화, 이렇게 써도 되긴함.

// o = {
//     add,
//     sub
// }

export {add, sub}

