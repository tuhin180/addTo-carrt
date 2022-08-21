document.getElementById('btn-increase').addEventListener('click', function(){
    const quantityphonePlus = getInputElemetByIds('input-quantity');
    const totalQuantity = quantityphonePlus + 1;
    setElemetvalue('input-quantity', totalQuantity);

   const totalPhoneBalance = totalQuantity * 1219;
   setInnerElemetValue('total-balance', totalPhoneBalance);

   calculateTotal();



   
})

document.getElementById('btn-decrease').addEventListener('click', function(){
    const quantityphonePluss = getInputElemetByIds('input-quantity');
    const totalQuantitys = quantityphonePluss - 1;
    setElemetvalue('input-quantity', totalQuantitys);

    const totalPhoneBalance = totalQuantitys * 1219;
    setInnerElemetValue('total-balance', totalPhoneBalance)

    calculateTotal();


})