// CÓDIGO DEL CUADRADO
const answerCua = Number(prompt("Cuanto mide un lado de tu cudrado"));
document.write(`El area de tu cuadrado es ${answerCua * answerCua}cm cudrados 
Y su perimetro es ${answerCua * 4}cm`)
// CÓDIGO DEL TRIÁNGULO
const datosTriangulo =(prompt("Ingresa la altura de tu triangulo y luego de un espacio la base?"));
let arrayDatosTriangulo = datosTriangulo.split(" ");
for (let dato of arrayDatosTriangulo) {
arrayDatosTriangulo.push(Number(arrayDatosTriangulo.shift()));
}
document.write(`
 El area de tu triángulo es ${(arrayDatosTriangulo[1] * arrayDatosTriangulo[0]) / 2}cm`)