// information form //
const form = document.getElementById("create-account-form")
const fullnameInput = document.getElementById("fullname")
const numberInput = document.getElementById("number")
const emailInput = document.getElementById("email")
const email2Input = document.getElementById("email2")
const calenderDate = document.getElementById("tourdate")

form.addEventListener('submit', (e) => {

    validatrForm()
    if (isFormValid() == true) {
        form.submit()
     }else {
        e.preventDefault();
     }
})

function isFormValid() {
    const inputContainer = form.querySelectorAll('.form-control') // class with input group
    inputContainer.forEach(container => {
        if (container.classList.contains('error')) {
            result = false
        }
    })
    return result
}

function validatrForm() {
    //fullname
    if (fullnameInput.value.trim() === "") {
        setError(fullnameInput, 'Username cannot be blank')
    } else if (fullnameInput.value.trim().length < 5 || fullnameInput.value.trim().length > 20) {
        setError(fullnameInput, 'Name must be min 5 and max 20 characters')
    } else {
        setSuccess(fullnameInput)
    }
    // number
    if (numberInput.value.trim() == "") {
        setError(numberInput, 'Cannot be empty')
    } else if (numberInput.value.trim().length < 10 || numberInput.value.trim().length > 10) {
        setError(numberInput, 'Enter number correctly')
    } else {
        setSuccess(numberInput)
    }
    // email
    if (emailInput.value.trim() == "") {
        setError(emailInput, 'Provide an Email address')
    } else if (isEmailValid(emailInput.value)) {
        setSuccess(emailInput)
    } else {
        setError(emailInput, 'Provide a Valid Email Address ')
    }
    //confirm email
    if (email2Input.value.trim() == "") {
        setError(email2Input, 'Email cannot be empty')
    } else if (email2Input.value != emailInput.value) {
        setError(email2Input, 'Email does not match')
    } else {
        setSuccess(email2Input)
    }

    function setError(element, errorMessage) {
        const parent = element.parentElement
        if (parent.classList.contains('success')) {
            parent.classList.remove('success')
        }
        parent.classList.add('error')
        const paragraph = parent.querySelector('p')
        paragraph.textContent = errorMessage
    }
    function setSuccess(element) {
        const parent = element.parentElement
        if (parent.classList.contains('error')) {
            parent.classList.remove('error')
        }
        parent.classList.add('success')
    }
    function isEmailValid(email) {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return reg.test(email);
    }
}
// js object for person info//
function store() {
    const person = { name: fullnameInput.value, mobile: numberInput.value, email: emailInput.value, date: calenderDate.value }
    let JSONPerson = JSON.stringify(person)
    let setPerson = localStorage.setItem("user", JSONPerson)
}
