// Selectors
var emailInputLogin = document.querySelector('input[type="email"]')
var passwordInputLogin = document.querySelector('input[type="password"]');
var loginErrors = document.getElementsByClassName('login-error');
var submitInputLogin = document.querySelector('input[type="submit"]');
var validationResults = document.getElementsByClassName('login-validation-result');

// email validation

emailInputLogin.addEventListener('blur', validateEmail)

var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var emailError = document.getElementsByClassName('login-error')[0]

function validateEmail() {
    if (!emailRegex.test(emailInputLogin.value)) {
        emailError.style.display = 'inherit'
        emailError.textContent = '* invalid email'
        emailInputLogin.style.border = '2px solid red'
        return true
    }
    else {
        emailInputLogin.style.border = '2px solid green'
    }
}

emailInputLogin.addEventListener('focus', function(){
    emailError.style.display = 'none'
})

// password validation

passwordInputLogin.addEventListener('blur', validatePassword)
passwordError = document.getElementsByClassName('login-error')[1]

function validation() {
    var numbers = ['1','2','3','4','5','6','7','8','9','0']
    var num = 0
    var stri = 0
    for (var i = 0; i < passwordInputLogin.value.length; i++) {
        if (numbers.includes(passwordInputLogin.value[i])) {
            num++
        }
        else {
            stri++
        }
    if (num > 0 && stri > 0) {
        return true
    }}
    return false
}

function validatePassword() {
    if (!validation()) {
        passwordError.style.display = 'inherit'
        passwordError.textContent = '* must contain letters and numbers'
        passwordInputLogin.style.border = '2px solid red'
        return true
    }
    else if (passwordInputLogin.value.length < 8) {
        passwordError.style.display = 'inherit'
        passwordError.textContent = '* must contain at least 8 caracters'
        passwordInputLogin.style.border = '2px solid red'
        return true
    }
    else {
        passwordInputLogin.style.border = '2px solid green'
    }
}

passwordInputLogin.addEventListener('focus', function(){
    passwordError.style.display = 'none'
})

// login validation results

validationBox = document.getElementById('login-validation')
submitInputLogin.addEventListener('click', showResultsLogin)

validationBox.style.display = 'none'

function showResultsLogin() {
    event.preventDefault()
    validationBox.style.display = 'inherit'
    validationBox.scrollIntoView(true)
    if (validateEmail()) {
        validationResults[0].textContent = 'Error: invalid email'
        validationResults[0].style.color = 'red'
    }
    else {
        validationResults[0].textContent = `Email: ${emailInputLogin.value}`
        validationResults[0].style.color = 'green'
    }

    if (validatePassword()) {
        validationResults[1].textContent = 'Error: please check input requirements'
        validationResults[1].style.color = 'red'
    }
    else {
        validationResults[1].textContent = `Password: ${passwordInputLogin.value}`
        validationResults[1].style.color = 'green'
    }
}