// Store the wallet amount to your local storage with key "amount".
var wallet = JSON.parse(localStorage.getItem("amount"))|| [];
function addValnet(){
    var total = wallet.reduce(function(sum,elem,index,arr){
        return sum+Number(elem.amount);
    },0);

    var inputAmount = document.getElementById("amount").value;
   walletObj={
       amount:inputAmount
   }
   
   wallet.push(walletObj);

   localStorage.setItem("amount",JSON.stringify(wallet));
} 