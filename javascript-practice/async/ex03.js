const fetch = require('./ex02');

// const res = await fetch('param-data')

const ex03 = async function(param) {
    try {
        const res = await fetch(param);
        console.log(res);
    } catch(error) {
        console.log(error);
    }
}

ex03('param-data');
ex03('param-error')
console.log('wait.....');