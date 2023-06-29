
const interval = setInterval(()=>{
    let hora = new Date()
    let horario = hora.getHours()
    let minutos = hora.getMinutes()
    if (minutos<=9){
        let horas = document.querySelector("p#horario").innerHTML = `${horario}:0${minutos}`
    } else{
        let horas = document.querySelector("p#horario").innerHTML = `${horario}:${minutos}`
    }
},1000)

var igual = document.querySelector("button#igual")
igual.addEventListener('click', mostrarResultado)

let resume = document.querySelector("p#resumoConta")
function adicionar(tecla){
    resume.append(tecla)
}

function mostrarResultado(){
    var equacao = resume.innerHTML
    if (equacao){
        try {
            let resultado = document.querySelector("p#resultado")
            if (eval(equacao) == parseInt(eval(equacao))) {
                resultado.innerHTML = eval(equacao)
            } if (eval(equacao) == eval(equacao).toFixed(1)){
                resultado.innerHTML = eval(equacao).toPrecision(1)
            } if(eval(equacao) == eval(equacao).toFixed(2)){
                resultado.innerHTML = eval(equacao).toPrecision(2)
            } else {
                resultado.innerHTML = eval(equacao).toPrecision(6)
            }
        } catch {
            resultado.innerHTML = "error"
        }
    }
}

var c = document.querySelector("button#C")
c.addEventListener('click', zerarCalculadora)
function zerarCalculadora(){
    let resultado = document.querySelector("p#resultado")
    resultado.innerHTML = "0"
    resume.innerHTML = ""
}