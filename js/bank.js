document.getElementById('btn-deposit').addEventListener('click', function () {


    // inputField Amount
    const depositField = document.getElementById('deposite-field');
    const depositeString = depositField.value;
    const depositeAmmount = parseFloat(depositeString);

    // depositeResult ammount
    const previousDepositete = document.getElementById('previousDepositAmount');
    const previousDepositeString = previousDepositete.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeString);

    const newDepositeAmmount = depositeAmmount + previousDepositeAmount;
    previousDepositete.innerText = newDepositeAmmount;

    depositField.value = ''

    // console.log(previousDepositeAmount);
})