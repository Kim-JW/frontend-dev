const fetch = function(param) { // 콜백은 맨 뒤에 넣어야함.
    //
    // 비동기 코드 : 파일 시스템 접근, 네트워크 통신, SQL -> DB, setTimeout
    //
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(param === 'param-data') {
                resolve('ok');
            } else {
                reject(new Error('fail', null));
            }
            
        }, 2000);
    });
}

// ex01 결과를 받아서 아래 코드를 수행해야 할 경우 콜백 처리를 해야함.

// ex01("http://123.123.123.123/api");

if(require.main == module) {

    // test01: success
    fetch('param-data').then(function(res){
        console.log(res);
    });
    
    // test01: fail
    fetch('param-error').catch(function(error){
        console.log(error);
    });
    
    // 일반적으로
    // fetch('param...')
    //     .then(res => {
    
    //     })
    //     .catch(error => {
    
    //     });
    
    // 최종 목표
    // res = ex01('');
    // console.log(res);
    
    console.log("wait ....");
} else {
    module.exports = fetch;
}


