// Selectors
var emailInputLogin = document.querySelector('input[type="email"]');
var passwordInputLogin = document.querySelector('input[type="password"]');
var loginErrors = document.getElementsByClassName('login-error');
var submitInputLogin = document.querySelector('input[type="submit"]');
var validationResults = document.getElementsByClassName('login-validation-result');
var validationBox = document.getElementById('login-validation');


// email validation

emailInputLogin.addEventListener('blur', validateEmail);

var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var emailError = loginErrors[0];

function validateEmail() {
    if (!emailRegex.test(emailInputLogin.value)) {
        emailError.style.display = 'inherit';
        emailError.textContent = '* invalid email';
        emailInputLogin.style.border = '2px solid red';
        return true
    }
    else {
        emailInputLogin.style.border = '2px solid green';
    }
}

emailInputLogin.addEventListener('focus', function(){
    emailError.style.display = 'none';
})

// password validation

passwordInputLogin.addEventListener('blur', validatePassword);
passwordError = loginErrors[1];

function validation() {
    var numbers = ['1','2','3','4','5','6','7','8','9','0'];
    var num = 0;
    var stri = 0;
    for (var i = 0; i < passwordInputLogin.value.length; i++) {
        if (numbers.includes(passwordInputLogin.value[i])) {
            num++;
        }
        else {
            stri++;
        }
    if (num > 0 && stri > 0) {
        return true
    }}
    return false
}

function validatePassword() {
    if (!validation()) {
        passwordError.style.display = 'inherit';
        passwordError.textContent = '* must contain letters and numbers';
        passwordInputLogin.style.border = '2px solid red';
        return true
    }
    else if (passwordInputLogin.value.length < 8) {
        passwordError.style.display = 'inherit';
        passwordError.textContent = '* must contain at least 8 caracters';
        passwordInputLogin.style.border = '2px solid red';
        return true
    }
    else {
        passwordInputLogin.style.border = '2px solid green';
    }
}

passwordInputLogin.addEventListener('focus', function(){
    passwordError.style.display = 'none'
})

// login validation results

submitInputLogin.addEventListener('click', showResultsLogin);
var emailValidationRes = validationResults[0]
var passValidationRes = validationResults[1]

validationBox.style.display = 'none';

function showResultsLogin() {
    event.preventDefault();
    validationBox.style.display = 'inherit';
    validationBox.scrollIntoView(true);
    if (validateEmail()) {
        emailValidationRes.textContent = 'Error: invalid email';
        emailValidationRes.style.color = 'red';
    }
    else {
        emailValidationRes.textContent = `Email: ${emailInputLogin.value}`;
        emailValidationRes.style.color = 'green';
    }

    if (validatePassword()) {
        passValidationRes.textContent = 'Error: please check input requirements';
        passValidationRes.style.color = 'red';
    }
    else {
        passValidationRes.textContent = `Password: ${passwordInputLogin.value}`;
        passValidationRes.style.color = 'green';
    }
}

// Fetch

submitInputLogin.addEventListener('click', sendData);

function sendData() {
    var keys = ['email=', 'password=']
    var values = [emailInputLogin.value, passwordInputLogin.value]
    var concating = []

    for (let i = 0; i < keys.length; i++) {
        concating.push([keys[i].concat(values[i])])
    }
    concatingString = concating.join('&')

    var urlConcat = 'https://basp-m2022-api-rest-server.herokuapp.com/login?'
    urlConcat += concatingString

    if (!validateEmail() & !validatePassword()) {
        fetch(urlConcat)
        .then(function (response) { 
          return response.json()
        })
        .then(function (jsonResponse) { 
            alert(jsonResponse.msg)
        })
        .catch(function (jsonResponse) { 
            alert(jsonResponse.msg)
        })
    }
}