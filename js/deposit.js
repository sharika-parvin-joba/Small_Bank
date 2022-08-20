

document.getElementById('btn-deposit').addEventListener('click',function(){

//deposit
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);

    const depositTotalElement=document.getElementById('deposit-total');
    const previourDepositTotalSting=depositTotalElement.innerText;
    const  previourDepositTotal=parseFloat(previourDepositTotalSting);

    const currentDepositTotal=previourDepositTotal+newDepositAmount;

    depositTotalElement.innerText=currentDepositTotal;

//balance total

const balanceTotalElement=document.getElementById('balance-total');
const previourBalanceTotalSting=balanceTotalElement.innerText;
const previourBalanceTotal=parseFloat(previourBalanceTotalSting);

const currentBalanceTotal=previourBalanceTotal + newDepositAmount;

balanceTotalElement.innerText=currentBalanceTotal;

    depositField.value='';

})



