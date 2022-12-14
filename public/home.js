function startShop() {
  loadProducts();
}
function loadProducts() {
  fetch('/productos', { method: 'GET', credentials: 'include' })
    .then((res) => res.json())
    .then((data) => {
      const listaDeProductos = document.querySelector('#lista-de-productos');
      if (data.length > 0) {
        data.reverse();
        for (const product of data) {
          const date = new Date(product.timestamp);
          listaDeProductos.innerHTML += `
                    <div class="col-sm-5">
                        <div class="card">
                            <img class="card-img-top" src="${
                              product.foto
                            }" alt="Foto del producto">
                            <div class="card-body">
                                <h5 class="card-title">${product.nombre}</h5>
                                <p class="card-text">${product.descripcion}</p>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Precio: </strong>$${
                                      product.precio
                                    }</li>
                                    <li class="list-group-item"><strong>Stock: </strong>${
                                      product.stock
                                    }</li>
                                </ul>
                                <button id="${product.id}" class="btn btn-primary" onclick="agregarAlCarrito('${
                                  product.id
                                }')" ${
            product.stock > 0 ? null : 'disabled'
          }>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    `;
        }
      } else {
        listaDeProductos.innerHTML =
          '<h4 class="sin-productos">No hay productos</h4h>';
      }
    })
    .catch((err) => alert(err.message));
}

function agregarAlCarrito(id) {
  const payload = { productos: [id]};
  fetch(`/carrito/productos`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      if ((res.status = 200)) {
        const btn = document.getElementById(id);
        btn.setAttribute('class', 'btn btn-success disabled');
        btn.setAttribute('disabled', 'true');
      } else {
        throw new Error(res.statusText);
      } 
    })
    .catch((err) => alert(err.message));
}

window.onload = startShop;