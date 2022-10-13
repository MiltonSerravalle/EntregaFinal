/*LOCALSTORAGE*/
let storageCarroNumero = JSON.parse(localStorage.getItem("storageNumeroCarro"));
let storageCarrito = JSON.parse(localStorage.getItem("storageCarrito"))
/*CARRO*/
storageCarroNumero ? cartNumber.innerHTML = storageCarroNumero : cartNumber.innerHTML = 0;
cartRenderizado();
if(parseInt(cartNumber.innerHTML) === 0){
    btnVaciarCarro.style.display = "none";
}
/*ROPA RENDE*/
productoRenderizado(prendas)
/*VACIAR CARRO*/
btnVaciarCarro.addEventListener("click", vaciarCarro); 
/*BUSCA*/
btnBusca.addEventListener("click", () => buscarProducto (formBuscador.value.toLowerCase()));
formBuscador.addEventListener("keypress", (e) => {
    if (e.code === "Enter"){
        e.preventDefault ();
        buscarProducto(form.buscador.value.toLowerCase());
    }
});

