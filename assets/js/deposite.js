// deposite 
document.getElementById('btn-deposite').addEventListener('click', function(){

    const depositeField = document.getElementById('deposite-field')
    const priviousDepositeAmountString = depositeField.value;
    const priviousDepositeAmount = parseFloat(priviousDepositeAmountString);
   

    const depositeAmount = document.getElementById('deposite-amount')
    const newDepositeAmountString = depositeAmount.innerText;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    const currentDepositeAmount = priviousDepositeAmount + newDepositeAmount;

    depositeAmount.innerText = currentDepositeAmount;

    const totalAmount = document.getElementById('total-amount')
    const newToatlAmountString = totalAmount.innerText;
    const newToatlAmount = parseFloat(newToatlAmountString);
    const currentTotalAmount = priviousDepositeAmount + newToatlAmount;
    totalAmount.innerText = currentTotalAmount;
   
    
    depositeField.value = '';


});

// withdrow

document.getElementById('btn-withdrow').addEventListener('click', function(){
const withdrowField = document.getElementById('widthdrow-field');
const widthdrowAmountString = withdrowField.value;
const priviouswidthdrowAmount = parseFloat(widthdrowAmountString)


const withdrowAmount = document.getElementById('withdrow-amount')
const newWithdrowAmountString = withdrowAmount.innerText;
const newWithdrowAmount = parseFloat(newWithdrowAmountString);

const currentWithdrowAmount = priviouswidthdrowAmount + newWithdrowAmount;

withdrowAmount.innerText = currentWithdrowAmount;

const totalAmount = document.getElementById('total-amount')
const totalAmountString = totalAmount.innerText;
const newTotalAmount = parseFloat(totalAmountString);

const currentTotalAmount =   newTotalAmount -priviouswidthdrowAmount;
totalAmount.innerText = currentTotalAmount;

withdrowField.value = '';

});