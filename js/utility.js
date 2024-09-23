
   function getInputValue(id){
    const getInput = document.getElementById(id).value;
    const getInputValueNumber = parseFloat(getInput);
    return getInputValueNumber;
   }

   function getTextValue(id){
    const getText = document.getElementById(id).innerText;
    const getTextNumber = parseFloat(getText)
    return getTextNumber;
   }

 