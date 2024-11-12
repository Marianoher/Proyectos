// saludo de bienvenida
alert("Bienvenidos a la calculadora de precio de su hacienda ");

// precios por categoría del mercado de cañuelas
const precios = {
    novillito: 2173,
    novillo: 2060,
    vaquilla: 2071,
    vaca: 1641
};

function calcularPrecio() {
    let deseaContinuar = true;

    while (deseaContinuar) {
        // mostrar categorías
        const categorias = Object.keys(precios);
        const categoriaElegida = prompt("Elija una categoría: " + categorias.join(", "));

        // validar la categoría
        if (!precios[categoriaElegida]) {
            alert("Categoría no válida. Por favor, elija una de: " + categorias.join(", "));
            continue;
        }

        // preguntar el peso del animal
        const peso = parseFloat(prompt("¿Cuánto pesa su animal en kg?"));

        // validar el peso
        if (peso <= 0) {
            alert("Por favor, ingrese un peso válido.");
            continue;
        }

        // calcular el precio
        const precioAnimal = precios[categoriaElegida] * peso;
        alert("El precio de su animal es: " + precioAnimal + " pesos.");

        // preguntar si desea realizar otra operación
        const respuesta = prompt("¿Desea realizar otra operación? (si/no)").toLowerCase();

        if (respuesta === "no") {
            alert("¡Lo esperamos la proxima!");
            deseaContinuar = false;
        } else if (respuesta !== "si") {
            alert("Por favor, elija entre 'si' o 'no'.");
        }
    }
}

// Iniciar el cálculo
calcularPrecio();