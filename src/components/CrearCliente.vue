<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Cliente</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="Cliente.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del Cliente</small
              >
            </div>
            <div class="form-group">
              <label for="">Apellido:</label>
              <input
                type="text"
                class="form-control"
                name="apellido"
                id="apellido"
                v-model="Cliente.apellido"
                aria-describedby="helpId"
                placeholder="apellido"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la contraseña</small
              >
            </div>
            <div class="form-group">
              <label for="">telefono:</label>
              <input
                type="text"
                class="form-control"
                name="telefono"
                id="telefono"
                v-model="Cliente.telefono"
                aria-describedby="helpId"
                placeholder="telefono"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha de registro</small
              >
            </div>
            <div class="form-group">
              <label for="">Email:</label>
              <input
                type="text"
                class="form-control"
                name="email"
                id="email"
                v-model="Cliente.email"
                aria-describedby="helpId"
                placeholder="email"
              />             
              <small id="helpId" class="form-text" text-muted
                >Ingresa el número de Empleado</small
              >
            </div>
            <div class="form-group">
              <label for="">Dirección:</label>
              <input
                type="text"
                class="form-control"
                name="direccion"
                id="direccion"
                v-model="Cliente.direccion"
                aria-describedby="helpId"
                placeholder="direccion"
              />             
              <small id="helpId" class="form-text" text-muted
                >Ingresa el Rol</small
              >
            </div>
            
  
            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success">Agregar</button>|
              |<router-link :to="{ name: 'listarcli' }" class="btn btn-danger"
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
        Cliente: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.Cliente);
  
        var datosEnviar = {
          nombre: this.Cliente.nombre,
          apellido: this.Cliente.apellido,
          telefono: this.Cliente.telefono,
          email: this.Cliente.email,
          direccion: this.Cliente.direccion
        };
  
        axios
          .post("https://localhost:7241/Clientes", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "ListarCli";
          });
      },
    },
  };</script>
 
  
