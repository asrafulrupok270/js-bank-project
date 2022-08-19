document.getElementById("btn-withdraw").addEventListener("click", function(){

    const withdrawField = document.getElementById("withdraw-field")
    const newWithdrawAmountString = withdrawField.value ; 
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    const withdrawElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   
    const currentWitdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawElement.innerText = currentWitdrawTotal;

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if(previousBalanceTotal<newWithdrawAmount){
        alert("tor baper ato tk nai")
    }
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;



    withdrawField.value = ""
})