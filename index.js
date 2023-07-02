const pass = document.getElementById('password');
const confPass = document.getElementById('confirm-password');
const container = document.querySelector('.detail');
const red = document.createElement('p');

if (pass.value.length <1){
    red.textContent = "* Enter a password";
    red.classList.add('error');
    container.appendChild(red);
}

pass.addEventListener('input', () => {
    if (pass.value.length ==0){
        red.className = 'error';
        red.textContent = "* Enter a password";
    }
    else if (pass.value != confPass.value){
        red.className = 'error';
        red.textContent = 'The password does not match ';
    }

    else if (pass.value === confPass.value){
        red.className = "green";
        red.textContent = 'The password are the same';
    }
})

confPass.addEventListener('input', () => {
    if (pass.value.length == 0){
        red.className = 'error';
        red.textContent = "* Enter a password";
    }    
    else if (pass.value != confPass.value){
        red.className = 'error';
        red.textContent = 'The password does not match ';
    }

    else if (pass.value === confPass.value){
        red.className = "green";
        red.textContent = 'The password are the same';
    }
})
