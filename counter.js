let count = 0;
document.getElementById("plus").innerHTML = count;
function counterPlus(){
    count += 1;
    document.getElementById("plus").innerHTML = count;
    console.log(count)

}

function counterMinus(){
    count -= 1;
    document.getElementById("plus").innerHTML = count;
    console.log(count)

}

function multiply(){
    count *= 2;
    document.getElementById("plus").innerHTML = count ;
}

function reset(){
    count = 0;
    document.getElementById("plus").innerHTML = count;
    console.log(count)

}