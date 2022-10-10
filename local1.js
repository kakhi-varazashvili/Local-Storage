var clear = document.querySelector(".clear")
clear.addEventListener("click", function(){
    localStorage.clear()

})
var psw1 = document.querySelector(".psw1")
var psw2 = document.querySelector(".psw2")
var chkpsw = document.querySelector(".chkpsw")

function myFunction(){

 

    if(psw1.type ==="password" && psw2.type==="password"){
        psw1.type = "text";
        psw2.type = "text";
    }
    else{psw1.type = "password";
    psw2.type = "password"}
}



chkpsw.addEventListener("click", function(){

    
        if(psw1.value == psw2.value){
            chkpsw.style.backgroundColor = "green"
            chkpsw.style.color = "white"
            chkpsw.innerHTML = "Confirmed"

            console.log("kakhi")
            
        }
        else{
            chkpsw.style.backgroundColor = "green"
            chkpsw.style.color = "white"
            chkpsw.innerHTML = "Passwords do not match"
            console.log("error")
        }
    }

)


