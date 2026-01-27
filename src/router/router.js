import { loginView,   } from "../views/login.js";
import { registerView } from "../views/register.js";
import { store, cerrarSesion } from "../store/store.js";
import { homeView } from "../views/home.js";
import { navbar } from "../components/navbar.js";
import { notFoundView } from "../views/notFound.js";
import { app } from "../../app.js";

export function router(){

    //------------------------------------------------
    const hash = location.hash;
    app.innerHTML = "";

    if (!store.user_actual && hash !== "#/register") {location.hash = "#/login"}
    
    //-------------------------------

    switch (hash) {
        case "#/login":
            console.log("en login")
            app.appendChild(loginView());
            
            break;
        case "#/register":
            console.log("en registro")
            app.appendChild(registerView());
            
            break;

        case "#/home":
            console.log("en home");
            app.append(navbar(),homeView())
            break;

        case "#/logout":
            console.log("cerrando sesion");
            cerrarSesion();
            location.hash = ""
            break;
            
        default:
            console.log("vista no encontrada");
            app.append(navbar(), notFoundView())
            break;
    }


}