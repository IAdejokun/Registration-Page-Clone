let numberOfTickets = document.querySelector('#numberOfTickets');

let valueOfTickets = Number(numberOfTickets.innerHTML);

let earlyBird = document.querySelector('#earlyBirdPrice');

let earlyBirdFee = Number(earlyBird.innerHTML)



let subtract = () => {
    if (valueOfTickets < 2) {
        numberOfTickets.innerHTML = 1; 
        earlyBird.innerHTML = valueOfTickets * earlyBirdFee;
    }else{
        valueOfTickets -= 1;
        numberOfTickets.innerHTML = valueOfTickets;
        earlyBird.innerHTML = valueOfTickets * earlyBirdFee;
    }
}

let add = () => {
        valueOfTickets += 1;
        numberOfTickets.innerHTML = valueOfTickets;
        earlyBird.innerHTML = valueOfTickets * earlyBirdFee;
}

