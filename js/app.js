   

    // Noakhali Card Section

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


 // Noakhali Card Section

    document.getElementById('feni-btn').addEventListener('click',function(){
        const feniInput = getInputValue('feni-input');
        const mainBalance = getTextValue('main-balance');
        const feniFund = getTextValue('feni-fund');

        const remainBalance = mainBalance - feniInput;
        const reniNewBalance = feniFund + feniInput;


        // All validation

        if(isNaN(feniInput) || feniInput < 0 || feniInput === '' || mainBalance < feniInput ){
            alert('Please Input a Valid Number')
            return;
        }


        //Update thhe Dom for feni

        document.getElementById('main-balance').innerText = remainBalance.toFixed(2);
        document.getElementById('feni-fund').innerText = reniNewBalance.toFixed(2);
        document.getElementById('feni-input').value = " ";
    })


     //  Quota Movement Card Section

     document.getElementById('quota-btn').addEventListener('click',function(){
        const quotaInput = getInputValue('quota-input');
        const mainBalance = getTextValue('main-balance');
        const quotaFund = getTextValue('quota-fund');

        
        const remainBalance = mainBalance - quotaInput;
        const newQuotaFund = quotaFund + quotaInput;

        // All validation

        if(isNaN(quotaInput) || quotaInput < 0 || quotaInput === '' || mainBalance < quotaInput ){
            alert('Please Input a Valid Number')
            return;
        }

        // Update the DOM for quota movment

        document.getElementById('main-balance').innerText = remainBalance.toFixed(2);
        document.getElementById('quota-fund').innerText = newQuotaFund.toFixed(2);
        document.getElementById('quota-input').value = ' ';


     })


  
   
      //Toggle button
    
        document.getElementById('btn-history').addEventListener('click', function() {
            const donateButton = document.getElementById('btn-donate');
            donateButton.classList.remove('bg-primary', 'bg-lime-400');
            donateButton.classList.add('bg-transparent');
            this.classList.remove('bg-transparent');
             this.classList.add('bg-lime-400');
            
            const allCards = document.getElementById('all-card');
            allCards.classList.add('hidden');
        });


        document.getElementById('btn-donate').addEventListener('click', function() {
            const allCards = document.getElementById('all-card');
            
            allCards.classList.remove('hidden');
            const historyButton = document.getElementById('btn-history');
            historyButton.classList.remove('bg-lime-400');
            historyButton.classList.add('bg-transparent');
            
             this.classList.remove('bg-transparent');
            this.classList.add('bg-lime-400');
        });



