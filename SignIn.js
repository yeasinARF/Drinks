function handleSignIn(event) {


    // Get the value of the input field 

    let Email = document.getElementById("email-signIn").value;
    let Password = document.getElementById("password-signIn").value;

    // check email and password

    if (Email === 'test@gmail.com' && Password === '12345678') {
        alert('Account Created Successfully!')
        
    }
    else {
        alert('Please provide correct info!')
        
    }



}
