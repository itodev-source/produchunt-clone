export default function validarCrearCuenta(valores) {
    let errores = {}

    // Validar el nombre de Usuario
    if(!valores.nombre) {
        errores.nombre = "El nombre es obligatorio";
    }

    // Validar empresa    
    if(!valores.empresa) {
        errores.empresa = "Nombre de empresa es obligatorio";
    }

    // Validar url
    if(!valores.url) {
        errores.url = "La url del producto es obligatoria";
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)){
        errores.url = "URL no valida"
    }

    // Validar descripcion
    if(!valores.descripcion) {
        errores.descripcion = "Agrega una descripcion de tu producto";
    }
    return errores;
 }