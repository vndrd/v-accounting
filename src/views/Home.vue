<template>
  <div class="home">
    <formulario />
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
      cuentas: 
        [          
          {value: null, text: 'Seleccionar Cuenta' },
          {
            label: 'Activo',
            options: [
                {value: {id: 1, text:'CAJA'}, text: 'CAJA', disabled: false},
                {value: {id: 2, text: 'BANCOS'}, text: 'BANCOS', disabled: false},
                {value: {id: 3, text: 'MERCANCIAS'}, text: 'MERCANCIAS', disabled: false},
                {value: {id: 4, text: 'CLIENTES'}, text: 'CLIENTES', disabled: false},
                {value: {id: 5, text: 'EDIFICIOS'}, text: 'EDIFICIOS', disabled: false},
                {value: {id: 6, text: 'EQUIPOS DE TRANSPORTE'}, text: 'EQUIPOS DE TRANSPORTE', disabled: false},
                {value: {id: 7, text: 'EQUIPOS DE COMPUTO'}, text: 'EQUIPOS DE COMPUTO', disabled: false},
                {value: {id: 8, text: 'DF-IVA'}, text: 'DF-IVA', disabled: false},
            ]
          },
          {
            label: 'Pasivo',
            options: [
                {value: {id: 9, text: 'PROVEEDORES'},	text: 'PROVEEDORES', disabled: false},
                {value: {id: 10, text: 'SUELDOS POR PAGAR'}, text: 'SUELDOS POR PAGAR', disabled: false},
                {value: {id: 11, text: 'IMPUESTOS POR PAGAR'}, text: 'IMPUESTOS POR PAGAR', disabled: false},
                {value: {id: 12, text: 'DOCUMENTOS POR PAGAR'}, text: 'DOCUMENTOS POR PAGAR', disabled: false},
                {value: {id: 13, text: 'ACREEDORES DIVERSOS'}, text: 'ACREEDORES DIVERSOS', disabled: false},
                {value: {id: 14, text: 'HIPOTECAS'}, text: 'HIPOTECAS', disabled: false},
                {value: {id: 15, text: 'ANTICIPO DE CLIENTES'}, text: 'ANTICIPO DE CLIENTES', disabled: false},
                {value: {id: 16, text: 'RENTAS COBRADAS POR ANTICIPADO'}, text: 'RENTAS COBRADAS POR ANTICIPADO', disabled: false},
                {value: {id: 21, text: 'CF-IVA'}, text: 'CF-IVA', disabled: false},
                {value: {id: 19, text: 'IT POR PAGAR'}, text: 'IT POR PAGAR', disabled: false},
              ]
          },
          {
            label: 'Egreso',
            options: [
              {value: {id: 17,text: 'PAPELERIA Y UTILES'}, text: 'PAPELERIA Y UTILES', disabled: false},
              {value: {id: 18,text: 'PROPAGANDA Y PUBLICIDAD'}, text: 'PROPAGANDA Y PUBLICIDAD', disabled: false},
              {value: {id: 20,text: 'IMPUESTO A LAS TRANSACCIONES'}, text: 'IMPUESTO A LAS TRANSACCIONES', disabled: false},
            ]
          },
          {
            label: 'Patrimonio',
            options: [ 
              {value: {id: 22, text: 'Capital Contable'}, text: 'Capital Contable', disabled: false},
            ]
                
          }
        ]
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
  font-size: 18pt;
}
</style>