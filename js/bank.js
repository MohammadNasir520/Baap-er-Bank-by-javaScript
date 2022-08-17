document.getElementById('btn-deposit').addEventListener('click', function () {


    // inputField Amount
    const depositField = document.getElementById('deposite-field');
    const depositeString = depositField.value;
    const depositeAmmount = parseFloat(depositeString);

    // depositeResult ammount
    const previousDepositete = document.getElementById('previousDepositAmount');
    const previousDepositeString = previousDepositete.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeString);

    // deposite add operation 
    const newDepositeAmmount = depositeAmmount + previousDepositeAmount;
    previousDepositete.innerText = newDepositeAmmount;


    // total ballance calculation

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + depositeAmmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = ''

    // console.log(previousDepositeAmount);
})