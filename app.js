import { iniciarDatos, store } from "./src/store/store.js";
import { loginView } from "./src/views/login.js";
import { findUser } from "./src/store/store.js";


await iniciarDatos();


console.log(findUser("admin@gmail.com"))
const app = document.getElementById("app");


app.appendChild(loginView());