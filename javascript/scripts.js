/*LOCALSTORAGE*/

let StorageCarroNumero = JSON.parse(localStorage.getItem("StorageNumeroCarro"));
let StorageCarro = JSON.parse(localStorage.getItem("storageCarrito"))

/*CARRO*/

StorageCarroNumero ? cartNumber.innerHTML = StorageNumeroCarro : cartNumber.innerHTML = 0;

cartRenderizado();

if(parseInt(cartNumber.innerHTML) ===0){
    btnVaciarCarro.style.display = "none";
}

/*ROPA RENDE*/
productoRenderizado()

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

