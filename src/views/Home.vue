<template>
  <div class="home">
    <!-- <div class="form-container"> -->
      <b-row>
        <b-col md="4" class="form-container m-4 p-4">
          <formulario />    
        </b-col>
      </b-row>
      <!-- <formulario /> -->
    <!-- </div> -->
    <!-- <Asiento :cuentas="cuentas" @quitarOption="quitarOption" @reestablecerOption="reestablecerOption"/> -->
  </div>
</template>
<script>
// @ is an alias to /src
// import Asiento from '@/components/Asiento.vue'
import Formulario from '@/components/Formulario.vue'
export default {
  name: 'Home',
  data: function(){
    return {
      activos: [],
    }
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
.form-container{
  border-radius: 10px;
  border: solid 2px #f3f3f3;  
}
</style>