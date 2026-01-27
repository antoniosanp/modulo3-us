import { store, iniciarSesion, Usuario, createUsuario } from "../store/store.js";


export function registerView(){
    const registerDiv = document.createElement("div");
    registerDiv.innerHTML = 
    `
    
    <form id="registerForm" action="">
        

        <input type="text" name="usernaname" id="userName" placeholder="nombre de usuario">
        <input type="text" name="email" id="email" placeholder="usuario@gmail.com">
        <input type="password" name="password" id="password" placeholder="*****">
        <button type="submit">registrarse</button>
        <a href="#/login"><button>Atrás</button>
        
    </form>
    

    `

    const form = registerDiv.querySelector("#registerForm");
    const name = registerDiv.querySelector("#userName")
    const email = registerDiv.querySelector("#email");
    const password = registerDiv.querySelector("#password");

    form.addEventListener("submit", async (e)=>{
        e.preventDefault();

        const newUser = new Usuario(name.value, email.value, password.value);
        createUsuario(newUser);

        location.hash = "#/login"
    })

    return registerDiv
}

