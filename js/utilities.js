
function getInputElemetByIds(inputelementId){
    const getInputElement = document.getElementById(inputelementId);
    const geteInputElementString = getInputElement.value ;
    const valueOfInputElement = parseInt(geteInputElementString)
    return valueOfInputElement;
}

function setElemetvalue (elementId , newValue){
    const getelementId = document.getElementById(elementId);
    getelementId.value = newValue;
}


function getInnerElementByIds(innerElementId){
    const getInnerElement = document.getElementById(innerElementId);
    const getInnerElementString = getInnerElement.innerText;
    const valueOfInnerElement = parseInt(getInnerElementString);
    return valueOfInnerElement;

    
}

function setInnerElemetValue (elementId, newValue){
    const gatelementId = document.getElementById(elementId);
    gatelementId.innerText = newValue;
}

function calculateTotal(){
    
    const phoneTotal = getInnerElementByIds('total-balance');
    const caseTotal =getInnerElementByIds('amount');

    const subTotal = phoneTotal + caseTotal;
    setInnerElemetValue('sub-total',subTotal)
    
    // calculate tax 
    const totalTax = subTotal * 0.1
   const fixedtax=  totalTax.toFixed(2)
    setInnerElemetValue('tax-total',fixedtax)

    // sum total 
    const sumTotal = subTotal + totalTax
    setInnerElemetValue('sum-total',sumTotal)
}