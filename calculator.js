let n = "";
let realn = "1234";
function check(){
    if(n==realn){
        alert('pin is correct');
    }
    else{
        alert('pin is incorrect,try again');
    }
    n="";
    document.getElementById("theNumber").innerHTML = n;

}

function tap(t){
    n+=t;
    document.getElementById("theNumber").innerHTML = n;
}

function clearN(){
    n='';
    document.getElementById('theNumber').innerHTML =n;
}