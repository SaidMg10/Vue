<template>
    <div>
      <div class="card">
        <div class="card-header">Usuarios</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Password</th>
                <th>FechaRegistro</th>    
                <th>Acciones</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="Usuario in Usuarios" :key="Usuario.pkusuario">
                <td>{{ Usuario.pkUsuario }}</td>
                <td>{{ Usuario.user }}</td>
                <td>{{ Usuario.password }}</td>
                <td>{{ Usuario.fechaRegistro }}</td>

                <td>  
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:Usuario.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarUsuario(Usuario.id)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        Usuarios: [],
      };
    },
    created: function () {
      this.consultarUsuarios();
    },
    methods: {
      consultarUsuarios() {
        axios.get("https://localhost:7241/Usuarios").then((result) => {
          console.log(result.data);
          this.Usuarios = result.data.result;
        });
      },
  
      borrarUsuario(id) {
        console.log(id);
  
        axios.delete("https://localhost:8080/Usuarios/borrar/" + id);
  
        window.location.href = "Listar";
      },
    },
  };
  </script>