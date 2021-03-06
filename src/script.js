const form = document.getElementById('form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkForm();
    postForm();
})
// FORM VALIDATION 
function checkForm() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === '') {
        setErrorMessage(firstName, 'First Name cannot be empty')
    } else {
        setSuccessMessage(firstName)
    }

    if (lastNameValue === '') {
        setErrorMessage(lastName, 'Last Name cannot be empty')
    } else {
        setSuccessMessage(lastName)
    }

    if (emailValue === '') {
        setErrorMessage(email, 'Email cannot be empty')
    } else if (!validateEmail(emailValue)) {
        setErrorMessage(email, 'This is not a valid email')
    } else {
        setSuccessMessage(email)
    }

    if (passwordValue === '') {
        setErrorMessage(password, 'Password cannot be empty')
    } else {
        setSuccessMessage(password)
    }

}

function setErrorMessage(input, message) {
	const parentElement = input.parentElement;
	const error = parentElement.querySelector('span');
    parentElement.className = 'input_control error';
	error.innerText = message;
}

function setSuccessMessage(input) {
    const parentElement = input.parentElement;
	parentElement.className = 'input_control success';
}

// VALIDATE EMAIL
function validateEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// POST FORM 
function postForm() {
    console.log(form)
    var user = new Object();

    user.firstName = firstName.value,
    user.lastName = lastName.value,
    user.email = email.value,
    user.password = password.value

    //console.log(user)
    //form.reset();
}