var lengthOfPass = prompt("How long should the password be? (Must be between 8 and 128 characters.)")

function start() {
    if (parseInt(lengthOfPass) > 128 || parseInt(lengthOfPass) < 8) {
        alert("The password must be between 8 and 128 characters.");
    } else {
        document.getElementById("pwCriteria").style.display = "inline";
        document.getElementById("startbtn").style.display = "none";
    }
}

// index 0-25: capital, index 26-51: lower, index 52-61: numeric, index 62-74: speciaL
const possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&'*,./:;?@";

function generatePassword() {
    var criteriaLetters = possibleLetters;

    if (document.getElementById("uppercase").checked === false) {
        var criteriaLetters = criteriaLetters.replace('ABCDEFGHIJKLMNOPQRSTUVWXYZ', '');
    }
    if (document.getElementById("lowercase").checked === false) {
        var criteriaLetters = criteriaLetters.replace('abcdefghijklmnopqrstuvwxyz', '');
    }
    if (document.getElementById("numeric").checked === false) {
        var criteriaLetters = criteriaLetters.replace('0123456789', '');
    }
    if (document.getElementById("special").checked === false) {
        var criteriaLetters = criteriaLetters.replace("#%&'*,./:;?@", '');
    }

    var password = "";

    for (let index = 0; index < lengthOfPass; index++) {
        var randomIndex = Math.floor(Math.random() * Math.floor(criteriaLetters.length));
        var password = password.concat(criteriaLetters[randomIndex]);
    }

    return document.getElementById("showpw").innerHTML = `Your password: ${password}`
}


