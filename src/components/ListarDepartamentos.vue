<template>
    <router-link to="/listardep">ListarDep</router-link> |
    <router-link to="/Dashboard">Dashboard</router-link> |
    <router-link to="/creardep">Crear</router-link>

    <div>
      <div class="card">
        <div class="card-header">Departamento</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Acciones</th>

                
              </tr>
            </thead>
            <tbody>
              <tr v-for="Departamento in Departamentos" :key="Departamento.pkDepartamento">
                <td>{{ Departamento.pkDepartamento }}</td>
                <td>{{ Departamento.nombre }}</td>


                <td>  
                  <div class="btn-group" role="label" aria-label="">
                  |
                  <!-- <router-link
                    :to="{ name: 'editar', params: { id: Departamento.pkDepartamento } }"
                    class="btn btn-info"
                    >Editar</router-link
                  > -->
                  |<button
                    type="button"
                    v-on:click="editar(Departamento.pkDepartamento)"
                    class="btn btn-danger"
                  >
                    Editar</button
                  >| 
                    <!-- |<router-link :to="{name:'editar',param:{id:Departamento.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarDepartamentos(Departamento.pkDepartamento)"
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
        Departamentos: [],
      };
    },
    created: function () {
      this.consultarDepartamentos();
    },
    methods: {
      consultarDepartamentos() {
        axios.get("https://localhost:7241/Departamentos").then((result) => {
          console.log(result.data);
          this.Departamentos = result.data.result;
        });
      },

      editar(id) {
      console.log(id);
      this.$router.push("/editardep/" + id);
    },
  
      borrarDepartamentos(id) {
        console.log(id);
        axios.delete("https://localhost:7241/Departamentos/" + id) 
        window.location.href = "ListarDep";
      },
    },
  };
  </script>