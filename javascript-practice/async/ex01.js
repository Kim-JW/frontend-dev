const ex01 = function(param, callback) { // 콜백은 맨 뒤에 넣어야함.
    //
    // 비동기 코드 : 파일 시스템 접근, 네트워크 통신, SQL -> DB, setTimeout
    //
    // $.ajax({
    //     success: function() {

    //     }
    // }) 랑 비슷한 격

    setTimeout(function(){
        callback(null, 'ok');
    }, 2000);
    
}
// ex01 결과를 받아서 아래 코드를 수행해야 할 경우 콜백 처리를 해야함.

// ex01("http://123.123.123.123/api");

// test01 : success
ex01('param-data', function(error, res){
    if(error) {
        console.log(error)
    } else {
        console.log(res)
    }
});

console.log("wait ....");