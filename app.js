
let numeroSecreto=0;
let intentos =0;
let listaNumerosSorteados =[];
let numeroMaximo= 10;
function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1',"juego del Número Secreto");
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
}


function intentoDeUsuario(){
    verificarIntento();
}
function verificarIntento(){
    let numeroDeUsuario =  parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario=== numeroSecreto){
        asignarTextoElemento('p',`ACERTASTE EL NÚMERO en:  ${intentos} ${(intentos===1 ?'vez' :'Veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');

        }else{
            asignarTextoElemento('p', 'El número secreto es mayor ')
        }
        intentos ++;
        limpiarCaja();
    }

    return;

}
function limpiarCaja(){
   document.querySelector('#valorUsuario').value="";

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el número generado está incluido en la lista 
    console.log(numeroGenerado);
     console.log(listaNumerosSorteados);
     //si ya sorteamos todos los números 
     if(listaNumerosSorteados.length== numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles')
        document.querySelector('#intentar').setAttribute('disabled',true);
     }else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return  generarNumeroSecreto();
          }else{
              listaNumerosSorteados.push(numeroGenerado);
              return numeroGenerado;
          }
     }
  


}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);

}
condicionesIniciales();