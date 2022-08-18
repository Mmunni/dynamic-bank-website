document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const emailText = emailField.value;
    // emailField.value = '';
   
   
    const passwordField = document.getElementById('password-field');
    const passwordText = passwordField.value;
    // passwordField.value = '';
    if(emailText == 'munni@gmail.com' && passwordText == '123456'){
       location.href = 'deposit.html';
       
    }
    else{
       
        alert('invalid user');
    }
})