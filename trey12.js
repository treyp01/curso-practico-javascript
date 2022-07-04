function calcularpreciocondescuento(precio,descuento){

    const porcentajecondescuento=100-descuento;
    const preciocondescuento=(precio*porcentajecondescuento)/100;
    return preciocondescuento;
}
function onclickbuttonPriceDiscount(){
    const inputprice=document.getElementById("inputprice");
    const pricevalue=inputprice.value;

    const inputDiscount=document.getElementById("inputdiscount");  
    const discountvalue=inputDiscount.value;
    
    const precioConDescuento=calcularpreciocondescuento(pricevalue,discountvalue); 

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "el precio con descuento es de $" + precioConDescuento;
     
}