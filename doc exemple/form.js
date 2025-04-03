const usernameEl = document.querySelector('#username'); 
const emailEl = document.querySelector('#email'); 
const passwordEl = document.querySelector('#password'); 
const confirmPasswordEl = document.querySelector('#confirm-password'); 
 
const form = document.querySelector('#signup'); 

const isRequired = value => value === '' ? false : true;

const isBetween =(length,min,max)=>length<min || length>max ? 
false : true;

const isEmailValid = (email) => { 
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[09]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/; 
    return re.test(email); 
};

const isPasswordSecure = (password) => { 
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[09])(?=.*[!@#\$%\^&\*])(?=.{8,})"); 
    return re.test(password); 
};


const showError = (input, message) => { 
    
    const formField = input.parentElement; 
    
    formField.classList.remove('success'); 
    formField.classList.add('error'); 

    
    const error = formField.querySelector('small'); 
    error.textContent = message; 
}; 

const showSuccess = (input) => { 
    
   const formField = input.parentElement; 


   formField.classList.remove('error'); 
   formField.classList.add('success'); 

  
   const error = formField.querySelector('small'); 
   error.textContent = ''; 
} 

const checkUsername = () => { 
 
    let valid = false; 
    const min = 3, 
        max = 25; 
    const username = usernameEl.value.trim(); 

    if (!isRequired(username)) { 
        showError(usernameEl, 'Le champ ne peut être vide'); 
    } else if (!isBetween(username.length, min, max)) { 
        showError(usernameEl, `le nom doit être compris entre ${min} et 
${max} caractères.`) 
    } else { 
        showSuccess(usernameEl); 
        valid = true; 
    } 
    return valid; 
} 

const checkEmail = () => { 
    let valid = false; 
    const email = emailEl.value.trim(); 
    if (!isRequired(email)) { 
        showError(emailEl, 'le champ ne peut être vide'); 
    } else if (!isEmailValid(email)) { 
        showError(emailEl, "L'adresse mail ne peut être valide") 
    } else { 
        showSuccess(emailEl); 
        valid = true; 
    } 
    return valid; 
}

const checkPassword = () => { 
 
    let valid = false; 

    const password = passwordEl.value.trim(); 

    if (!isRequired(password)) { 
        showError(passwordEl, 'le mot de passe ne peut être vide'); 
    } else if (!isPasswordSecure(password)) { 
        showError(passwordEl, 'Le mot de passe doit avoir au moins 8 caractères, il doit comporter une minuscule,une majuscule, un chiffre et un caractère spécial parmi les suivants (!@#$%^&*)'); 
    } else { 
        showSuccess(passwordEl); 
        valid = true; 
    } 

    return valid; 
};

const checkConfirmPassword = () => { 
    let valid = false; 
    
    const confirmPassword = confirmPasswordEl.value.trim(); 
    const password = passwordEl.value.trim(); 

    if (!isRequired(confirmPassword)) { 
        showError(confirmPasswordEl, 'Entrez votre mot de passe'); 
    } else if (password !== confirmPassword) { 
        showError(confirmPasswordEl, "Votre mot de passe et la confirmation n'est pas bonne"); 
    } else { 
        showSuccess(confirmPasswordEl); 
        valid = true; 
    } 

    return valid; 
}; 

form.addEventListener('submit',function(e){
    e.preventDefault(); 
    let isUsernameValid = checkUsername(); 
    let isEmailValid = checkEmail(); 
    let isPasswordValid = checkPassword(); 
    let isConfirmPasswordValid = checkConfirmPassword(); 
    let isFormValid = isUsernameValid && 
    isEmailValid && 
    isPasswordValid && 
    isConfirmPasswordValid; 

    if (isFormValid==false) { 
        e.preventDefault(); 
        alert("L'envoie a échoué") 
    }else{ 
        alert("Bravo l'envoie du formulaire a été effectué") 
    } 
}); 