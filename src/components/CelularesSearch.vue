<template>
    <div>
    <CelularesSearch @filtrarPorNombre="filtrarPorNombre($event)" @filtrarPorPrecio="filtrarPorPrecio($event)"
  @filtrarPorTipo="filtrarPorTipo($event)" @filtrarPorStock="filtrarPorStock($event)" 
  @refrescarBusqueda="refrescarBusqueda($event)" 
  :refreshBtn=this.refreshBtn></CelularesSearch>
        
    </div>
</template>

<script>
import CardCandidato from "./CardCandidato.vue";
import CandidatosSearchComponent from "./CandidatosSearch.vue";

export default {
  name: 'CandidatosComponent',
  props: {
    msg: String
  },
  components: {
    CardCandidato,
    CandidatosSearchComponent
  },

  data() {
    return {
      list: [],
      listFiltered: [],
      resetCBtn: false,
    }
  },
  methods: {
    async loadAPI() {
      return fetch("https://6350867b3e9fa1244e4813ff.mockapi.io/candidatos/v1/candidatos")
        .then((response) => response.json())
        .then((persona) => {
          this.list = persona;
          this.listFiltered = this.list;
        });
    },
    searchByName(nameS) {
      this.resetCBtn = true;

      nameS = nameS.toLowerCase();
      this.listFiltered = [];
      this.list.forEach(candidato => {
        if((candidato.name.toLowerCase()).startsWith(nameS, 0)){
          this.listFiltered.push(candidato)
        }

      });

    },

    searchBySurname(surnameS) {
      this.resetCBtn = true;

      surnameS = surnameS.toLowerCase();
      this.listFiltered = []

      this.list.forEach(candidato => {
        if((candidato.surname.toLowerCase()).startsWith(surnameS, 0)){
          this.listFiltered.push(candidato)
        }

      });
    },

    searchByAge(data) {
      this.resetCBtn = true;

      this.listFiltered = []
      this.list.forEach(candidato => {
        if(Number(candidato.age) >= data.y1 && Number(candidato.age) <= data.y2){
          this.listFiltered.push(candidato)
        }

      });
    },

    searchByFullTime(boolean) {
      this.resetCBtn = true;

      this.listFiltered = []
      this.list.forEach(candidato => {
        if(candidato.workingHours === boolean){
          this.listFiltered.push(candidato)
        }

      });
    },

    searchByMovility(boolean) {
      this.resetCBtn = true;

      this.listFiltered = []
      this.list.forEach(candidato => {
        if(candidato.movility=== boolean){
          this.listFiltered.push(candidato)
        }

      });
    },
    
    restartSearch(){
      this.listFiltered = this.list;
      this.resetCBtn = false;
    }

  }
  ,

  created() {
    this.loadAPI();
    
  },
}


</script>
  
 