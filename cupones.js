function calcularpreciocondescuento (precio,descuento){
    const porcentajecondescuento=100-descuento;
    const preciocondescuento=(precio*porcentajecondescuento)/100;
    return preciocondescuento;
}
function onclickbuttonPriceCupon(){
    const inputprice=document.getElementById("inputprice");
    const pricevalue=inputprice.value;

    const inputcupon=document.getElementById("inputcupon");
    const cuponvalue=inputcupon.value;
    const cupons=["hulk","naruto","batman"]
    let descuento;
    switch(cuponvalue){
        case cupons[0]:
            descuento=15;
        break
        case cupons[1]:
            descuento=30;
        break
        case cupons[2]:
            descuento=25;
        break
    }

    const precioConDescuento=calcularpreciocondescuento(pricevalue,descuento);

    const ResultP=document.getElementById("ResultP");
    ResultP.innerText=""+precioConDescuento;
}