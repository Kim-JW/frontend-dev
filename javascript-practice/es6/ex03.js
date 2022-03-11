/**
 * Template Literal
 * 
 */

let no = 10;
let name = 'dooly';
let email = 'dooly@gmail.com';

// ex01
console.log('no:' + no + ', name: ' + name + ',email: ' + email);
console.log(`no:${no}, name:${name}, email:${email}`);

// ex02 : 다중행 지원
console.log('no:' + no + '\nname: ' + name + '\nemail: ' + email);
console.log(`no:${no}
name:${name} 
email:${email}`);