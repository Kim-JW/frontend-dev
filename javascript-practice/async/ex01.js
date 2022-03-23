const fetch = function(param, callback) { // 콜백은 맨 뒤에 넣어야함.
    //
    // 비동기 코드 : 파일 시스템 접근, 네트워크 통신, SQL -> DB, setTimeout
    //
    // $.ajax({
    //     success: function() {

    //     }
    // }) 랑 비슷한 격

    setTimeout(function(){
        if(param === 'param-data') {
            callback(null, 'ok');
        } else {
            callback(new Error('fail'), null);
        }
        
    }, 2000);
    
}
// ex01 결과를 받아서 아래 코드를 수행해야 할 경우 콜백 처리를 해야함.

// ex01("http://123.123.123.123/api");

// test01: success
fetch('param-data', function(error, res){
    if(error) {
        console.log(error)
    } else {
        console.log(res)
    }
});

// test01: fail
fetch('param-error', function(error, res){
    if(error) {
        console.log(error)
    } else {
        console.log(res)
    }
});

// 최종 목표
// res = ex01('');
// console.log(res);

console.log("wait ....");