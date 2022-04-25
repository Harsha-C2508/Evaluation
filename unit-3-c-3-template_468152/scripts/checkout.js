// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var amount = JSON.parse(localStorage.getItem("amount"));

document.querySelector("confirm").addEventListener("submit",bookFun);
function bookFun(){
    event.preventDefault();
    var seats = document.querySelector("number_of_seats").ariaValueMax;
    if(Number(seats)*100>Number(amount)){
        alert("Insufficient Balance!")
    }
    else{
        alert("Booking successfull!")
    }
}
