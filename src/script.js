const form=document.getElementById('form');
const fn=document.getElementById('fn');
const ln=document.getElementById('ln');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');


//Show input error message

function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
    
}

//Email

function isValidEmail(email)
{
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}





form.addEventListener('submit',function(e){
    e.preventDefault();

    if(fn.value===''){
        showError(fn,'First name is required');
    }
    else{
        showSuccess(fn);
    }
    if(ln.value===''){
        showError(ln,'Last name is required');
    }
    else{
        showSuccess(ln);
    }
    if(email.value===''){
        showError(email,'Email is required');
    }else if(!isValidEmail(email.value)){
        showError(email,'Email is not valid');
    }
    else{
        showSuccess(email);
    }

    if(password.value===''){
        showError(password,'Password is required');
    }
    else{
        showSuccess(password);
    }
    if(password2.value===''){
        showError(password2,'confirm password is required');
    }else if(password2.value!==password.value) {
        showError(password2,'Password do not match');
    }
    else{
        showSuccess(password2);
    }

    
});