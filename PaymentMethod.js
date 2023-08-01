function handlePayment(event) {

    // Get the value of the input field 
    let CardHolderName = document.getElementById("card-holder-name").value;
    let CardNumber = document.getElementById("card-number").value;
    let ExpiryDate = document.getElementById("expiry-date").value;
    let Cvc = document.getElementById("cvc").value;
    let CardCheck = document.getElementById("card-check").value;
    // check email
    if(CardHolderName==='')
    {

    }
    else if (CardNumber==='')
    {

    }
    else if(ExpiryDate==='')
    {

    }
    else if(Cvc==='')
    {

    }
    else if(CardCheck==='')
    {

    }
    else{
        alert('Successfully Payment Done!')
    }



}
