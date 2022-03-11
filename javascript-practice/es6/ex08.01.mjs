/**
 * mjs 붙은 애들은 export 하는 애들, js는 모듈들을 가져다 사용하는 애들
 * 
 * unamed export with default
 * 
 */

export default function(a, b) {
    return a + b;
}

// 오류 : 이름 없이 export 하기 때문에 하나만 export 할 수 있음.
// export default function(a, b) {
//     return a - b;
// }