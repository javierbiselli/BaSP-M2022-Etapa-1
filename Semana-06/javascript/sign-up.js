// Selectors
var nameInputSignup = document.querySelector('input[name="signup-name"]');
var lastnameInputSignup = document.querySelector('input[name="lastname"]');
var dniInputSignup = document.querySelector('input[name="dni"]');
var dateInputSignup = document.querySelector('input[name="date-of-birth"]');
var telInputSignup = document.querySelector('input[name="tel"]');
var addressInputSignup = document.querySelector('input[name="address"]');
var locationInputSignup = document.querySelector('input[name="location"]');
var postalCodeInputSignup = document.querySelector('input[name="postal-code"]');
var emailInputSignup = document.querySelector('input[name="signup-email"]');
var passwordInputSignup = document.querySelector('input[name="password"]');
var repeatPasswordInputSignup = document.querySelector('input[name="repeat-password"]');
var signupErrors = document.getElementsByClassName('signup-error');
var submitInputSignup = document.querySelector('input[type="submit"]');

// name validation

nameInputSignup.addEventListener('blur', validateName)

function validateName() {
    if (nameInputSignup.value.length < 3) {
        signupErrors[0].style.display = 'inherit';
        signupErrors[0].textContent = '* must contain at least 3 caracters';
        nameInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        nameInputSignup.style.border = '2px solid green';
    }

    if (containNumber(nameInputSignup)) {
        signupErrors[0].style.display = 'inherit';
        signupErrors[0].textContent = '* cant contain numbers';
        nameInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        nameInputSignup.style.border = '2px solid green';
    }
}

nameInputSignup.addEventListener('focus', function(){
    signupErrors[0].style.display = 'none'
})


// surname validation

lastnameInputSignup.addEventListener('blur', validateLastname)

function validateLastname() {
    if (lastnameInputSignup.value.length < 3) {
        signupErrors[1].style.display = 'inherit';
        signupErrors[1].textContent = '* must contain at least 3 caracters';
        lastnameInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        lastnameInputSignup.style.border = '2px solid green';
    }

    if (containNumber(lastnameInputSignup)) {
        signupErrors[1].style.display = 'inherit';
        signupErrors[1].textContent = '* cant contain numbers';
        lastnameInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        lastnameInputSignup.style.border = '2px solid green';
    }
}

lastnameInputSignup.addEventListener('focus', function(){
    signupErrors[1].style.display = 'none'
})


// dni validation

dniInputSignup.addEventListener('blur', validateDNI)

function validateDNI() {
    if (dniInputSignup.value.length < 8) {
        signupErrors[2].style.display = 'inherit';
        signupErrors[2].textContent = '* must contain more than 7 numbers';
        dniInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        dniInputSignup.style.border = '2px solid green';
    }
}

dniInputSignup.addEventListener('focus', function(){
    signupErrors[2].style.display = 'none'
})


// date validation

dateInputSignup.addEventListener('blur', validateDate)

function validateAge(birthDate) {
    var today = new Date();
    var birtday = new Date(birthDate);
    var age = today.getFullYear() - birtday.getFullYear();
    var month = today.getMonth() - birtday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birtday.getDate())) {
        age--;
    }
    return age;
}

function validateDate() {
    if (validateAge(dateInputSignup.value) < 18) {
        signupErrors[3].style.display = 'inherit';
        signupErrors[3].textContent = '* you need to be 18 or older';
        dateInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        dateInputSignup.style.border = '2px solid green';
    }

    if (dateInputSignup.value == '') {
        signupErrors[3].style.display = 'inherit';
        signupErrors[3].textContent = '* this field is required';
        dateInputSignup.style.border = '2px solid red';
        return true
    }
}

console.log(dateInputSignup.value)
dateInputSignup.addEventListener('focus', function(){
    signupErrors[3].style.display = 'none'
})

// phone number validation

telInputSignup.addEventListener('blur', validateTel)

function validateTel() {
    if (telInputSignup.value.length !== 10) {
        signupErrors[4].style.display = 'inherit';
        signupErrors[4].textContent = '* phone number must have 10 numbers';
        telInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        telInputSignup.style.border = '2px solid green';
    }
}

telInputSignup.addEventListener('focus', function(){
    signupErrors[4].style.display = 'none'
})


// address validation

addressInputSignup.addEventListener('blur', validateAddress)


function validateAddress() {
    if (addressInputSignup.value.length < 5) {
        signupErrors[5].style.display = 'inherit';
        signupErrors[5].textContent = '* address must contain 5 caracters';
        addressInputSignup.style.border = '2px solid red';
        return true
    }
    else if(!validation2(addressInputSignup)) {
        signupErrors[5].style.display = 'inherit';
        signupErrors[5].textContent = '* address must contain letters and numbers and a space';
        addressInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        addressInputSignup.style.border = '2px solid green';
    }
}

