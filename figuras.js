
//codigo del cuadrado
console.group("cuadrados");//eñ group cirve para agrupar uno o varias lineas de codigo en especifico
console.log("hello world!");
const ladocuadrado=5;
console.log("los lados del cuadrado miden: "+ ladocuadrado +"cm");

const perimetrocuadrado=ladocuadrado*4;//el const es para declarar una variable que no se cambiara el valor
console.log("el perimetrocuadrado es: " + perimetrocuadrado +"cm");

const areacuadrado=ladocuadrado*ladocuadrado;
console.log("areacuadrado es: " + areacuadrado +"cm ^2");
console.groupEnd();
//codigo del triangulo
console.group("triangulo");
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;

const alturaTriangulo =5.5;

const perimertoTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
const areaTriangulo =(baseTriangulo*alturaTriangulo)/2;
console.log("los lados del triangulo miden: " + ladoTriangulo1 + "cm " + ladoTriangulo2 + "cm " + baseTriangulo +"cm" );
console.log("la altura del triangulo es de : " + alturaTriangulo);
console.log("el perimetro del tiangulo es:" + perimertoTriangulo);
console.log("el area del tiangulo es:" + areaTriangulo);



console.groupEnd();