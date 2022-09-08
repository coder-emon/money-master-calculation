function getAmmount(elementId) {
    const amountString = document.getElementById(elementId).value;
    if(isNaN(amountString) || amountString < 0) {
        alert('Please enter a valid numberr');
    }else{

        const amount = parseInt(amountString);
        return amount;
    }
}
const calculateBtn = document.getElementById('calculate');
const totalExpensesElement = document.getElementById('total_expenses');
const balanceELement = document.getElementById('balance');
const saveBtn = document.getElementById('save_btn');
const saveAmountElement = document.getElementById('save_amount');
const remainingBalanceElement = document.getElementById('remaining_balance');
calculateBtn.addEventListener('click', function () {
    const income = getAmmount('income');
    const food = getAmmount('food'); 
    const rent = getAmmount('rent');
    const clothes = getAmmount('clothes');
    const totalExpenses = food + rent + clothes;
    let balance;
    if(totalExpenses > income){
        alert('ইনকাম এর চেয়ে বেশি খরচ করতে পারবে নাহ')
    }else{

        balance = income - totalExpenses;
        totalExpensesElement.innerText = totalExpenses;
        balanceELement.innerText = balance;
    }
    // console.log('cliked calculate btn')
    // save button addEventListener
    saveBtn.addEventListener("click", function () {
        const save = getAmmount('save_percentage');
        if(save >100){
            alert('Percentage should not be over 100')
        }else{
            const savePercentage = save / 100;
            const saveAmount = income * savePercentage;
            if(saveAmount > balance ){
                alert("You can't save more than your balance")
            }else{
                
                const remainingBalance = balance - saveAmount;
                saveAmountElement.innerText = saveAmount;
                remainingBalanceElement.innerText = remainingBalance;
            }
        }
    })
})

