
// =========> Slide Effect <========= //
var firstSlide = document.getElementById('slide1');
var secondSlide = document.getElementById('slide2');

var lefts = document.querySelector(".left");
var right1 = document.querySelector(".right");
var rights = document.querySelector(".righty");

var signUp = document.querySelector(".sign-up");
var signIn = document.querySelector(".sign-in");


firstSlide.addEventListener("click", () => {
    signUp.style.left = '10px';
    signIn.style.right = '-500px';
    signIn.style.opacity = '0';
    rights.style.top = '10px';
    lefts.style.transform = "translatey(200%)";
})

secondSlide.addEventListener('click', () => {
    right1.style.top = '10px';
    lefts.style.transform = "translatey(0)";
    signUp.style.left = '-500px';
    signIn.style.opacity = '1';
    rights.style.top = '600px';
    signIn.style.right = '10px';
})



// ==== Form Validation =======//
function Validate() {
    let Password = document.getElementById("Password");
    let Email = document.getElementById("Email");
    if(Email.value == ""){
        return false
    }
    if(Password.value == ""){
        return false
    }
    else{
        Email.style.border = "0";
        Password.style.border = "0";
        Email.value = "";
        return true
    }

}


//=========> Hide And Show Password <============//
function ShowPassword(){
    let showing = document.getElementById("pass");
    let hiding = document.getElementById("passes");
    document.getElementById("Password").type="text";
    showing.style.display = "none";
    hiding.style.display= "block";
}

function HidePassword(){
    let showing = document.getElementById("pass");
    let hiding = document.getElementById("passes");
    document.getElementById("Password").type="password";
    showing.style.display = "block";
    hiding.style.display= "none";
}

