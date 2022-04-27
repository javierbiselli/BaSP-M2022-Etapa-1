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
var validationResultsSignup = document.getElementsByClassName('signup-validation-result');
var validationBoxS = document.getElementById('signup-validation');

// name validation

nameInputSignup.addEventListener('blur', validateName);
var nameError = signupErrors[0];

function validateName() {
    if (nameInputSignup.value.length < 3) {
        nameError.style.display = 'inherit';
        nameError.textContent = '* must contain at least 3 caracters';
        nameInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        nameInputSignup.style.border = '2px solid green';
    }

    if (containNumber(nameInputSignup)) {
        nameError.style.display = 'inherit';
        nameError.textContent = '* cant contain numbers';
        nameInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        nameInputSignup.style.border = '2px solid green';
    }
}

nameInputSignup.addEventListener('focus', function(){
    nameError.style.display = 'none';
})


// surname validation

lastnameInputSignup.addEventListener('blur', validateLastname);
var lastnameError = signupErrors[1];

function validateLastname() {
    if (lastnameInputSignup.value.length < 3) {
        lastnameError.style.display = 'inherit';
        lastnameError.textContent = '* must contain at least 3 caracters';
        lastnameInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        lastnameInputSignup.style.border = '2px solid green';
    }

    if (containNumber(lastnameInputSignup)) {
        lastnameError.style.display = 'inherit';
        lastnameError.textContent = '* cant contain numbers';
        lastnameInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        lastnameInputSignup.style.border = '2px solid green';
    }
}

lastnameInputSignup.addEventListener('focus', function(){
    lastnameError.style.display = 'none';
})


// dni validation

dniInputSignup.addEventListener('blur', validateDNI);
var dniError = signupErrors[2];

function validateDNI() {
    if (dniInputSignup.value.length < 8) {
        dniError.style.display = 'inherit';
        dniError.textContent = '* must contain more than 7 numbers';
        dniInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        dniInputSignup.style.border = '2px solid green';
    }
}

dniInputSignup.addEventListener('focus', function(){
    dniError.style.display = 'none';
})

// date validation

dateInputSignup.addEventListener('blur', validateDate);
var dateError = signupErrors[3];

function validateAge(birthDate) {
    var today = new Date();
    var birtday = new Date(birthDate);
    var age = today.getFullYear() - birtday.getFullYear();
    var month = today.getMonth() - birtday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birtday.getDate())) {
        age--;
    }
    return age
}

function validateDate() {
    if (validateAge(dateInputSignup.value) < 18) {
        dateError.style.display = 'inherit';
        dateError.textContent = '* you need to be 18 or older';
        dateInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        dateInputSignup.style.border = '2px solid green';
    }

    if (dateInputSignup.value == '') {
        dateError.style.display = 'inherit';
        dateError.textContent = '* this field is required';
        dateInputSignup.style.border = '2px solid red';
        return true
    }
}

dateInputSignup.addEventListener('focus', function(){
    dateError.style.display = 'none';
})

// phone number validation

telInputSignup.addEventListener('blur', validateTel);
var telError = signupErrors[4];

function validateTel() {
    if (telInputSignup.value.length !== 10) {
        telError.style.display = 'inherit';
        telError.textContent = '* phone number must have 10 numbers';
        telInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        telInputSignup.style.border = '2px solid green';
    }
}

telInputSignup.addEventListener('focus', function(){
    telError.style.display = 'none';
})

// address validation

addressInputSignup.addEventListener('blur', validateAddress);
var addressError = signupErrors[5];

function validateAddress() {
    if (addressInputSignup.value.length < 5) {
        addressError.style.display = 'inherit';
        addressError.textContent = '* address must contain 5 caracters';
        addressInputSignup.style.border = '2px solid red';
        return true
    }
    else if(!validation2(addressInputSignup)) {
        addressError.style.display = 'inherit';
        addressError.textContent = '* address must contain letters, numbers and a space in between';
        addressInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        addressInputSignup.style.border = '2px solid green';
    }
}

addressInputSignup.addEventListener('focus', function(){
    addressError.style.display = 'none';
})

// city validation

locationInputSignup.addEventListener('blur', validateLocation);
var locationError = signupErrors[6];

