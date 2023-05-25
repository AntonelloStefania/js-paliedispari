let submit = document.getElementById('submit');
let return_box= document.querySelector('.return-box');
return_box.innerHTML='';
let nome;


function nameCheck(name_check){
nome_split = nome.split('');
nome_reverse = nome_split.reverse();
full_nome_reverse = nome_reverse.join('');

    if(nome===full_nome_reverse){
        return true
    } else{
        return false
    }
}   
                
submit.addEventListener('click', function(){
    nome = document.getElementById('name').value;
    nameCheck(nome)
        if(!isNaN(nome)){
            return_box.innerHTML = 'inserire una parola valida'
        } else if (nameCheck(nome)=== true){
            return_box.innerHTML = `la parola ${nome} è palindroma`
        } else {
            return_box.innerHTML = `la parola ${nome} non è palindroma`
        }
})
