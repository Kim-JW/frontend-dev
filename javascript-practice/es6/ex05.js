/**
 * Arrow Function
 * 
 */

const power = function(x) {
    return x * x;
}

const p2 = (x) => {
    return x * x;
}

const p3 = (x) => x * x;

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(n){
    process.stdout.write(`${n}: ${power(n)}\t`);
});

// ex01


// ex02
console.log("\n ----- \n");
const power2 = x => x*x;

numbers.forEach(function(n) {
    process.stdout.write(`${n}: ${(x => x*x)(n)}\t`);
});


// ex03 
console.log("\n ----- \n");

numbers.forEach(n => process.stdout.write(`${n}: ${(x => x*x)(n)}\t`));

// ex04 : this를 어휘적으로 바인딩 가능하다.
console.log("\n ----- \n");
const dooly = {
    name: '둘리',
    friends: ['또치', '마이콜', '도우너', '길동'],
    printFriends: function() {
        // this.friends.forEach(function(f){
        //     console.log(`${this.name}의 친구 ${f}`);
        // }.bind(this));
        this.friends.forEach(f => console.log(`${this.name}의 친구 ${f}`));
    }
};

dooly.printFriends();