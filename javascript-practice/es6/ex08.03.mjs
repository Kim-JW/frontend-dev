/** 
 *
 * 
 * named export1
 * 
 * exports(require.js)와 유사하다. 이 모듈을 import할 때에는 desctructing이 가능하다.
 * 
 */

export const add = function(a, b) {
    return a + b;
}

export const sub = function(a, b) {
    return a - b;
}

