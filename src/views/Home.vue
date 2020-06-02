<template>
  <b-container fluid>
      <b-row>
        <b-col md="4" class="mb-3">
          <b-card
              header="Asientos"
              header-text-variant="white"
              header-tag="header"
              header-bg-variant="info">
            <formulario/>    
          </b-card>
        </b-col>
        <b-col md="7" class="tabla-container mb-3">
          <b-card
              header="Tabla de Asientos"
              header-text-variant="white"
              header-tag="header"
          header-bg-variant="dark">
            <b-card-body>
              <!-- <SimpleTable :form="form" /> -->
              <SimpleTable />
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
  </b-container>

</template>
<script>
// @ is an alias to /src
// import Asiento from '@/components/Asiento.vue'
import Formulario from '@/components/Formulario.vue'
import SimpleTable from '@/components/SimpleTable.vue'
export default {
  name: 'Home',
  data: function(){
    return {
      activos: [],
    }
  },
  mounted(){
    
  },
  methods:{
    quitarOption: function(id) {
      this.cuentas.map( x => {
        if( x.options){
          x.options.map(x => {
            if(x.value.id == id){
              x.disabled = true
            }
          })
        }
      })
    },
    reestablecerOption: function(id) {
      this.cuentas.map( x => {
        if( x.options){
          x.options.map(x => {
            if(x.value.id == id){
              x.disabled = false
            }
          })
        }
      })
    },
  },
  components: {
    // Asiento,
    Formulario,
    SimpleTable,
  }
}
</script>
<style lang="scss">
* {
  font-family:  Arial, Helvetica, sans-serif;
  font-size: 12pt;
}
.home{
  position:relative;
}
.tabla-container{ 
  min-height: 50vh !important;
}
</style>