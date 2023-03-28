import React from "react";
import { css } from "@emotion/core";
import Layout from "@/components/layouts/Layout";
import { Formulario, Campo, InputSubmit } from "@/components/ui/Formulario";

// validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";

const STATE_INICIAL = {
  nombre: "",
  email: "",
  password: "",
};

const crearCuenta = () => {
  const { valores, errores, submitForm, handleSubmit, handleChange } =
    useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  function crearCuenta() {
    console.log("creando cuenta!");
  }

  return (
    <div>
      <Layout>
        <h1
          css={css`
            text-align: center;
            margin-top: 5rem;
          `}
        >
          Crear Cuenta
        </h1>

        <Formulario>
          <Campo>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Tu Nombre"
              name="nombre"
            />
          </Campo>
          <Campo>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Tu Email" name="email" />
          </Campo>
          <Campo>
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Tu Password"
              name="password"
            />
          </Campo>
          <InputSubmit type="submit" value="Crear Cuenta" />
        </Formulario>
      </Layout>
    </div>
  );
};

export default crearCuenta;
