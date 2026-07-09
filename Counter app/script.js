// ================counter app=================

var number = document.getElementById("num")
var no = 0

function increase(){
 no++
 number.innerText = no
}
function decrease(){
 
    if(no ===0 ){
        alert("No more decrease")
    }else{
        no--
        number.innerText =no 
  }
}
function reset(){
    no = 0
    number.innerText = no
}
