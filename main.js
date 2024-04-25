let input = document.getElementById("input")
let input1 = document.getElementById("input1")
let sinal = document.getElementById("sinal")
input1.value = ""


function zero() {
  input.value += 0
  input1.value += 0

}
function ac() {
  input.value = ""
  input1.value = ""
  sinal.style.color = "rgb(104, 104, 104)"

}
function ce() {
  input.value = input.value.substring(0, input.value.length - 1)
  input1.value = input1.value.substring(0, input1.value.length - 1)
  
}
function porc() {
  input.value = input.value / 100
  input1.value = input.value
  sinal.innerHTML = "%"
  sinal.style.color = "black"

}
function um() {
  input.value += 1
  input1.value += 1

}
function dois() {
  input.value += 2

  input1.value += 2

}
function tres() {
  input.value += 3

  input1.value += 3

}
function quatro() {
  input.value += 4

  input1.value += 4
  a()
}
function cinco() {
  input.value += 5

  input1.value += 5

}
function seis() {
  input.value += 6

  input1.value += 6

}

function sete() {
  input.value += 7

  input1.value += 7

}
function oito() {
  input.value += 8

  input1.value += 8

}
function nove() {
  input.value += 9

  input1.value += 9

}
function mais() {
  input.value += "+"
  input1.value = ""
  sinal.innerHTML = "+"
  sinal.style.color = "black"

}

function menos() {
  input.value += "-"
  input1.value = ""
  sinal.innerHTML = "-"
  sinal.style.color = "black"

}

function vezes() {
  input.value += "*"
  input1.value = ""
  sinal.innerHTML = "&times;"
  sinal.style.color = "black"

}

function dividir() {
  input.value += "/"
  input1.value = ""
  sinal.innerHTML = "&divide;"
  sinal.style.color = "black"

}

function ponto() {
  input.value += "."
  input1.value += "."

}

function igual() {
  input.value = eval(input.value)
  input1.value = input.value
}
