
//login form area
const login = document.getElementById('submit');
login.addEventListener('click', function(){
    const loginbtn = document.getElementById('loginform');
    loginbtn.style.display = "none";
    const dashboard = document.getElementById('dashboard').style.display = "block";
});


//Pionner Bank


function getInputId(inputId){
    
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const inputValueInt = parseFloat(inputValue);

    inputField.value = "";

    return inputValueInt;

}

function updateAmount(inputId,Amount){
    const amountField = document.getElementById(inputId);
    const amountText = amountField.innerText;
    const amountValue = parseFloat(amountText);

    amountField.innerText = amountValue + Amount;
}

function totalBalance(getAmount,addInt){
    const balanceField = document.getElementById('counrentBalance');
    const balanceTextValue = balanceField.innerText;
    const balanceValue = parseFloat(balanceTextValue);
    if(addInt == true){
        balanceField.innerText = balanceValue + getAmount;
    }else{
        balanceField.innerText = balanceValue - getAmount;
    }
    


}


document.getElementById('Depositbtn').addEventListener('click',function(){
    
    const despotamount =  getInputId('despotamount');

    if(despotamount > 0 ){
        updateAmount('counrentDeposit',despotamount);
        totalBalance(despotamount,true);
    }


});

document.getElementById('withdrawbtn').addEventListener('click',function(){
    
    const withdrawAmount =  getInputId('withdrawamount');
    const correntBalance = parseFloat(document.getElementById('counrentBalance').innerText);
    
    if(withdrawAmount > 0 && withdrawAmount <= correntBalance ){
        updateAmount('counrentWithdraw',withdrawAmount);
        totalBalance(withdrawAmount,false);
    }
     
});


