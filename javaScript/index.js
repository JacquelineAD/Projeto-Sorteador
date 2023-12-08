    
    function sortear(){
    //para pegar os valores dos inputs
    const inputEntre = Math.ceil(document.getElementById('numeroentre').value)
    const inputE = Math.floor(document.getElementById('numeroe').value)

    const resultado = Math.floor(Math.random() * ( inputE - inputEntre  + 1)) + inputEntre;
    
   document.getElementById('valorSorteado').innerHTML = 'O sorteado foi ' + resultado;
}
