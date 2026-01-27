//------------------------------------
//Estado global
export const store = {
    users : [],
    productos : [],
    user_data : null
}

//-----------------------------------
export class Producto{
    constructor(nombre,precio,cantidad){
        this.nombre = nombre,
        this.precio = precio,
        this.cantidad = cantidad
    }
}

export class Usuario{
    constructor(nombre,email,password){
        this.nombre = nombre,
        this.email = email,
        this.password = password,
        this.rol = "visitante"
    }
}

//----------------------------------
// Consumo de API JSON-Server

const API_URL = "http://localhost:3000";

//usuarios


export async function getUsuarios(){
    const response = await fetch(`${API_URL}/users`);
    const users = await response.json();

    return users}

export async function createUsuario(user) {

    const response = await fetch(`${API_URL}/users`, {
        method : "POST",
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify(user)
    })

    const nuevoUser = await response.json();
    store.users.push(nuevoUser)}

//--------------------------------------------

//productos


export async function getProductos(){
    const response = await fetch(`${API_URL}/productos`);

    if (!response.ok) {throw new Error("no fue posible obtener los productos")}
    const productos = await response.json();

    return productos}

export async function createProducto(producto) {

    const response = await fetch(`${API_URL}/productos`, {
        method : "POST",
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify(producto)
    })

    if (!response.ok) {throw new Error("no fue posible crear el producto")}

    const nuevoProducto = await response.json();
    store.productos.push(nuevoProducto)}

export async function updateProducto(id,productoModificado) {

    const response = await fetch(`${API_URL}/productos/${id}`, {
        method : "PUT",
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify(productoModificado)
    })

    if (!response.ok) {throw new Error("no fue posible actualizar el producto")}

    const nuevoProducto = await response.json();

    const index = store.productos.findIndex(producto => producto.id == id);
    store.productos[index] = nuevoProducto;}


export async function deleteProducto(id) {
    const response = await fetch(`${API_URL}/productos/${id}`, {
        method : "DELETE"
    })
    
    if (!response.ok) {throw new Error("no fue posible eliminar el producto")}

    eliminarStoreProducto(id)
    
}

function eliminarStoreProducto(id){
    store.productos = store.productos.filter( producto => producto.id != id)}

//-------------------------------------------------