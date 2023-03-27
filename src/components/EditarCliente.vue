<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Cliente</div>
        <div class="card-body">
          <form v-on:submit.prevent="actualizarRegistro">
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
                >Ingresa la nueva apellido</small
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
                >Ingresa la fecha del cambio</small
              >
            </div>


            <div class="form-group">
              <label for="">email:</label>
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
              <label for="">Direccion:</label>
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
        Cliente: {},
      };
    },
    created: function () {
      this.obtenerInformacionID();
    },
    methods: {
      obtenerInformacionID() {
        axios
          .get("https://localhost:7241/Clientes/" + this.$route.params.id)
          .then((result) => {
            console.log(result.data);
            this.Cliente = result.data;
          });
      },
      listar() {
        this.$router.push("/listarcli");
      },
      actualizarRegistro() {
        let datosEnviar = {
          nombre: this.Cliente.nombre,
          apellido: this.Cliente.apellido,
          telefono: this.Cliente.telefono,
          email: this.Cliente.email,
          direccion: this.Cliente.direccion
        };

        axios
          .put(
            "https://localhost:7241/Clientes/" + this.$route.params.id,
            datosEnviar
          )
          .then((result) => {
            console.log(result);
            this.$router.push("/listarcli");
          });
      },
    },
  };
</script>
  
