/**
 * let : Block Scope의 변수
 * 
 */

try {
    if(true) {
        var i = 10;
        let j = 20;
    }

    console.log(i, j);
} catch (e) {
    console.log('error' + e);
}