import { iniciarDatos, store } from "./src/store/store.js";
import { loginView } from "./src/views/login.js";
import { findUser } from "./src/store/store.js";
import { router } from "./src/router/router.js";


await iniciarDatos();



export const app = document.getElementById("app");


app.appendChild(loginView());
console.log("hola")

router();
window.addEventListener("hashchange", router);