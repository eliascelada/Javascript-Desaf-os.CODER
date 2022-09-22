let minutos = 00;
let segundos = 00;
let milisegundos = 00;

let milisegundosContador = document.getElementById('milisegundos')
let segundosContador = document.getElementById('segundos')
let minutosContador = document.getElementById('minutos')
let botonStart = document.getElementById('start')
let botonStop = document.getElementById('stop')
let botonReset = document.getElementById('reset')

let intervalos

function starTimer(){
    milisegundos++
    if (milisegundos <= 9){
        milisegundosContador.innerHTML = "0" + milisegundos
    }
    if (milisegundos > 9){
        milisegundosContador.innerHTML = milisegundos
    }
    if (milisegundos > 99){
        segundos++
        if (segundos <= 9){
            segundosContador.innerHTML = "0" + segundos
        }
        if(segundos > 9){
            segundosContador.innerHTML = segundos
            if (segundos >= 60){
                minutos++;    
                if (minutos <= 9){
                    minutosContador.innerHTML = "0" + minutos
                }
                if(minutos > 9){
                    minutosContador.innerHTML = minutos
                }
                segundos = 0
                segundosContador.innerHTML = "0" + segundos
            }
        }
        milisegundos = 0
        milisegundosContador.innerHTML = segundos
       
    }

    
        
}

botonStart.onclick = function(){
    intervalos = setInterval(starTimer, 10)
}

botonStop.onclick = function(){
    clearInterval(intervalos)
}

botonReset.onclick = function(){
    clearInterval(intervalos)
    milisegundos = "00"
    segundos = "00"
    minutos = "00"
    minutosContador.innerHTML = minutos
    segundosContador.innerHTML = segundos
    milisegundosContador.innerHTML = milisegundos
}