addressInputSignup.addEventListener('focus', function(){
    signupErrors[5].style.display = 'none'
})

// city validation

locationInputSignup.addEventListener('blur', validateLocation)

function validateLocation() {
    if (locationInputSignup.value.length < 4) {
        signupErrors[6].style.display = 'inherit';
        signupErrors[6].textContent = '* must contain more than 3 caracters';
        locationInputSignup.style.border = '2px solid red';
        return true
    }
    else if (!validation1(locationInputSignup)) {
        signupErrors[6].style.display = 'inherit';
        signupErrors[6].textContent = '* must contain letters and numbers';
        locationInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        locationInputSignup.style.border = '2px solid green';
    }
}

locationInputSignup.addEventListener('focus', function(){
    signupErrors[6].style.display = 'none'
})

// postal code validation

postalCodeInputSignup.addEventListener('blur', validatePostalCode)

function validatePostalCode() {
    if (postalCodeInputSignup.value.length < 4 || postalCodeInputSignup.value.length > 5) {
        signupErrors[7].style.display = 'inherit';
        signupErrors[7].textContent = '* must contain 4 or 5 numbers';
        postalCodeInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        postalCodeInputSignup.style.border = '2px solid green';
    }
}

postalCodeInputSignup.addEventListener('focus', function(){
    signupErrors[7].style.display = 'none'
})

// email validation

emailInputSignup.addEventListener('blur', validateEmail)

var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

function validateEmail() {
    if (!emailRegex.test(emailInputSignup.value)) {
        signupErrors[8].style.display = 'inherit'
        signupErrors[8].textContent = '* invalid email'
        emailInputSignup.style.border = '2px solid red'
        return true
    }
    else {
        emailInputSignup.style.border = '2px solid green'
    }
}

emailInputSignup.addEventListener('focus', function(){
    signupErrors[8].style.display = 'none'
})

// password validation

passwordInputSignup.addEventListener('blur', validatePassword)

function validatePassword() {
    if (passwordInputSignup.value.length == 0) {
        signupErrors[9].style.display = 'inherit'
        signupErrors[9].textContent = '* this field is required'
        passwordInputSignup.style.border = '2px solid red'
        return true
    }
    else if (!validation1(passwordInputSignup)) {
        signupErrors[9].style.display = 'inherit'
        signupErrors[9].textContent = '* must contain letters and numbers'
        passwordInputSignup.style.border = '2px solid red'
        return true
    }
    else if (passwordInputSignup.value.length < 8) {
        signupErrors[9].style.display = 'inherit'
        signupErrors[9].textContent = '* must contain at least 8 caracters'
        passwordInputSignup.style.border = '2px solid red'
        return true
    }
    else {
        passwordInputSignup.style.border = '2px solid green'
    }
}

passwordInputSignup.addEventListener('focus', function(){
    signupErrors[9].style.display = 'none'
})

// password repeat validation

repeatPasswordInputSignup.addEventListener('blur', matchPassword)

function matchPassword() {
    if (repeatPasswordInputSignup.value.length == 0) {
        signupErrors[10].style.display = 'inherit'
        signupErrors[10].textContent = '* this field is required'
        repeatPasswordInputSignup.style.border = '2px solid red'
        return true
    }
    else if (repeatPasswordInputSignup.value != passwordInputSignup.value) {
        signupErrors[10].style.display = 'inherit'
        signupErrors[10].textContent = '* passwords dont match'
        repeatPasswordInputSignup.style.border = '2px solid red'
        return true
    }
    else {
        repeatPasswordInputSignup.style.border = '2px solid green'
    }
}

repeatPasswordInputSignup.addEventListener('focus', function(){
    signupErrors[10].style.display = 'none'
})












function containNumber(validationString) {
	var numbers = ['1','2','3','4','5','6','7','8','9','0']
    
    for (var i = 0 ; i < validationString.value.length ; i++){
		if(numbers.includes(validationString.value[i])){
			return true;
		}
	}
    return false
}



function validation2(strings) {
    var numbers = ['1','2','3','4','5','6','7','8','9','0']
    var num = 0
    var stri = 0
    var blankSpace = 0
    for (var i = 0; i < strings.value.length; i++) {
        if (numbers.includes(strings.value[i])) {
            num++
        }
        else if(' '.includes(strings.value[i])) {
            blankSpace++
        }
        else {
            stri++
        }

    if (num > 0 && stri > 0 && blankSpace > 0) {
        return true
    }}
    return false
}




function validation1(strings) {
    var numbers = ['1','2','3','4','5','6','7','8','9','0']
    var num = 0
    var stri = 0
    for (var i = 0; i < strings.value.length; i++) {
        if (numbers.includes(strings.value[i])) {
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

// function onlyNumber(validationString) {
// 	for (var i = 0 ; i < validationString.length ; i++){
// 		if(!containNumber(validationString[i])){
// 			return false;
// 		}
// 	}
// 	return true;
// }