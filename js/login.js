document.getElementById('btn-submit').addEventListener('click',function(){

    //always use .value to get text from an input field

    const emailField=document.getElementById('user-email');
    const email=emailField.value;

    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;

    if(email=="sharika@gmail.com" && password=="1234"){
       window.location.href='bank.html';
    }
    else{
        alert("invalid");
    }

})