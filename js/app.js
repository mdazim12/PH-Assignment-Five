   

    // Noakhali Card Section

document.getElementById('noakhali-btn').addEventListener('click',function() {
   


    const noakhaliInput =   getInputValue('noakhali-input');
    const mainBalance = getTextValue('main-balance');
    const noakaliFund = getTextValue('noakali-fund');
    const noakaliTitle = document.getElementById('noakali-title').innerText;
    
    if(isNaN(noakhaliInput) || noakhaliInput < 0 || noakhaliInput === '' || mainBalance < noakhaliInput){
        alert('Please Input a valid Number')
        return;
    }

    
    const remainBalance = mainBalance - noakhaliInput;
    const noakhaliNewBalnce = noakaliFund + noakhaliInput;
   

    document.getElementById('main-balance').innerText = remainBalance.toFixed(2);;
    document.getElementById('noakali-fund').innerText = noakhaliNewBalnce.toFixed(2);
    document.getElementById('noakhali-input').value = '';

    //history for nowakali

    const historyItems = document.createElement('div');
            historyItems.innerHTML = `
                <div class="container mx-auto gap-y-2 border-2 rounded-xl border-lightgray border-solid p-5 my-3">
                <h4 class="text-xl font-bold text-black ">${noakhaliInput} Taka is ${noakaliTitle}</h4>
                <p class="text-base font-light text-lightblack ">Date : ${new Date()} </p>
            </div>
        `

            const historyContainer = document.getElementById('histoy-contanier');
            historyContainer.insertBefore(historyItems , historyContainer.firstChild)
    
    my_modal_5.showModal();
 }) 


 // Noakhali Card Section

    document.getElementById('feni-btn').addEventListener('click',function(){
        const feniInput = getInputValue('feni-input');
        const mainBalance = getTextValue('main-balance');
        const feniFund = getTextValue('feni-fund');
        const feniTitle = document.getElementById('feni-title').innerText

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
        document.getElementById('feni-input').value = '';


         //History for feni

        const historyItems = document.createElement('div');
            historyItems.innerHTML = `
                <div class="container mx-auto gap-y-2 border-2 rounded-xl border-lightgray border-solid p-5 my-3">
                <h4 class="text-xl font-bold text-black ">${feniInput} Taka is ${feniTitle}</h4>
                <p class="text-base font-light text-lightblack ">Date : ${new Date()} </p>
            </div>
        `

            const historyContainer = document.getElementById('histoy-contanier');
            historyContainer.insertBefore(historyItems , historyContainer.firstChild)

            my_modal_5.showModal();
        
    })


     //  Quota Movement Card Section

     document.getElementById('quota-btn').addEventListener('click',function(){
        const quotaInput = getInputValue('quota-input');
        const mainBalance = getTextValue('main-balance');
        const quotaFund = getTextValue('quota-fund');
        const quotaTitle = document.getElementById('quota-title').innerText;

        
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
        document.getElementById('quota-input').value = '';


          //History for Quota

          const historyItems = document.createElement('div');
          historyItems.innerHTML = `
              <div class="container mx-auto gap-y-2 border-2 rounded-xl border-lightgray border-solid p-5 my-3">
              <h4 class="text-xl font-bold text-black ">${quotaInput} Taka is ${quotaTitle}</h4>
              <p class="text-base font-light text-lightblack ">Date : ${new Date()} </p>
          </div>
      `

          const historyContainer = document.getElementById('histoy-contanier');
          historyContainer.insertBefore(historyItems , historyContainer.firstChild)                

          my_modal_5.showModal();    
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

            document.getElementById('histoy-contanier').classList.remove('hidden');
        });


        document.getElementById('btn-donate').addEventListener('click', function() {
            const allCards = document.getElementById('all-card');
            
            allCards.classList.remove('hidden');
            const historyButton = document.getElementById('btn-history');
            historyButton.classList.remove('bg-lime-400');
            historyButton.classList.add('bg-transparent');
            
             this.classList.remove('bg-transparent');
            this.classList.add('bg-lime-400');
            document.getElementById('histoy-contanier').classList.add('hidden');
        });



