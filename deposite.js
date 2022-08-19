 document.getElementById("btn-deposite").addEventListener("click" ,function(){
   
    const userDeposite = document.getElementById("deposite-field");

    const newDepositeTotalString = userDeposite.value ;
const newDepositeValue = parseFloat(newDepositeTotalString);

 const depositeValue = document.getElementById("deposite-value")
 const previousDepositeTotalString = depositeValue.innerText
 const previousDepositeTotal = parseFloat(previousDepositeTotalString)


 const currentDepositeTotal = previousDepositeTotal +  newDepositeValue
 depositeValue.innerText = currentDepositeTotal

 userDeposite.value = ""
 const balanceTotalElement = document.getElementById("balance-total")
 const balanceTotalString =  balanceTotalElement.innerText;
 const previousBalanceTotal = parseFloat(balanceTotalString);
 const currentTotalBalance =  previousBalanceTotal + newDepositeValue
 balanceTotalElement.innerText=currentTotalBalance

 })