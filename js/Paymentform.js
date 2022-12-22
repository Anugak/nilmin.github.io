const D_amount_1 = document.getElementById("d-amount-1")
const D_amount_2 = document.getElementById("d-amount-2")
const D_amount_3 = document.getElementById("d-amount-3")
const D_amount_4 = document.getElementById("d-amount-4")
const D_amount_5 = document.getElementById("d-amount-5")
const D_amount_6 = document.getElementById("d-amount-6")

const Amount_display = document.getElementById("amount")
// function setAmount(){
//     if(D_amount_1.clicked == true){
//         Amount_display.value = 500
//     }else if(D_amount_2.clicked == true){

//     }
// }
D_amount_1.onclick = function(){
    Amount_display.value = parseInt(D_amount_1.innerText)
}
D_amount_2.onclick = function(){
    Amount_display.value = parseInt(D_amount_2.innerText)
}
D_amount_3.onclick = function(){
    Amount_display.value = parseInt(D_amount_3.innerText)
}
D_amount_4.onclick = function(){
    Amount_display.value = parseInt(D_amount_4.innerText)
}
D_amount_5.onclick = function(){
    Amount_display.value = parseInt(D_amount_5.innerText)
}
D_amount_6.onclick = function(){
    Amount_display.value = parseInt(D_amount_6.innerText)
}

/*    -----------------------------            */
const form = document.getElementById("credit-card")
const nameInput = document.getElementById("name")
const cardNumber = document.getElementById("card-number")
const Amount = document.getElementById("amount")
const Month = document.getElementsByClassName("month")
const CVVvalue = document.getElementById("cvv-value")


form.addEventListener('submit', (e) =>{

    validatrForm()
    if(isFormValid() == true){
        form.submit()
       
    }else {
        e.preventDefault();
    }
    
})

function isFormValid(){
    const inputContainer = form.querySelectorAll('.form-control') // class with input group
    inputContainer.forEach(container =>{
        if(container.classList.contains('error')){
            result = false
        }
    })
    return result
}

function validatrForm(){
    //fullname
    if(nameInput.value.trim() == ""){
        setError(nameInput, 'Name cannot be blank')
    }else if(nameInput.value.trim().length <5 || nameInput.value.trim().length >20){
        setError(nameInput, 'Name must be min 5 and max 20 characters')
    }else {
        setSuccess(nameInput)
    }
     // number
    if(cardNumber.value.trim() == ""){
        setError(cardNumber, 'Card number cannot be empty')
    }else if(cardNumber.value.trim().length <16 || cardNumber.value.trim().length >16){
        setError(cardNumber, 'Enter valid card number')
    }else {
        setSuccess(cardNumber)
    }
    // amount
    if(Amount.value.trim() == ""){
        setError(Amount, 'Select an amount for donation')
    }else{
        setSuccess(Amount)
    }
    //CVV 
    if(CVVvalue.value.trim() == ""){
        setError(CVVvalue, 'cannot be empty')
    }else if(CVVvalue.value <4){
        setError(CVVvalue, 'Should be at least 3 or 4 digits')
    }else{
        setSuccess(CVVvalue)
    }
    // month

    function setError(element, errorMessage){
        const parent = element.parentElement
        if(parent.classList.contains('success')){
            parent.classList.remove('success')
        }
        parent.classList.add('error')
        const paragraph = parent.querySelector('p')
        paragraph.textContent = errorMessage
    }
    function setSuccess(element){
        const parent = element.parentElement
        if(parent.classList.contains('error')){
            parent.classList.remove('error')
        }
        parent.classList.add('success')
    }
}
function popup(){
    alert("Thankyou");
}