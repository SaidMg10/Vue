<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Usuario</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="Usuario.User"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del Usuario</small
              >
            </div>
            <div class="form-group">
              <label for="">Password:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                id="nombre"
                v-model="Usuario.Password"
                aria-describedby="helpId"
                placeholder="Proveedor"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del proveedor</small
              >
            </div>
            <div class="form-group">
              <label for="">FechaRegistro:</label>
              <input
                type="text"
                class="form-control"
                name="precio"
                id="precio"
                v-model="Usuario.FechaRegistro"
                aria-describedby="helpId"
                placeholder="Precio"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el precio del Usuario</small
              >
            </div>
  
            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success">Agregar</button>|
              |<router-link :to="{ name: 'listar' }" class="btn btn-danger"
                >Cancelar</router-link
              >|
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        Usuario: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.Usuario);
  
        var datosEnviar = {
          name: this.Usuario.User,
          proveedor: this.Usuario.Password,
          precio: this.Usuario.FechaRegistro,
        };
  
        axios
          .post("https://localhost:7241/Usuarios", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "Listar";
          });
      },
    },
  };
  </script>