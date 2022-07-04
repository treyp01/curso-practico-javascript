const salariosCol= colombia.map(function(persona){
    return persona.salary;
});

const salariosColSorted= salariosCol.sort(function(salarioA,salarioB){return salarioA -salarioB;});


function esPar(numero){
    if (numero % 2==0){return true;}
    else{return false;}
}


function calcularMediaArimetica(lista){
    
    const sumalista=lista.reduce(//reduce resive nos ayuda para ir sumando cada uno de los elemtos que enviamos a la lista
        function(valorAcumulado=0,nuevoElemento){//cada valor nuevo se va a sumar al valor acumulado
            return valorAcumulado+nuevoElemento;
        }
    )
    const promedioLista=sumalista / lista.length; //el promedio es igual a sumalista dividido por el numero de elementos de la lista
    return promedioLista;//retornamos el promediolista
}



function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);

    if (esPar(lista.length)){
        const personaMitad1=lista[mitad -1];
        const personaMitad2=lista[mitad];

        const mediana= calcularMediaArimetica([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad; 
    }
}

const medianaGeneralCol=medianaSalarios(salariosCol);

//mediana del top 10        (P * % / 100)
const spliceStart= (salariosCol.length * 90) /100; //este codigo permite sacar el porcentaje de 10% del arrays salariosCol
const spliceCount= salariosCol.length - spliceStart;//este codigo perimite restar de la cantidad de salariocol el porcentaje splicestart
const salarioColTop10=salariosColSorted.splice(spliceStart, spliceCount); 
const medianaTop10Col=medianaSalarios(salarioColTop10);


console.log({medianaGeneralCol, medianaTop10Col});