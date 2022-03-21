// CÓDIGO DEL CUADRADO
const answerCua = Number(prompt("Cuanto mide un lado de tu cudrado"));

var answerCuaArea = answerCua * answerCua;
var answerCuaPeri = answerCua * 4;

document.write("El area de tu cuadrado es " + 
    answerCuaArea + 
    " cm²" + 
    ".\nY su perimetro es " + 
    answerCuaPeri + 
    " cm");

// CÓDIGO DEL TRIÁNGULO
const datosTriangulo = prompt("Ingresa la altura de tu triangulo y luego de un espacio la base?");
let arrayDatosTriangulo = datosTriangulo.split(" ");

for (let dato of arrayDatosTriangulo) {
arrayDatosTriangulo.push(Number(arrayDatosTriangulo.shift()));
}

var areaTriangulo = (arrayDatosTriangulo[1] * arrayDatosTriangulo[0]) / 2;

document.write(".\nEl area de tu triángulo es " + areaTriangulo + " cm²")