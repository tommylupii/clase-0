let nombre = "tomas"
let apellido = "lupi"
let precio = "0.99"
let series = [
  "vikings",
  "breaking bad",
  "peaky blinders",
  "brooklyn nine-nine",
  "flash",
  "naruto",
]
let pelicuals = [
  "interestelar",
  "el padrino",
  "la isla siniestra",
  "juego de gemelas",
  "toy story",
  "cars",
]

let diasDeLaSemana = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
]

function valorRandom(arreglo){
  return arreglo[Math.floor(Math.random() * arreglo.length)]
}

console.log( nombre + " " + apellido)
// console.log(series[Math.floor(Math.random() * series.length)])
// console.log(pelicuals[Math.floor(Math.random() * pelicuals.length)])
// console.log(diasDeLaSemana[Math.floor(Math.random() * diasDeLaSemana.length)])

console.log(valorRandom(diasDeLaSemana))
console.log(valorRandom(series))
console.log(valorRandom(pelicuals))