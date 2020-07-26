function start() {
    var lengthOfPass = prompt("How long should the password be? (Must be between 8 and 128 characters.)")

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
    for (let index = 0; index < lengthOfPass; index++) {
        var goodChar
        
    }
}

console.log(possibleLetters[62])