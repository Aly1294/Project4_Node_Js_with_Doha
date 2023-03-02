// ................... declare variables ..................
let signUp_div = document.getElementById("signUp_div")
let login_div = document.getElementById("login_div")



let Username_in_signUp = document.getElementById("Username_input_in_signUp")
let Email_in_signUp = document.getElementById("Email_in_signUp")
let password1_in_signUp = document.getElementById("password1_in_signUp")
let password2_in_signUp = document.getElementById("password2_in_signUp")


let userName_div_in_signUp= document.getElementById("userName_div_in_signUp")
let email_div_in_signUp= document.getElementById("email_div_in_signUp")
let password1_div_in_signUp= document.getElementById("password1_div_in_signUp")
let password2_div_in_signUp= document.getElementById("password2_div_in_signUp")

// ................... functions .......................

function Go_to_register(){
    login_div.classList.remove("show")
    login_div.classList.add("hide")
    signUp_div.classList.remove("hide")
    signUp_div.classList.add("show")  
}

function Go_to_login(){
    signUp_div.classList.remove("show")
    signUp_div.classList.add("hide")
    login_div.classList.remove("hide")
    login_div.classList.add("show")  
}

function Go_from_register_to_login_after_creating_account(){
    if (Username_in_signUp.value !=""){
    }
    else {
        userName_div_in_signUp.style.display="block"
    }


    if (Email_in_signUp.value !=""){
        
    }
    else {
        userName_div_in_signUp.style.display="block"
    }


    if (password1_in_signUp.value !=""){

    }
    else {
        userName_div_in_signUp.style.display="block"
    }

    if (Email_in_signUp.value !=""){

    }
    else {

    }
}