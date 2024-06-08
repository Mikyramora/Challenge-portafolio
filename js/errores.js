export const customErrors = {
    maxLength: (value, maxSize) => value.length > parseInt(maxSize)
  }
  
  export const tiposDeError =[
      "valueMissing", 
      "typeMissmatch",
      "patternMissmatch",
      "tooShort",
      "customErrors",
  ];
  
  export const mensajes = {
      nombre: {
        valueMissing: "El campo nombre no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un nombre válido.",
        tooShort: "Por favor, ingrese un nombre válido.",
        customErrors: "Ha excedido el número de caracteres.",
      },
      email: {
        valueMissing: "El campo email no puede estar vacío.",
        typeMismatch: "Por favor, ingrese un email válido.",
        tooShort: "Por favor, ingrese un e-mail válido.",
      },
      input: {
        valueMissing: "El campo asunto no puede estar vacío.",
        patternMismatch: "El campo no tiene caracteres suficientes.",
        tooShort: "El campo no tiene caracteres suficientes.",
        customErrors: "Ha excedido el número de caracteres.",
      },
      mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío.",
        patternMismatch: "El campo no tiene caracteres suficientes.",
        tooShort: "El campo no tiene caracteres suficientes.",
        customErrors: "Ha excedido el número de caracteres.",
      },
      terminos: {
        valueMissing: "Debes aceptar los términos antes de continuar.",
      },
    };
    
  