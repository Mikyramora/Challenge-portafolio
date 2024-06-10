import {tiposDeError, mensajes, customErrors} from "./errores.js";

console.log(location.href);


const botonEnviar= document.querySelector("[data-boton-enviar]");

const camposDeFormulario = document.querySelectorAll ("[required]");
const formulario= document.querySelector("[data-formulario]");
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const listaRespuestas = {
        nombre:e.target.elements["nombre"].value, 
        email:e.target.elements["email"].value,
        input:e.target.elements["input"].value,
        mensaje:e.target.elements["mensaje"].value,
}
    localStorage.setItem("registro", JSON.stringify(listaRespuestas))

});

camposDeFormulario.forEach ((campo) => {

campo.addEventListener("blur", () => verificarCampo(campo));
campo.addEventListener("input", () => verificarFormulario());
campo.addEventListener("invalid", evento => evento.preventDefault());

});


function verificarCampo (campo){
    let mensaje = ""
    campo.setCustomValidity ("");
    
    if (customErrors.maxLength(campo.value, campo.getAttribute("size"))){
         mensaje = mensajes [campo.name] ["customErrors"]
         campo.setCustomValidity(mensaje)
     }

    tiposDeError.forEach(error=>{
        
        if (campo.validity[error]){
            mensaje = mensajes [campo.name] [error]
            console.log(mensaje);
        }
    })

    const mensajeError = campo.parentNode.querySelector(".mensaje-error")

    const validarInputCheck = campo.checkValidity()
    if(!validarInputCheck){
        mensajeError.textContent = mensaje
    }else{
        mensajeError.textContent = ""
    }
};

function verificarFormulario() {
    let formularioValido = true;
    camposDeFormulario.forEach((campo) => {
      if (!campo.checkValidity()) {
        formularioValido = false;
      }
    });
    botonEnviar.disabled = !formularioValido;
};

    botonEnviar.addEventListener("click", () =>{
        const recibirDatos= localStorage.getItem("registro");
        const convertirDatos= JSON.parse(recibirDatos);

        localStorage.setItem("registro", JSON.stringify(convertirDatos));

        window.location.href= "./index.html";
    })

