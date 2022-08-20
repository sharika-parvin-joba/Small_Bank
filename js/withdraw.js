document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withdrawField=document.getElementById('withdraw-field');
    const newWithDrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithDrawAmountString);

    const WithdrawTotalElement=document.getElementById('withdraw-total');
    const previourWithdrawTotalString=WithdrawTotalElement.innerText;
    const previourWithdrawTotal=parseFloat(previourWithdrawTotalString);

    const currentWithdrawTotal=previourWithdrawTotal + newWithdrawAmount;

    WithdrawTotalElement.innerText=currentWithdrawTotal;

    const balanceTotalElement=document.getElementById('balance-total');
    const previourBalanceTotalSting=balanceTotalElement.innerText;
    const previourBalanceTotal=parseFloat(previourBalanceTotalSting);

    const newBalanceTotal=previourBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText=newBalanceTotal;


    withdrawField.value='';


})