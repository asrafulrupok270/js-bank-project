 document.getElementById("btn-deposite").addEventListener("click",function(){

const depositeElement = document.getElementById("deposite-field");
const newDepositeTotalString = depositeElement.value ;
const newDepositeTotal = parseFloat(newDepositeTotalString);
 
const depositeValue = document.getElementById("deposite-value");
const previousDepositeTotalString = depositeValue.innerText;
const previousDepositeTotal = parseFloat(previousDepositeTotalString);
const currentValue = previousDepositeTotal + newDepositeTotal ;
depositeValue.innerText = currentValue;

const totalBalanceElement = document.getElementById("balance-total");
const previousBalanceTotalStirng = totalBalanceElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalStirng);

const currentBalance = previousBalanceTotal+newDepositeTotal;
 totalBalanceElement.innerText = currentBalance;


depositeElement.value= ""

 }
 )