// 1, 2
// unamed export 모듈에서 대상을 하나만 import할 때는 반드시 이름을 지정해야 한다.

import myFunction from './ex08.01.mjs';
import myObject from './ex08.02.mjs';

console.log(myFunction(1,2));
console.log(myObject.add(10,20));

// 3. import destruction
// named export는 import 대상이 다수 이기 때문에 하나의 특정 이름으로 받을 수 없다.
// 대신 * as ~ 를 사용할 수 있다.
 
// import m from './ex08.03.mjs'; <- 에러
import * as m from './ex08.03.mjs';
console.log(m.add(10, 20));

// 4. import destruction
import {sub} from './ex08.04.mjs';
console.log(sub(10, 20));

// 5. 섞어 쓰기
import math, {add, div} from './ex08.05.mjs';
console.log(math.div(20, 10), add(20, 10));