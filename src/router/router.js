import { loginView,   } from "../views/login.js";
import { registerView } from "../views/register.js";
import { store } from "../store/store.js";
import { app } from "../../app.js";

export function router(){

    //------------------------------------------------
    const hash = location.hash;
    app.innerHTML = "";

    if (!store.user_actual && hash !== "#/login") {location.hash = "#/login"}
    
    //-------------------------------

    switch (hash) {
        case "#/login":
            app.appendChild(loginView());
            
            break;
        case "#/register":

            app.appendChild(registerView());
            break;
            
        default:
            break;
    }


}