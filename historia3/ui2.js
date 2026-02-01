// import CRUD

import { Inventario, Producto } from "./main.js"


// DOM Elements
const inventarioDiv = document.createElement("div");
const inventarioInput = document.createElement("input");
const inventarioPrecioInput = document.createElement("input");
const inventarioBtn = document.createElement("button");

inventarioDiv.classList.add("inventarioDiv");
inventarioInput.classList.add("inventarioInput");
inventarioPrecioInput.classList.add("inventarioInput");
inventarioBtn.classList.add("inventarioBtn");

inventarioInput.placeholder = "producto";
inventarioPrecioInput.type = "number";
inventarioPrecioInput.placeholder = "precio"
inventarioBtn.textContent = "Agregar"

document.body.appendChild(inventarioInput);
document.body.appendChild(inventarioPrecioInput);
document.body.appendChild(inventarioBtn);

document.body.appendChild(inventarioDiv);


//-------------------------------------------------------------------
// Producto Template

const productoTemplate = document.createElement("div"); productoTemplate.classList.add("productoTemplate")
const spanTemplate = document.createElement("span"); spanTemplate.classList.add("nombreProducto");
const spanPrecioTemplate = document.createElement("span"); spanPrecioTemplate.classList.add("precioProducto")
const btnEliminarTemplate = document.createElement("button"); btnEliminarTemplate.textContent = "eliminar"
const btnModificarTemplate = document.createElement("button"); btnModificarTemplate.textContent = "modificar"
btnModificarTemplate.classList.add("btnModificar")

productoTemplate.appendChild(spanTemplate); 
productoTemplate.appendChild(spanPrecioTemplate); 
productoTemplate.appendChild(btnEliminarTemplate);
productoTemplate.appendChild(btnModificarTemplate);

//------------------------------------------------------------------
// formulario modificar

const modificarDiv = document.createElement("div"); modificarDiv.classList.add("modificarDiv")
const modificarNombreInput = document.createElement("input"); modificarNombreInput.classList.add("modificarNombreInput");
const modificarPrecioInput = document.createElement("input"); modificarPrecioInput.classList.add("modificarPrecioInput");
modificarPrecioInput.type = "number"; modificarPrecioInput.placeholder = "nuevo precio"
modificarNombreInput.placeholder = "nuevo nombre"

const modificarAceptarBtn = document.createElement("button");
modificarAceptarBtn.textContent = "aceptar Cambios"

modificarDiv.appendChild(modificarNombreInput)
modificarDiv.appendChild(modificarPrecioInput)
modificarDiv.appendChild(modificarAceptarBtn)

function cerrarClickAfuera(elemento) {
    function handler(e) {
        if (!elemento.contains(e.target)) {
            elemento.remove();
            document.removeEventListener("click", handler);
        }
    }

    // delay para evitar que el click que abre lo cierre
    setTimeout(() => {
        document.addEventListener("click", handler);
    });
}



//------------------------------------------------------------------
// Inventario

const inventario = new Inventario()

//------------------------------------------------------------------
// funciones addEventListener

function btnEliminarProductoListener(btn,newProductoUI,newProducto){
    btn.addEventListener("click", ()=>{
            inventario.deleteProductoById(newProducto.id);
            newProductoUI.remove();
        })

    }

function btnModificarProductoListener(btn,newProducto,text,precioText){
    btn.addEventListener("click", ()=>{
            const formularioModificar = modificarDiv.cloneNode(true);
            const nombreModificarInput = formularioModificar.querySelector(".modificarNombreInput");
            const precioModificarInput = formularioModificar.querySelector(".modificarPrecioInput");
            const aceptarModificarBtn = formularioModificar.querySelector("button")
            aceptarModificarBtn.addEventListener("click", ()=>{
                if (precioModificarInput.value >= 0 || Number.isNaN(precioModificarInput.value) ){
                
                inventario.updateProductById(newProducto.id, {nombre : nombreModificarInput.value, precio : precioModificarInput.value})
                }


                text.textContent = newProducto.nombre;
                precioText.textContent = newProducto.precio;
                formularioModificar.remove();


            })
            cerrarClickAfuera(formularioModificar);
            document.body.appendChild(formularioModificar)
        })
    }
//------------------------------------------------------------------
//render

function render(newProducto){
    const newProductoUI = productoTemplate.cloneNode(true);
    newProductoUI.id = newProducto.id;
        const text = newProductoUI.querySelector(".nombreProducto");
        const precio = newProductoUI.querySelector(".precioProducto")
        const btnEliminarProducto = newProductoUI.querySelector("button");
        const btnModificarProducto = newProductoUI.querySelector(".btnModificar")

        text.textContent = newProducto.nombre;
        precio.textContent = newProducto.precio;

    btnEliminarProductoListener(btnEliminarProducto,newProductoUI,newProducto);
    btnModificarProductoListener(btnModificarProducto,newProducto,text,precio);

    inventarioDiv.appendChild(newProductoUI);

    inventarioInput.value = "";
    inventarioPrecioInput.value = "";
    inventarioPrecioInput.placeholder = "precio"

    }

//--------------------------------------------------------------
// renderAllAux(producto)
function renderAllAux([id, producto]) {
    const newProductoUI = productoTemplate.cloneNode(true);
    newProductoUI.id = producto.id;
        const text = newProductoUI.querySelector(".nombreProducto");
        const precio = newProductoUI.querySelector(".precioProducto")
        const btnEliminarProducto = newProductoUI.querySelector("button");
        const btnModificarProducto = newProductoUI.querySelector(".btnModificar")

        text.textContent = producto.nombre;
        precio.textContent = producto.precio;

    btnEliminarProductoListener(btnEliminarProducto,newProductoUI,producto);
    btnModificarProductoListener(btnModificarProducto,producto,text,precio);

    inventarioDiv.appendChild(newProductoUI);


    }



//-------------------------------------------------------------
function renderAll(){
    
    for ( let producto of inventario.productos){
        renderAllAux(producto)
    }
}

//---------------------------------------------------------

inventarioBtn.addEventListener("click",()=>{
    if (inventarioInput.value.trim() === "" || inventarioPrecioInput.value <= 0) {return};
        const newProducto = new Producto(inventarioInput.value, inventarioPrecioInput.value);
    
    if (inventario.addProducto(newProducto)){
        render(newProducto)
    }

})

renderAll()