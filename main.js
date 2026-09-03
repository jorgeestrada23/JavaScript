const botonCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

botonCalcular.addEventListener("click", () => {

    const producto = prompt("Ingrese el nombre del producto:");

    const precioTexto = prompt("Ingrese el precio del producto:");
    const cantidadTexto = prompt("Ingrese la cantidad:");

    // Conversión de String a número
    const precio = parseFloat(precioTexto);
    const cantidad = parseInt(cantidadTexto);

    // Cálculo matemático
    const total = precio * cantidad;

    // let porque este valor puede cambiar
    let mensaje = "";

    if (isNaN(precio) || isNaN(cantidad)) {
        mensaje = "Por favor, ingrese valores numéricos válidos.";

        alert(mensaje);
        console.log(mensaje);

        resultado.innerHTML = `<p>${mensaje}</p>`;
        return;
    }

    mensaje = `
        Producto: ${producto}
        Precio: $${precio.toFixed(2)}
        Cantidad: ${cantidad}
        Total: $${total.toFixed(2)}
    `;

    console.log("Producto:", producto);
    console.log("Precio:", precio);
    console.log("Cantidad:", cantidad);
    console.log("Total:", total);

    alert(`El total de la compra es: $${total.toFixed(2)}`);

    resultado.innerHTML = `
        <p><strong>Producto:</strong> ${producto}</p>
        <p><strong>Precio:</strong> $${precio.toFixed(2)}</p>
        <p><strong>Cantidad:</strong> ${cantidad}</p>
        <p><strong>Total:</strong> $${total.toFixed(2)}</p>
    `;
});
