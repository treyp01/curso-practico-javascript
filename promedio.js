const lista1=[
    100,200,300
];
let sumalista1=0;
for(let i=0;i<lista1.length;i++){//se va a ejecucat mientras sea menor a la cantidad de lista1
    sumalista1=sumalista1+lista1[i]; //sumalista=sumalista pero le sumamos el valor que haya en la lista1 en la posicion pertinente al recorrido

}
const promedioLista1=sumalista1/lista1.length;
function calcularMediaArimetica(lista){
    //let sumalista=0;
    //for(let i=0;i<lista.length;i++){
    //    sumalista=sumalista+lista[i];
    //}

    const sumalista=lista.reduce(//reduce resive nos ayuda para ir sumando cada uno de los elemtos que enviamos a la lista
        function(valorAcumulado=0,nuevoElemento){//cada valor nuevo se va a sumar al valor acumulado
            return valorAcumulado+nuevoElemento;
        }
    )
    const promedioLista=sumalista / lista.length; //el promedio es igual a sumalista dividido por el numero de elementos de la lista
    return promedioLista;//retornamos el promediolista
}