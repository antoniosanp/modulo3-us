import { store } from "../store/store";
export function productosView(){

    const productosView = document.createElement("div");
    productosView.innerHTML =

    `
        <h1> soy la lista de productos </h1>

        <div id = "contenedorProductos>
        </div>
    
    `

    const div = productosView.querySelector("#contenedorProductos")
    return productosView


}