function validateLocation() {
    if (locationInputSignup.value.length < 4) {
        locationError.style.display = 'inherit';
        locationError.textContent = '* must contain more than 3 caracters';
        locationInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        locationInputSignup.style.border = '2px solid green';
    }
}

locationInputSignup.addEventListener('focus', function(){
    locationError.style.display = 'none';
})

// postal code validation

postalCodeInputSignup.addEventListener('blur', validatePostalCode);
var postalCodeError = signupErrors[7];

function validatePostalCode() {
    if (postalCodeInputSignup.value.length < 4 || postalCodeInputSignup.value.length > 5) {
        postalCodeError.style.display = 'inherit';
        postalCodeError.textContent = '* must contain 4 or 5 numbers';
        postalCodeInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        postalCodeInputSignup.style.border = '2px solid green';
    }
}

postalCodeInputSignup.addEventListener('focus', function(){
    postalCodeError.style.display = 'none';
})

// email validation

emailInputSignup.addEventListener('blur', validateEmail);
var emailErrorSignup = signupErrors[8];

var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

function validateEmail() {
    if (!emailRegex.test(emailInputSignup.value)) {
        emailErrorSignup.style.display = 'inherit';
        emailErrorSignup.textContent = '* invalid email';
        emailInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        emailInputSignup.style.border = '2px solid green';
    }
}

emailInputSignup.addEventListener('focus', function(){
    emailErrorSignup.style.display = 'none';
})

// password validation

passwordInputSignup.addEventListener('blur', validatePassword);
var passErrorSignup = signupErrors[9];

function validatePassword() {
    if (passwordInputSignup.value.length == 0) {
        passErrorSignup.style.display = 'inherit';
        passErrorSignup.textContent = '* this field is required';
        passwordInputSignup.style.border = '2px solid red';
        return true
    }
    else if (!validation1(passwordInputSignup)) {
        passErrorSignup.style.display = 'inherit';
        passErrorSignup.textContent = '* must contain letters and numbers';
        passwordInputSignup.style.border = '2px solid red';
        return true
    }
    else if (passwordInputSignup.value.length < 8) {
        passErrorSignup.style.display = 'inherit';
        passErrorSignup.textContent = '* must contain at least 8 caracters';
        passwordInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        passwordInputSignup.style.border = '2px solid green';
    }
}

passwordInputSignup.addEventListener('focus', function(){
    passErrorSignup.style.display = 'none';
})

// password repeat validation

repeatPasswordInputSignup.addEventListener('blur', matchPassword);
var passRepeatError = signupErrors[10];

function matchPassword() {
    if (repeatPasswordInputSignup.value.length == 0) {
        passRepeatError.style.display = 'inherit';
        passRepeatError.textContent = '* this field is required';
        repeatPasswordInputSignup.style.border = '2px solid red';
        return true
    }
    else if (repeatPasswordInputSignup.value != passwordInputSignup.value) {
        passRepeatError.style.display = 'inherit';
        passRepeatError.textContent = '* passwords dont match';
        repeatPasswordInputSignup.style.border = '2px solid red';
        return true
    }
    else {
        repeatPasswordInputSignup.style.border = '2px solid green';
    }
}

repeatPasswordInputSignup.addEventListener('focus', function(){
    passRepeatError.style.display = 'none';
})

// general functions

function containNumber(validationString) {
	var numbers = ['1','2','3','4','5','6','7','8','9','0'];
    
    for (var i = 0 ; i < validationString.value.length ; i++){
		if(numbers.includes(validationString.value[i])){
			return true
		}
	}
    return false
}

function validation2(strings) {
    var numbers = ['1','2','3','4','5','6','7','8','9','0'];
    var num = 0;
    var stri = 0;
    var blankSpace = 0;
    for (var i = 0; i < strings.value.length; i++) {
        if (numbers.includes(strings.value[i])) {
            num++;
        }
        else if(' '.includes(strings.value.trim()[i])) {
            blankSpace++;
        }
        else {
            stri++;
        }

    if (num > 0 && stri > 0 && blankSpace > 0) {
        return true
    }}
    return false
}

