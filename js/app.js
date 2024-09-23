   


document.getElementById('noakhali-btn').addEventListener('click',function(){
   


    const noakhaliInput =   getInputValue('noakhali-input');
    const mainBalance = getTextValue('main-balance');
    const noakaliFund = getTextValue('noakali-fund');
    
    if(isNaN(noakhaliInput) || noakhaliInput < 0 || noakhaliInput === '' || mainBalance < noakhaliInput){
        alert('Please Input a valid Number')
        return;
    }

    

    const remainBalance = mainBalance - noakhaliInput;
    const noakhaliNewBalnce = noakaliFund + noakhaliInput;
   

    document.getElementById('main-balance').innerText = remainBalance.toFixed(2);;
    document.getElementById('noakali-fund').innerText = noakhaliNewBalnce.toFixed(2);
    document.getElementById('noakhali-input').value = '';
    
})