<template>
    <router-link to="/listarcli">ListarCli</router-link> |
    <router-link to="/Dashboard">Dashboard</router-link> |
    <router-link to="/crearcli">CrearCli</router-link>

    <div>
      <div class="card">
        <div class="card-header">Clientes</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>telefono</th>
                <th>email</th>
                <th>dirección</th>
                <th>Acciones</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="Cliente in Clientes" :key="Cliente.pkCliente">
                <td>{{ Cliente.pkCliente }}</td>
                <td>{{ Cliente.nombre }}</td>
                <td>{{ Cliente.apellido }}</td>
                <td>{{ Cliente.telefono }}</td>
                <td>{{ Cliente.email }}</td>
                <td>{{ Cliente.direccion }}</td>

                <td>  
                  <div class="btn-group" role="label" aria-label="">
                  |
                  <!-- <router-link
                    :to="{ name: 'editar', params: { id: Cliente.pkCliente } }"
                    class="btn btn-info"
                    >Editar</router-link
                  > -->
                  |<button
                    type="button"
                    v-on:click="editarcli(Cliente.pkCliente)"
                    class="btn btn-danger"
                  >
                    Editar</button
                  >| 
                    <!-- |<router-link :to="{name:'editar',param:{id:Cliente.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarCliente(Cliente.pkCliente)"
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
       Clientes: [],
     };
   },
   created: function () {
     this.consultarClientes();
   },
   methods: {
     consultarClientes() {
       axios.get("https://localhost:7241/Clientes").then((result) => {
         console.log(result.data);
         this.Clientes = result.data.result;
       });
     },

     editarcli(id) {
     console.log(id);
     this.$router.push("/editarcliente/" + id);
   },
 
     borrarCliente(id) {
       console.log(id);
       axios.delete("https://localhost:7241/Clientes/" + id) 
       window.location.href = "ListarCli";
     },
   },
 };
 </script>
  