function validation1(strings) {
    var numbers = ['1','2','3','4','5','6','7','8','9','0'];
    var num = 0;
    var stri = 0;
    for (var i = 0; i < strings.value.length; i++) {
        if (numbers.includes(strings.value[i])) {
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

// signup validation results

submitInputSignup.addEventListener('click', showResultsSignup);
var nameValidationRes = validationResultsSignup[0];
var lastnameValidationRes = validationResultsSignup[1];
var dniValidationRes = validationResultsSignup[2];
var birthValidationRes = validationResultsSignup[3];
var telValidationRes = validationResultsSignup[4];
var addressValidationRes = validationResultsSignup[5];
var locValidationRes = validationResultsSignup[6];
var postValidationRes = validationResultsSignup[7];
var emailValidationResSignup = validationResultsSignup[8];
var passValidationResSignup = validationResultsSignup[9];
var passRepeatValidationRes = validationResultsSignup[10];

validationBoxS.style.display = 'none';

function showResultsSignup() {
    event.preventDefault();
    validationBoxS.style.display = 'inherit';
    validationBoxS.scrollIntoView(true);

    if (validateName()) {
        nameValidationRes.textContent = 'Invalid name: please check input requirements';
        nameValidationRes.style.color = 'red';
    }
    else {
        nameValidationRes.textContent = `Name: ${nameInputSignup.value}`;
        nameValidationRes.style.color = 'green';
    }

    if (validateLastname()) {
        lastnameValidationRes.textContent = 'Invalid last name: please check input requirements';
        lastnameValidationRes.style.color = 'red';
    }
    else {
        lastnameValidationRes.textContent = `Last name: ${lastnameInputSignup.value}`;
        lastnameValidationRes.style.color = 'green';
    }

    if (validateDNI()) {
        dniValidationRes.textContent = 'Invalid DNI: please check input requirements';
        dniValidationRes.style.color = 'red';
    }
    else {
        dniValidationRes.textContent = `DNI: ${dniInputSignup.value}`;
        dniValidationRes.style.color = 'green';
    }

    if (validateDate()) {
        birthValidationRes.textContent = 'Invalid birth date: please check input requirements';
        birthValidationRes.style.color = 'red';
    }
    else {
        birthValidationRes.textContent = `Birth date: ${dateInputSignup.value}`;
        birthValidationRes.style.color = 'green';
    }

    if (validateTel()) {
        telValidationRes.textContent = 'Invalid phone number: please check input requirements';
        telValidationRes.style.color = 'red';
    }
    else {
        telValidationRes.textContent = `Phone number: ${telInputSignup.value}`;
        telValidationRes.style.color = 'green';
    }

    if (validateAddress()) {
        addressValidationRes.textContent = 'Invalid address: please check input requirements';
        addressValidationRes.style.color = 'red';
    }
    else {
        addressValidationRes.textContent = `Address: ${addressInputSignup.value}`;
        addressValidationRes.style.color = 'green';
    }

    if (validateLocation()) {
        locValidationRes.textContent = 'Invalid city: please check input requirements';
        locValidationRes.style.color = 'red';
    }
    else {
        locValidationRes.textContent = `City: ${locationInputSignup.value}`;
        locValidationRes.style.color = 'green';
    }

    if (validatePostalCode()) {
        postValidationRes.textContent = 'Invalid postal code: please check input requirements';
        postValidationRes.style.color = 'red';
    }
    else {
        postValidationRes.textContent = `Postal code: ${postalCodeInputSignup.value}`;
        postValidationRes.style.color = 'green';
    }

    if (validateEmail()) {
        emailValidationResSignup.textContent = 'Invalid email';
        emailValidationResSignup.style.color = 'red';
    }
    else {
        emailValidationResSignup.textContent = `Email: ${emailInputSignup.value}`;
        emailValidationResSignup.style.color = 'green';
    }

    if (validatePassword()) {
        passValidationResSignup.textContent = 'Invalid password: please check input requirements';
        passValidationResSignup.style.color = 'red';
    }
    else {
        passValidationResSignup.textContent = `Password: ${passwordInputSignup.value}`;
        passValidationResSignup.style.color = 'green';
    }

    if (matchPassword()) {
        passRepeatValidationRes.textContent = 'Passwords dont match';
        passRepeatValidationRes.style.color = 'red';
    }
    else {
        passRepeatValidationRes.textContent = `Password validation: OK`;
        passRepeatValidationRes.style.color = 'green';
    }
}