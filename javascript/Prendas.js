class indumentaria {
    constructor(id, imagen, nombre, precio ){
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
}
}

let prendas = [];

const ropaA = new indumentaria(1, "Remera Britney", 3000, "./recursos/Britney.jpg");
const ropaB = new indumentaria(2, "Remera Pibes Chorros", 3000, "./recursos/Pibes.jpg");
const ropaC = new indumentaria(3, "buzo Gorillaz", 4500, "./recursos/buzo2.jpg");

prendas.push(ropaA, ropaB, ropaC);

