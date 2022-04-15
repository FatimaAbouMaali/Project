/*Asmaa Zaoud
    user: 60095003
    pass: asmaa2001
  */


function validateField(id) {
    let elem = document.getElementById(id);
    if (elem.value == "") {
        elem.style.borderBottom = "2px solid red";
        elem.placeholder = "* Enter " + elem.id + " here!";
        return false;
    }
    else {
        elem.style.borderBottom = "1px solid black";
        return true;
    }
}




function validPassword() {
    let password = document.getElementById('password');
    let passConfirm = document.getElementById('passConfirm');
    let span = document.getElementById('passEror');

    if (password.value != passConfirm.value) {
        passConfirm.style.borderBottom = "2px solid red";
        passConfirm.style.width = "40%";
        span.innerHTML = "* password must be same";
        return false;

    }
    else {
        passConfirm.style.borderBottom = "1px solid black";
        passConfirm.style.width = "80%";
        span.innerHTML = ""
        return true;
    }
}


function validateEmail() {
    let email = document.getElementById('mail');
    let span = document.getElementById('emailError');
    let at = email.value.indexOf("@");
    let last = email.value.lastIndexOf(".com");


    if (email.value == "") {
        email.style.borderBottom = "2px solid red";
        email.placeholder = "* Enter email here!";
        return false;
    }

    else if (last == -1 || at == -1) {
        email.style.borderBottom = "2px solid red";
        email.style.width = "50%";
        span.innerHTML = "* invalid email";
        return false;
    }
    else {
        email.style.borderBottom = "1px solid black";
        email.style.width = "80%";
        span.innerHTML = ""

        return true
    }
}


function validateBuldNum() {
    let buldNum = document.getElementById('buldNum');

    if (buldNum.value == "") {
        buldNum.style.borderBottom = "2px solid red";
        buldNum.placeholder = "* Enter Building number!";
        return false;
    }

    else if (buldNum.value < 0 || buldNum.value > 9999) {
        buldNum.style.borderBottom = "2px solid red";
        buldNum.placeholder = "Number between 1 & 9999!";
        return false;
    }
    else {
        buldNum.style.borderBottom = "1px solid black";
        return true;
    }

}

function validateCity() {
    let city = document.getElementById('city');
    let span = document.getElementById('cityError');
    if (city.selectedIndex == 0) {
        city.style.width = "50%";
        span.innerHTML = "* Please Select a city!"
        span.style.color = "red"
        return false;
    }
    else {
        city.style.width = "88%";
        span.innerHTML = "";
        return true
    }
}


function CheckMobile() {
    let mobile = document.getElementById('mobile');
    if (mobile.value == "") {
        mobile.style.borderBottom = "2px solid red";
        mobile.placeholder = "* Enter mobile number here!";
        return false;
    }
    if (mobile.value.length != 8) {
        mobile.style.borderBottom = "2px solid red";
        mobile.placeholder = "invalid number";

        return false
    }

    else {
        mobile.style.borderBottom = "1px solid black";
        return true;
    }
}


function validateRadio() {
    let mobradio = document.getElementById('mobradio');
    let mailRadio = document.getElementById('mailRadio');
    let msg = document.getElementById('msg');
    if (mobradio.checked || mailRadio.checked) {
        msg.style.display = "none";
        return true
    }
    else {
        msg.innerHTML = "* Please select a method!";
        msg.style.color = "red";
        msg.style.display = "inline";
        return false

    }
}



function validateForm() {
    let fun1 = validateField('username');
    let fun2 = validateField('password');
    let fun3 = validateField('street');
    let fun4 = validPassword();
    let fun5 = validateEmail();
    let fun6 = validateBuldNum();
    let fun7 = CheckMobile();
    let fun8 = validateRadio();
    let fun9 = validateCity();
    if (fun1 && fun2 && fun3 && fun4 && fun5 && fun6 && fun7 && fun8 && fun9) {
        return true
    }
    else {
        return false
    }
}