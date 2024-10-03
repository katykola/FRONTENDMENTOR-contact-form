const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const message = document.getElementById('message');

let radioButtons = document.querySelectorAll('.radio-input');
radioButtons = Array.from(radioButtons);

const btn = document.getElementById('btn');

// Změna background a border u radio field a outline pryč po zvolení volby
document.addEventListener('DOMContentLoaded', function() {// Zajistí, že se funkce spustí, až po načtení všech prvků v DOM
    
    let radioOptions = document.querySelectorAll('.radio-option');
    radioOptions = Array.from(radioOptions);
    
    for (let i = 0; i < radioButtons.length; i++) { 
        radioButtons[i].addEventListener('change', function() { 
            for (let j = 0; j < radioButtons.length; j++) { // Pridam loop uvnitr loop, tim zajistim, ze probehne for loop pro obe radio buttons
                if (radioButtons[j].checked) {
                    radioOptions[j].classList.add('radio-option-selected');
                    radioButtons[j].style.outline = 'none';
                } else {
                    radioOptions[j].classList.remove('radio-option-selected');
                }
            }
        });
    }
});


// Checkbox, změna z input checkbox na svg icon, když je input checked
document.addEventListener('DOMContentLoaded', function() {// Zajistí, že se funkce spustí, až po načtení všech prvků v DOM
    const checkbox = document.querySelector('.checkbox-input');
    const checkboxIcon = document.querySelector('.checkbox-icon'); // Vybere svg icon
    const labelNoConcent = document.querySelector('.checkbox-label-noconcent');
    const labelConcent = document.querySelector('.checkbox-label-concent');

    checkbox.addEventListener('change', function() { // The change event is fired for <input>, <select>, and <textarea> elements when the user modifies the element's value.
        if (checkbox.checked) {
            checkboxIcon.style.display = 'block';
            labelNoConcent.style.display = 'none';
            labelConcent.style.display = 'block';

        } else {
            checkboxIcon.style.display = 'none';
            labelNoConcent.style.display = 'block';
            labelConcent.style.display = 'none';
        }
    });
});


btn.addEventListener('click', function(event){

    event.preventDefault();  // Prevent form submission

    const consent = document.getElementById('consent');
    const consentContact = document.getElementById('consentContact');
    const firstNameInvalid = document.getElementById('firstNameInvalid');
    const lastNameInvalid = document.getElementById('lastNameInvalid');
    const invalidEmail = document.getElementById('invalidEmail');


   // First name input, check empty string
    if(firstName.value === ''){
        firstNameInvalid.style.display = 'inherit';
        firstName.classList.add('field-style-invalid');
    }else{
        firstNameInvalid.style.display = 'none';
        firstName.classList.remove('field-style-invalid');
    }
    
    // Last name input, check empty string
    if(lastName.value === ''){
        lastNameInvalid.style.display = 'inherit';
        lastName.classList.add('field-style-invalid');
    }else{
        lastNameInvalid.style.display = 'none';
        lastName.classList.remove('field-style-invalid');
    }

    //Email input, check empty a zda je validni
    function isValidEmail(email){ //Funkce, která zkontroluje, zda je email validní
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(regex.test(email));
        return regex.test(email); 
    }

    function checkEmail(){
        const emailValue = email.value;
        if(emailValue !== ''){
            if(!isValidEmail(emailValue)){ // Email vyplneny, ale spatne udaje
                invalidEmail.style.display = 'inherit';
                email.classList.add('field-style-invalid');
            }else{ // spravne vyplneny email
                invalidEmail.style.display = 'none';
                email.classList.remove('field-style-invalid');
            }
        }else{ // Pokud je hodnota empty, email je prazdny
            invalidEmail.style.display = 'inherit';
            email.classList.add('field-style-invalid');
        }
    }
    
    checkEmail();

    // Message input, check empty string
    if(message.value === ''){
        messageEmpty.style.display = 'inherit';
        message.classList.add('field-style-invalid');

    }else{
        messageEmpty.style.display = 'none';
        message.classList.remove('field-style-invalid');
    }


    //Radio buttons dve volby, check zda je vybrana jedna
    for(let i = 0; i < radioButtons.length; i++){
        const radioInvalid = document.getElementById('queryInValid'); //Text, kdyz je nevalidni
        
        if(radioButtons[i].checked){            
            radioInvalid.style.display = 'none';
            break
        }else{
            radioInvalid.style.display = 'inherit';
        }
    }

    //Check, zda je checked checkbox se souhlasem
    if(!consent.checked){
        consentContact.style.display = 'inherit';
    }else{
        consentContact.style.display = 'none';

    }

})