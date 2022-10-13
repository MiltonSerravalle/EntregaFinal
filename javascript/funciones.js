const productoRenderizado = (prdt) => {
    prdt.forEach(item => {
        let articulo = document.createElement("articulo");
        articulo.innerHTML = `
        <div class="card text-center m-3" style="width: 18rem;">
      <img src="${item.imagen}" class="card-img-top  mt-3" alt="${item.nombre}">
      <div class="card-body">
        <h5 class="card-title">${item.nombre}</h5>
        <h5>US$${item.precio}</h5>
        <button type="button" id="${"btnAgregarCarro" + item.id}" class="btn btn-primary">Agregar al carrito</button>
      </div>
    </div>
        `
    productos.append(articulo);
    let botonAgregarCarro = document.getElementById("btnAgregarCarro" + item.id);
    botonAgregarCarro.addEventListener("click", () => agregarACarro(item));
});
}




const agregarACarro = producto => {
    let productoStock = storageCarrito.find (item => item.id === producto.id);
    if (!productoStock){
        storageCarrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precioUno: producto.precio,
            cantidad: 1,
            subtotal: producto.precio,
            imagen: producto.imagen,
        })
    }
    else{
        productoStock.cantidad++;
        productoStock.subtotal += productoStock.precioUno;
    }
localStorage.setItem("storageCarrito", JSON.stringify(storageCarrito));
localStorage.setItem("storageNumeroCarro", JSON.stringify(parseint(cartNumber.innerHTML) +1 ));
cartNumber.innerHTML = JSON.parse(localStorage.getItem("storageNumeroCarro"));
cartRenderizado();
Toastify({
    text: "Agregado al carro",
    duration: 3000,
    close: true,
    gravity: "bottom",
    position: "left",
    stopOnFocus: true,
    style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () { }
  }).showToast();
}


/* CARRITO RENDER */
const cartRenderizado = () => {
    enCarro.innerHTML = "";
    storageCarrito.forEach(item => {
        let articulo = document.createElement("articulo");
        articulo.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4 d-flex">
          <img src="${item.imagen}" class="img-fluid align-self-center" alt="${item.marca} ${item.modelo}">
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <span>Precio: $${item.precioUno}</span>
            <div class="d-flex align-items-center my-1">
              <span>Cantidad: ${item.cantidad}</span>
              <div>
                <button id="${"btnRestar" + item.id}" class="btn btn-outline-danger ms-2 rounded-5">-</button>
                <button id="${"btnSumar" + item.id}" class="btn btn-outline-success rounded-5">+</button>
              </div>
            </div>
            <span class="fw-bold">Subtotal: US$${item.subtotal}</span>
          </div>
        </div>
        <div class="col-md-1">
          <button id="${"btnQuitar" + item.id}" class="mt-3 btn btn-warning p-1 rounded-5"><i class="bi bi-trash"></i></button>
        </div>
      </div>
    </div>
        `

    enCarro.append(articulo);
    let btnRestarCarro = document.getElementById("btnRestar" + item.id);
    let btnSumarCarro = document.getElementById("btnSumar" + item.id);
    let btnSacarCarro = document.getElementById("btnQuitar" + item.id);
    btnRestarCarro.addEventListener("click" , () => restarCarro(item));
    btnSumarCarro.addEventListener("click", () => sumarCarro(item));
    btnSacarCarro.addEventListener("click", () => sacarCarro(item));

    })

    if(parseInt(cartNumber.innerHTML) != 0){
      btnVaciarCarro.style.display = "inline";
    }
    let compraTotal = document.createElement("div");
    let result = StorageCarrito.reduce((acc, elem) => acc + elem.subtotal, 0);
    compraTotal.innerHTML = `<h5 class="fw-bold text-center"> Total= $${resultado} </h5>`
    enCarro.append(compraTotal);
    if(StorageCarrito.length === 0){
      enCarro.innerHTML = "<h3>Carrito Vacio</h3>";
      btnVaciarCarro.style.display = "none";
    }
}

/*VACIAR CARRO*/

const vaciarCarro = () => {
  Swal.fire({
    title: 'Desea vaciar su carrito?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, vaciarlo',
    cancelButtonText: 'Cancelar',
    allowOutsideClick: () => {
      const popup = Swal.getPopup()
      popup.classList.remove('swal2-show')
      setTimeout(() => {
        popup.classList.add('animate__animated', 'animate__headShake')
      })
      setTimeout(() => {
        popup.classList.remove('animate__animated', 'animate__headShake')
      }, 500)
      return false
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        '',
        'Su carrito ha sido vaciado',
        'success'
      )
      localStorage.removeItem("storageCarrito");
      localStorage.setItem("storageNumeroCarro", 0)
      enCarro.innerHTML = `<h3>Carro Vacio</h3>`
      storageCarrito = [];
      cartNumber.innerHTML = 0;
      VaciarCarro.style.display = "none";

}
})
}


/*BUSCA PRODUCTO*/

const buscarProducto = (prod) => {
  productos.innerHTML = "";
  let buscar = prendas.filter(ropa => (`${ropa.nombre}`).toLowerCase().includes(prod));
  productoRenderizado(buscar);
}


/*SUMAR CARRO*/

const sumarCarro = (producto) => {
  producto.cantidad ++;
  producto.subtotal += producto.precioUno;
  localStorage.setItem("storageNumeroCarro", JSON.stringify(parseInt(cartNumber.innerHTML) + 1));
  localStorage.setItem("storageCarrito", JSON.stringify(storageCarrito));
  cartNumber.innerHTML = JSON.parse(localStorage.getItem("storageNumeroCarro"));
  cartRenderizado();
}

/*RESTAR CARRO*/

const restarCarro = (producto) => {
  if(producto.cantidad > 1){
    producto.cantidad --;
    producto.subtotal -= producto.precioUno;
    localStorage.setItem("storageCarrito", JSON.stringify(storageCarrito));
    localStorage.setItem("storageNumeroCarro", JSON.stringify(parseint(cartNumber.innerHTML) -1));
    cartNumber.innerHTML = JSON.parse(localStorage.getItem("storageNumeroCarro"));
    cartRenderizado();
  }
}


/*SACAR CARRITO*/
const sacarCarro = (producto) => {
  let indicar = storageCarrito.indexOf(producto);
  localStorage.setItem("storageNumeroCarro", JSON.stringify(parseInt(cartNumber.innerHTML) - producto.cantidad));
  cartNumber.innerHTML = JSON.parse(localStorage.getItem("storageNumeroCarro"));
  storageCarrito.splice(indicar,1);
  localStorage.setItem("storageCarrito", JSON.stringify(storageCarrito));
}

