let nombre = '';
let moto = '';
let serviciosSeleccionados = [];
let total = 0;

// Datos de usuario
const solicitarDatos = () => {
    nombre = prompt('Ingrese su nombre');
    moto = prompt('Ingrese la marca y modelo de su moto');
    alert('\nBienvenido a Fast Duck Motos, ' + nombre + '.\n' + '\nEstás por realizar el mantenimiento para tu ' + moto + '.');
    console.log(nombre, moto);
}

//Servicios
const servicios = [
    {id: 1, nombre: 'Service Completo', precio: 79000},
    {id: 2, nombre: 'Service Básico', precio: 39000},
    {id: 3, nombre: 'Cambio de Pastillas de Freno', precio: 14999},
    {id: 4, nombre: 'Cambio de Líquido Refrigerante', precio: 29000},
    {id: 5, nombre: 'Cambio de Filtro de Aire', precio: 14999},
];

//Seleccion de servicios
const seleccionServicios = () => {
    const listado = prompt('Para comenzar seleccione el número con la opción deseada:\n1) Service Completo - $79.000\n2) Service Básico - $39.000\n3) Cambio de pastillas de freno - $14.999\n4) Cambio de Líquido Refrigerante - $29.000\n5) Cambio de Filtro de Aire - $14.999\n\nS - Salir').toUpperCase();

    if (listado >= 1 && listado <= servicios.length) {
        const servicioSeleccionado = servicios[listado - 1];
        serviciosSeleccionados.push(servicioSeleccionado);
        total += servicioSeleccionado.precio;
        alert('Su service seleccionado fue ' + servicioSeleccionado.nombre);
        terminarCompra();
        console.log(servicioSeleccionado);
    } else if (listado === 'S') {
        const salir = confirm('¿Está seguro que desea salir?');
        if (salir) {
            mostrarTotal();
            alert('Gracias por visitarnos.');
        } else {
            seleccionServicios();
        }
    
    } else {
        alert('Opción inválida');
        seleccionServicios();
    }
};

// Lista de servicios
const listaServicios = () => {
    seleccionServicios();
};

//Terminar compra
const terminarCompra = () => {
    while (true) {
        const agregarOtroServicio = confirm('Desea agregar otro tipo de mantenimiento?');
        if (agregarOtroServicio){
            seleccionServicios();
        } else {
            mostrarTotal();
            break;
        }
    }
};

// Mostrar total
const mostrarTotal = () => {
    let serviciosSeleccionadosTexto = serviciosSeleccionados.map(servicio => servicio.nombre).join(', ');
    alert(nombre + '\nSeleccionaste: ' + serviciosSeleccionadosTexto + '\nEl total a pagar es: $' + total);
};

//Iniciar Saludo
solicitarDatos();
// Iniciar la selección de servicios
seleccionServicios();