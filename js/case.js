
document.getElementById('case-quantity-increase-btn').addEventListener('click',function(){

   const quantityPlus =  getInputElemetByIds('case-quantity')
   const totalQuantity = quantityPlus + 1;
   setElemetvalue('case-quantity', totalQuantity);

    const totalBalance = totalQuantity * 59;
    setInnerElemetValue('amount', totalBalance);

    calculateTotal();

})

document.getElementById('case-quantity-decrase-btn').addEventListener('click', function(){
   const quantityMinus = getInputElemetByIds('case-quantity');
   const totalQuantitys = quantityMinus -1;
   setElemetvalue('case-quantity', totalQuantitys);

   const totalBalances = totalQuantitys * 59;
   setInnerElemetValue('amount', totalBalances);

   calculateTotal();   
   
})

