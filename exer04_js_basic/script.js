// let funcNoname = function () {
//     alert('함수_01');
//     alert('함수_02');
// }

// // funcNoname();

// alert(typeof(funcNoname) + ':' + funcNoname);

// function funcname(){
//     alert('함수_01');
//     alert('함수_02');
// };

// alert(typeof(funcname) + ':' + funcname);

// function f(x) {
//     return x * x;
// };

// alert(f(3));

let fun = function(){
    alert('함수호출');
};

function callTenTimes(callback_func){
    for(let i=0; i<10; i++){
        callback_func();
    }
}

callTenTimes(fun)