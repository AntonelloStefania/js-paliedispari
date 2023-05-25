let submit = document.getElementById('submit');
let return_box = document.querySelector('.return-box');
return_box.innerHTML='';

//funzione numeri casuali
function pariDispari(max, min){
   return Math.floor(Math.random()*(max - min + 1) + min)
}

//funzione di controllo pari/dispari
function rest(chance){
    if(chance % 2 == 0){
        return true
    } else {
        return false
    }
    
}

//funzione di controllo valore scommesso
function betpoint(bet_value){
    if(bet_value == 0){
        return true
    } else{
        return false
    }
}


//attivazione bottone
submit.addEventListener('click', function(){
    //generazione del numero casuale
    for(i=0; i<1; i++){
        let pcNumber = pariDispari (1 , 5);
        
        //recupero valori necessari
        let userchoice = parseInt(document.getElementById('num1-5').value);
        let bet = document.getElementById('bet');
        let bet_value = bet.value;
        let sumPcPlayer= userchoice + pcNumber;
        
        if (userchoice < 1 || userchoice >5 || isNaN(userchoice)){
            alert('inserisci un valore tra 1-5')
        } else {
            //ciclo controllo dei valori
            bet_value = betpoint(bet_value);
            
            //ciclo finale
            let sumResult = rest(sumPcPlayer);
            
            if (bet_value && sumResult){
                return_box.innerHTML = `hai scelto pari ed il risultato è...PARI , HAI VINTO!!! `
            } else if (bet_value && sumResult === false){
                return_box.innerHTML =`hai scelto pari ed il risultato è...DISPARI, VINCE IL TUO AVVERSARIO`
            } else if (bet_value === false && sumResult ){
                return_box.innerHTML =`hai scelto dispari ed è uscito...PARI, VINCE IL TUO AVVERSARIO`
            } else if(bet_value === false && sumResult ===false){
                return_box.innerHTML =`hai scelto dispari ed è uscito...DISPARI, HAI VINTO!!!`
            } 
        }
    }
    
})