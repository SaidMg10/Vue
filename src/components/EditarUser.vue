<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Usuario</div>
        <div class="card-body">
          <form v-on:submit.prevent="actualizarRegistro">
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
                >Ingresa la nueva password</small
              >
            </div>
            <div class="form-group">
              <label for="">FechaRegistro:</label>
              <input
                type="text"
                class="form-control"
                name="fechaRegistro"
                id="fechaRegistro"
                v-model="Usuario.fechaRegistro"
                aria-describedby="helpId"
                placeholder="fechaRegistro"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha del cambio</small
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
              |<button type="submit" class="btn btn-danger">Modificar</button>|
              <!-- |<router-link :to="{ name: 'listar' }" class="btn btn-danger"
                >Cancelar</router-link
              >| -->
              <button type="button" v-on:click="listar" class="btn btn-danger">
                Cancelar</button
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
    created: function () {
      this.obtenerInformacionID();
    },
    methods: {
      obtenerInformacionID() {
        axios
          .get("https://localhost:7241/Usuarios/" + this.$route.params.id)
          .then((result) => {
            console.log(result.data);
            this.Usuario = result.data;
          });
      },
      listar() {
        this.$router.push("/listar");
      },
      actualizarRegistro() {
        let datosEnviar = {
          user: this.Usuario.user,
          password: this.Usuario.password,
          fechaRegistro: this.Usuario.fechaRegistro,
          fkEmpleado: this.Usuario.fkEmpleado,
          fkRol: this.Usuario.fkRol
        };

        axios
          .put(
            "https://localhost:7241/Usuarios/" + this.$route.params.id,
            datosEnviar
          )
          .then((result) => {
            console.log(result);
            this.$router.push("/listar");
          });
      },
    },
  };
</script>