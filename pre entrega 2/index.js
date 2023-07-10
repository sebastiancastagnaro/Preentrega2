// Variables necesarias
let datos = []; // Array para almacenar los datos
let resultado = 0; // Variable para almacenar el resultado del proceso

// Funciones esenciales del proceso a simular
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

// Objeto de ejemplo
let objeto = {
  nombre: "Ejemplo",
  edad: 25,
  ciudad: "Ciudad Ejemplo"
};

// Array de ejemplo
let personas = [
  { nombre: "John", edad: 30 },
  { nombre: "Paul", edad: 29 },
  { nombre: "George", edad: 26 },
  { nombre: "Ringo", edad: 32 }
];

// Método de búsqueda en el array
function buscarPersona(nombre) {
  return personas.find(persona => persona.nombre === nombre);
}

// Método de filtrado en el array
function filtrarPersonas(edadMinima) {
  return personas.filter(persona => persona.edad >= edadMinima);
}

// Función para realizar el proceso y mostrar el resultado
function realizarProceso() {
  // Simulación de ingreso de datos
  let dato1 = parseFloat(prompt("Ingresa el primer dato:"));
  let dato2 = parseFloat(prompt("Ingresa el segundo dato:"));
  
  // Realizar operaciones con los datos
  resultado = sumar(dato1, dato2);
  
  // Almacenar los datos y el resultado en el array
  datos.push(dato1, dato2, resultado);
  
  // Mostrar el resultado en el HTML
  let resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "El resultado del proceso es: " + resultado;
}
