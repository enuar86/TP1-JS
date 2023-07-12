// Ejercicio n° 1

function esParOImpar(number) {
  if (number % 2) {
    console.log("El número es impar");
  } else {
    console.log("El número es par");
  }
}

esParOImpar(5);

//Ejercicio n° 2

function esMayorOIgual(num1, num2) {
  if (num1 > num2) {
      console.log(`${num1} es mayor que ${num2}`);
  }
  else if(num2 > num1) {
      console.log(`${num2} es mayor que ${num1}`);
  }
  else{
      console.log("Los números son iguales")
  }
}

esMayorOIgual(40, 94);

// Ejercicio n°3

function esMultiploDe5 (num){
  if (num % 5 == 0) {
    console.log(`${num} Es es múltiplo de 5`);
  } else {
    console.log(`${num} No es múltiplo de 5`);
  }
};

esMultiploDe5(59);

// Ejercicio n° 4
function cuentaProgresiva(num) {
  for (let i = 0; i <= num; i++) {
      console.log(i);
  }
};

cuentaProgresiva(5)

// Ejercicio n° 5
function imprimirCantidadDePalabras(palabra, num) {
  for (let i = 0; i < number; i++) {
      console.log(palabra)
  }
};

imprimirCantidadDePalabras("Nucba", 4);

// 6 - Ejercicio n° 6

const valores = [1,2,3,4,5]

function recibirValores(array) {

    for (let i = 0 < of array.lengt; i++) {
        console.log(array [i]);
    }
}

recibirValores(valores)

// Ejercicio n°7

const numeros = [2,4,6,8,10,12,14,16,18,20]


function quitarUnValor(array) {
  for (let i = 0; i < array.length; i++) {
      if (i != 4) {
          console.log(array[i]);
      }
  }
}

quitarUnValor(numeros)



// Ejercicio n° 8

function multipilcarLosNumeros(array, number) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * number);      
  }
}

multipilcarLosNumeros([1,3,5,7], 2)