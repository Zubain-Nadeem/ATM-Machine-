let userPin = document.getElementById('user-pin');
let pinMessage = document.querySelectorAll(".pin-message")[0];
let pinSection = document.querySelectorAll('.pin-section')[0];
let menuSection = document.querySelectorAll('.menu-section')[0];
let menuMessage = document.getElementById("message");
menuSection.style.display = "none"

let correctPin = "1234";
let blance = 1000;
let isAuthenticated = false;


function checkPin () {

    if (userPin.value === correctPin){
        isAuthenticated = true;
        pinMessage.innerHTML = "Correct Pin"
        menuSection.style.display = "block"
        pinSection.style.display = "none"

    }
    else{
        pinMessage.innerHTML = "Incorrect Pin"
    }
    userPin.value = ""
}

function  showBlance() {
    if (isAuthenticated){
        menuMessage.innerHTML = `Your Current Blance is ${blance} `
    }
}

function depositeAmount() {
    if(!isAuthenticated) return ;
    let ammount = parseFloat(document.getElementById("deposite-input").value);
    
    if (isNaN(ammount) || ammount <= 0){
        menuMessage.innerHTML = `Enter a Valid Deposite Ammount`
    }
    else{
        blance += ammount
        menuMessage.innerHTML = `${ammount} deposite susccessfully , Your new blance is ${blance}`
    }
    
}


function withdrawMoney(){
    if(!isAuthenticated) return;
    let withdrawAmmount = parseFloat(document.getElementById("withdraw-input").value);

    if(isNaN(withdrawAmmount) || withdrawAmmount <= 0){
        menuMessage.innerHTML =  `Enter a valid Withdraw Ammount`
    }
    else if(withdrawAmmount > blance){
        menuMessage.innerHTML = `Insufficient Balance`
    }
    else{
        blance -+ withdrawAmmount
        menuMessage.innerHTML = ` ${withdrawAmmount} Withdraw Susccessfully`
    }
}

function exitAtm(){
    alert(`Thank You for using ATM`)
    location.reload()
}