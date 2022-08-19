document.getElementById("btn-withdraw").addEventListener("click",function(){
    console.log("clicked")

    const withdrawElement = document.getElementById("withdraw-field");
    const newWitdrawTotalString = withdrawElement.value ;
    const newWitdrawTotal = parseFloat(newWitdrawTotalString);

    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWitdrawTotalString = withdrawTotalElement.innerText;
    const previousWitdrawTotal = parseFloat(previousWitdrawTotalString);
    const currentWitdrawTotal = previousWitdrawTotal +  newWitdrawTotal
    withdrawTotalElement.innerText = currentWitdrawTotal;

    const totalBalanceElement = document.getElementById("balance-total")
    const previousBalanceTotalStirng = totalBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalStirng) ;
    if(previousBalanceTotal<newWitdrawTotal){
        alert("you do not have much money ")
    }
   
    const currentBalance = previousBalanceTotal - newWitdrawTotal;
     totalBalanceElement.innerText = currentBalance; 

     withdrawElement.value = ""
})