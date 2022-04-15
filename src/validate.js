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


function validateEx() {
    let city = document.getElementById('ex');
    let span = document.getElementById('cityError');
    if (city.selectedIndex == 0) {
        city.style.width = "50%";
        span.innerHTML = "* Please Select a Exhibition!"
        span.style.color = "red"
        return false;
    }
    else {
        city.style.width = "88%";
        span.innerHTML = "";
        return true
    }
}


function validateRadio() {
    let adultNon = document.getElementById('adultNon');
    let adult = document.getElementById('adult');
    let child = document.getElementById('child');
    let childNon = document.getElementById('childNon');


    let msg = document.getElementById('msg');
    if (adult.checked || child.checked || adultNon.checked || childNon.checked) {
        msg.style.display = "none";
        return true
    }
    else {
        msg.innerHTML = "* Please select a type!";
        msg.style.color = "red";
        msg.style.display = "inline";
        return false

    }
}



function validateForm() {
    let fun1 = validateField('fname');
    let fun2 = validateField('email');
    let fun3 = validateField('adr');
    let fun4 = validateField('city');
    let fun5 = validateRadio();
    let fun6 = validateCity();
    if (fun1 && fun2 && fun3 && fun4 && fun5 && fun6) {
        return true
    }
    else {
        return false
    }
}


module.exports = {
    validateField,
    validateForm,
    validateEx
}