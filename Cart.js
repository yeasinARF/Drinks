// cart-item-1 
function handleChange() {
    const num1 = parseFloat(document.getElementById('qty').value);
    const num2 = parseFloat(document.getElementById('price').innerHTML);
    const result = (num1 * num2).toFixed(2);
    document.getElementById('subTotalPrice').innerHTML = result;
}
// cart-item-2 
function handlePrice() {
    const num1 = parseFloat(document.getElementById('qty-item-2').value);
    const num2 = parseFloat(document.getElementById('item-2-price').innerHTML);
    const result = (num1 * num2).toFixed(2);
    document.getElementById('subTotalPrice-item-2').innerHTML = result;
}
// cart-item-3
function handleItemPrice() {
    const num1 = parseFloat(document.getElementById('qty-item-3').value);
    const num2 = parseFloat(document.getElementById('item-3-price').innerHTML);
    const result = (num1 * num2).toFixed(2);
    document.getElementById('subTotalPrice-item-3').innerHTML = result;
}
function handleCheckout() {
    const itemOne=parseFloat(document.getElementById('subTotalPrice').innerHTML)
    const itemTwo=parseFloat(document.getElementById('subTotalPrice-item-2').innerHTML)
    const itemThree=parseFloat(document.getElementById('subTotalPrice-item-3').innerHTML)
    const sum= (itemOne + itemTwo + itemThree).toFixed(2)
    const deliveryFee=parseFloat(document.getElementById('delivery-fee').innerHTML)
    const totalAll= (itemOne + itemTwo + itemThree + deliveryFee).toFixed(2)
    document.getElementById('total-item-price').innerHTML = `£${sum}`;
    document.getElementById('total-all').innerHTML = `£${totalAll}`;
    if(totalAll)
    {
        alert(`Order Successfully Done , Total Payable £${totalAll}`)
        
    }
    else{
        alert('Something went wrong!')
    }
    
    


    
}
