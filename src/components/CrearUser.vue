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
                v-model="Usuario.user"
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
                name="password"
                id="password"
                v-model="Usuario.password"
                aria-describedby="helpId"
                placeholder="Password"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la contraseña</small
              >
            </div>
            <div class="form-group">
              <label for="">FechaRegistro:</label>
              <input
                type="text"
                class="form-control"
                name="fecha"
                id="fecha"
                v-model="Usuario.fechaRegistro"
                aria-describedby="helpId"
                placeholder="fecha"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha de registro</small
              >
            </div>
            <div class="form-group">
              <label for="">No. Empleado:</label>
              <input
                type="text"
                class="form-control"
                name="nO.Emp"
                id="nO.Emp"
                v-model="Usuario.fkEmpleado"
                aria-describedby="helpId"
                placeholder="Numero de empleado"
              />             
              <small id="helpId" class="form-text" text-muted
                >Ingresa el número de Empleado</small
              >
            </div>
            <div class="form-group">
              <label for="">Rol:</label>
              <input
                type="text"
                class="form-control"
                name="rol"
                id="rol"
                v-model="Usuario.fkRol"
                aria-describedby="helpId"
                placeholder="Rol"
              />             
              <small id="helpId" class="form-text" text-muted
                >Ingresa el Rol</small
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
          user: this.Usuario.user,
          password: this.Usuario.password,
          fechaRegistro: this.Usuario.fechaRegistro,
          fkEmpleado: this.Usuario.fkEmpleado,
          fkRol: this.Usuario.fkRol
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