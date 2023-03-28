import app from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
  }

  // Registrar un usuario

  async registrar(nombre, email, password) {
    const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    // crear y al mismo tiempo actualizar
    return await nuevoUsuario.user.updateProfile({
      displayName: nombre,
    });
  }

  // Iniciar sesion del usario

  async login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // Cierra sesion del usuario
  async cerrarSesion(){
    await this.auth.signOut();
  }
}

const firebase = new Firebase();
export default firebase;
