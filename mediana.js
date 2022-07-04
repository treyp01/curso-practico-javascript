function calcularMediaArimetica(lista){
    
    const sumalista=lista.reduce(//reduce resive nos ayuda para ir sumando cada uno de los elemtos que enviamos a la lista
        function(valorAcumulado=0,nuevoElemento){//cada valor nuevo se va a sumar al valor acumulado
            return valorAcumulado+nuevoElemento;
        }
    )
    const promedioLista=sumalista / lista.length; //el promedio es igual a sumalista dividido por el numero de elementos de la lista
    return promedioLista;//retornamos el promediolista
}
const lista1=[
    600,700,100,200,300,500
];
lista1.sort(function(a,b){return a - b}); //esta linea de codigo nos ayuda a ordemarlo de menor a mayor con el metodo sort
const mitadLista1= parseInt (lista1.length/2);

function esPar(num){
    if (num % 2 === 0){
        return true;
    }else{
        return false;
    }
}
let mediana;
if (esPar(lista1.length)){//en caso de que la lista sea un numero par debemos coger los dos elementos de la mitad
    const elemento1=lista1[mitadLista1-1];//primer elemento es la mitad lista1
    const elemento2=lista1[mitadLista1];//segundo elemento es mitad lista1 y le sumamos la siguiente posicion

    const promedioElemento1y2=calcularMediaArimetica([elemento1,elemento2]);
    mediana=promedioElemento1y2;
}else{
    mediana=lista1[mitadLista1]
}
