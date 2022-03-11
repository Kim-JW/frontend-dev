/**
 * named & unamed export
 * 
 */

 const add = function(a, b) {
    return a + b;
}

const sub = function(a, b) {
    return a - b;
}

const div = function(a, b){
    return a / b;
}

export {add, sub, div}

export default {add, sub, div}