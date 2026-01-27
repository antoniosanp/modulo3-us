export function navbar(){
    const navbar = document.createElement("nav");
    navbar.innerHTML =
    `
        <ul>
            <li> <a href="#/home"> Inicio </li>
            <li> <a href="#/productos"> Productos </li>
            <li> <a href="#/logout"> Cerrar sesion </li>
        </ul>

    `

    return navbar
}