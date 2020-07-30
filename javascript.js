// index 0-25: capital, index 26-51: lower, index 52-61: numeric, index 62-74: speciaL
const possibleLetters1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&'*,./:;?@";


// // without object
document.getElementById("genbtn").addEventListener("click", generatePassword);
function generatePassword() {
    var lengthOfPass = parseInt(document.getElementById("length-of-pass").value);

    if (parseInt(lengthOfPass) > 128 || parseInt(lengthOfPass) < 8) {
        alert("The password must be between 8 and 128 characters.");
        return;
    }

    var criteriaLetters = possibleLetters1;

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

    var passwordarr = [];

    for (let index = 0; index < lengthOfPass; index++) {
        var randomIndex = Math.floor(Math.random() * Math.floor(criteriaLetters.length));
        passwordarr.push(criteriaLetters[randomIndex]);
    }





    return document.getElementById("showpw").innerHTML = `Your password: ${passwordarr.join("")}`
}

// with Object guaranteed every criteria

// document.getElementById("genbtn").addEventListener("click", generatePassword);


// class characters {
//     constructor() {
//         this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//         this.lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
//         this.numeric = "0123456789".split("");
//         this.special = "#%&'*,./:;?@".split("");
//     }
// }

// var $upperInc = document.getElementById("uppercase").value;
// var $lowerInc = document.getElementById("lowercase").value;
// var $numInc = document.getElementById("numeric").value;
// var $specInc = document.getElementById("special").value;


// const possibleLetters2 = new characters;


// function generatePassword(template) {
//     var lengthOfPass = parseInt(document.getElementById("length-of-pass").value);

//     if (parseInt(lengthOfPass) > 128 || parseInt(lengthOfPass) < 8) {
//         alert("The password must be between 8 and 128 characters.");
//         return;
//     }
//     var template = [];
//     var templateCriteria = [];

//     $upperInc = document.getElementById("uppercase").value;
//     $lowerInc = document.getElementById("lowercase").value;
//     $numInc = document.getElementById("numeric").value;
//     $specInc = document.getElementById("special").value;

//     if ($upperInc === "on") {
//         console.log("u")
//         templateCriteria.push('uppercase');
//     }
//     if ($lowerInc === "on") {
//         console.log("l")
//         templateCriteria.push('lowercase');
//     }
//     if ($numInc === "on") {
//         console.log("n")
//         templateCriteria.push('numeric');
//     }
//     if ($specInc === "on") {
//         console.log("s")
//         templateCriteria.push('special');
//     }

//     console.log($specInc);

//     for (let index = 0; index < lengthOfPass; index++) {

//         var randomIndex = Math.floor(Math.random() * Math.floor(templateCriteria.length));
//         template.push(templateCriteria[randomIndex]);
//     }

//     var password = [];

//     template.forEach(criteria => {
//         if ($upperInc === 'on') {
//             var randomIndex = Math.floor(Math.random() * Math.floor(possibleLetters2.uppercase.length));
//             criteria.replace(criteria, possibleLetters2.uppercase[randomIndex]);
//         }
//         if ($lowerInc === 'on') {
//             var randomIndex = Math.floor(Math.random() * Math.floor(possibleLetters2.lowercase.length));
//             criteria.replace(criteria, possibleLetters2.lowercase[randomIndex]);
//         }
//         if ($numInc === 'on') {
//             var randomIndex = Math.floor(Math.random() * Math.floor(possibleLetters2.numeric.length));
//             criteria.replace(criteria, possibleLetters2.numeric[randomIndex]);
//         }
//         if ($specInc === 'on') {
//             var randomIndex = Math.floor(Math.random() * Math.floor(possibleLetters2.special.length));
//             criteria.replace(criteria, possibleLetters2.special[randomIndex]);
//         }


//     });

//     var passwordStr = password.join("");
//     console.log(template);

//     return document.getElementById("showpw").innerHTML = `Your password: ${passwordStr}`
// }
