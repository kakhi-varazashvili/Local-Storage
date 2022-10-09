var clear = document.querySelector(".clear")
clear.addEventListener("click", function(){
    localStorage.clear()

})


function myFunction(){
    var password = document.querySelectorAll(".psw")

    for(var i of password){

    if(i.type ==="password"){
        i.type = "text";
    }
    else(i.type = "password")
}
}