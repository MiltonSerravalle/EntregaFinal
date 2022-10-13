class indumentaria {
    constructor(id, imagen, nombre, precio ){
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
}
}

let prendas = [];

const ropa1 = new indumentaria(1, "Remera Britney", 3000, "./recursos/Britney.jpg");
const ropa2 = new indumentaria(2, "Remera Pibes Chorros", 3000, "./recursos/Pibes.jpg");
const ropa3 = new indumentaria(3, "buzo Gorillaz", 4500, "./recursos/buzo2.jpg");

prendas.push(ropa1, ropa2, ropa3);

