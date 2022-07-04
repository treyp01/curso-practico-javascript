const lista=[2,3,4,5,6,5,7,4,8,9,2,3,5,4,6,8,9];
const lista1count={};
//vamos a transfor el arrays en un objeto, ademas vamos a crar un objeto por cada diferente numero de nuestro arrays
lista.map(
    function(elemento){
        if (lista1count[elemento]){//decimos si el elemento existe en nuestro objeto
            lista1count[elemento] += 1;//si existe lo vamos a sumar a nuestro objeto
        }else{//si no existe el elemento lo agregamos por primera ves
            lista1count[elemento]=1;
        }
        
    }
)

const lista1Array=Object.entries(lista1count).sort(//creamos otro arrays le ponemos el valor del objeto lista1count a nuestro arrays y despues le aplicamos el metodo sort para ordenar nuestro arrays
    function(valorAcum, nuevoValor){
        return valorAcum[1] - nuevoValor[1];//decimos que valor acum -nuevo valor para que me itere y me guarde los datos dependiendo si el nuevo valor es menor,igual o mayor para no hacer el if
        //asi funcionaria el metodo sort con el if
        //if (valorAcum > nuevoValor) return 1;
        //if (valorAcum == nuevoValor) return 0;
        //if (valorAcum < nuevoValor) return -1;
    }
);
//ya una ves organizado nuestro lista1Array le sacamos el valor mayor que en este caso seria el ultimo elemento de nuestro arrays
const moda=lista1Array[lista1Array.length-1];
