document.getElementById('depositBtn').addEventListener('click', function () {

    // Calculate the deposit amount
    const depositInput = document.getElementById('depositInputAmount');
    const depositInputAmount = depositInput.value;

    const depositText = document.getElementById('depositNumber');
    const depositTextElement = depositText.innerText;

    const totalDeposit = parseFloat(depositInputAmount) + parseFloat(depositTextElement);

    depositText.innerText = totalDeposit;

    // Add deposit Amount in Total balance
    const totalAmount = document.getElementById('balanceAmount');
    const totalAmountValue = totalAmount.innerText;

    const finalBalance = parseFloat(depositInputAmount) + parseFloat(totalAmountValue);

    totalAmount.innerText = finalBalance;
    depositInput.value = '';

})

document.getElementById('withdrawBtn').addEventListener('click', function () {


    // Calculate the Withdraw amount
    const withdrawInput = document.getElementById('withdrawalAmount');
    const withdrawInputAmount = withdrawInput.value;

    const withdrawText = document.getElementById('withdrawText');
    const withdrawTextElement = withdrawText.innerText;

    const totalWithdraw = parseFloat(withdrawInputAmount) + parseFloat(withdrawTextElement);


    // Subtract withdraw Amount in Total balance
    const totalAmount = document.getElementById('balanceAmount');
    const totalAmountValue = totalAmount.innerText;

    if (withdrawInputAmount > totalAmountValue) {
        alert("Insufficient balance in your account!!");
        return;
    }

    const finalBalance = parseFloat(totalAmountValue) - parseFloat(withdrawInputAmount);

    withdrawText.innerText = totalWithdraw;
    withdrawInput.value = '';
    totalAmount.innerText = finalBalance;




})