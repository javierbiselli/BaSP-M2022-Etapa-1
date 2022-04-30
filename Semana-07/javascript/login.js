// Selectors
var emailInputLogin = document.getElementById('email-input');
var passwordInputLogin = document.getElementById('password-input');
var loginErrors = document.getElementsByClassName('login-error');
var submitInputLogin = document.getElementById('submit-input');
var validationResults = document.getElementsByClassName('login-validation-result');
var modalContainer = document.getElementById('login-validation-container');
var modalBox = document.getElementById('login-validation')
var LoginResponse = document.getElementById('login-response')
var closeModal = document.getElementById('close-modal')


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
closeModal.addEventListener('click', function(){
    modalContainer.classList.add('hidden')
    modalBox.classList.add('hidden')
})
var emailValidationRes = validationResults[0]
var passValidationRes = validationResults[1]



function showResultsLogin() {
    event.preventDefault();
    modalContainer.classList.remove('hidden')
    modalBox.classList.remove('hidden')
    if (validateEmail()) {
        emailValidationRes.textContent = 'Invalid email';
        emailValidationRes.style.color = 'red';
    }
    else {
        emailValidationRes.textContent = `Email: ${emailInputLogin.value}`;
        emailValidationRes.style.color = 'green';
    }

    if (validatePassword()) {
        passValidationRes.textContent = 'Invalid password';
        passValidationRes.style.color = 'red';
    }
    else {
        passValidationRes.textContent = `Password: ${passwordInputLogin.value}`;
        passValidationRes.style.color = 'green';
    }
}

// fetch

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
            var jsonResponseVar = jsonResponse.msg
            if (jsonResponse.success == true) {
                LoginResponse.textContent = 'Success! ' + jsonResponseVar
                closeModal.setAttribute('href', '../views/index.html')
            }
            else {
                LoginResponse.textContent = 'Error! ' + jsonResponseVar
            }
        })
    }
}