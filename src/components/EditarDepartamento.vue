<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Departamento</div>
        <div class="card-body">
          <form v-on:submit.prevent="actualizarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="Departamento.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del Departamento</small
              >
            </div>
           
            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-danger">Modificar</button>|
              <!-- |<router-link :to="{ name: 'listardep' }" class="btn btn-danger"
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
        Departamento: {},
      };
    },
    created: function () {
      this.obtenerInformacionID();
    },
    methods: {
      obtenerInformacionID() {
        axios
          .get("https://localhost:7241/Departamentos/" + this.$route.params.id)
          .then((result) => {
            console.log(result.data);
            this.Departamento = result.data;
          });
      },
      listar() {
        this.$router.push("/listardep");
      },
      actualizarRegistro() {
        let datosEnviar = {
          nombre: this.Departamento.nombre,
          
        };

        axios
          .put(
            "https://localhost:7241/Departamentos/" + this.$route.params.id,
            datosEnviar
          )
          .then((result) => {
            console.log(result);
            this.$router.push("/listardep");
          });
      },
    },
  };
</script>