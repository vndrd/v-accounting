<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/libro.png" width="200px">
    <Asiento :cuentas="cuentas"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Asiento from '@/components/Asiento.vue'

export default {
  name: 'Home',
  data: function(){
    return {
      cuentas: 
        [
          {value: null, text: 'Seleccionar Cuenta' },
          {
            label: 'Activo',
            options: [
                {value: {id: 1, text:'CAJA'}, text: 'CAJA'},
                {value: {id: 2, text: 'BANCOS'}, text: 'BANCOS'},
                {value: {id: 3, text: 'MERCANCIAS'}, text: 'MERCANCIAS'},
                {value: {id: 4, text: 'CLIENTES'}, text: 'CLIENTES'},
                {value: {id: 5, text: 'EDIFICIOS'}, text: 'EDIFICIOS'},
                {value: {id: 6, text: 'EQUIPOS DE TRANSPORTE'}, text: 'EQUIPOS DE TRANSPORTE'},
                {value: {id: 7, text: 'EQUIPOS DE COMPUTO'}, text: 'EQUIPOS DE COMPUTO'},
                {value: {id: 8, text: 'DF-IVA'}, text: 'DF-IVA'},
            ]
          },
          {
            label: 'Pasivo',
            options: [
                {value: {id: 9, text: 'PROVEEDORES'},	text: 'PROVEEDORES'},
                {value: {id: 10, text: 'SUELDOS POR PAGAR'}, text: 'SUELDOS POR PAGAR'},
                {value: {id: 11, text: 'IMPUESTOS POR PAGAR'}, text: 'IMPUESTOS POR PAGAR'},
                {value: {id: 12, text: 'DOCUMENTOS POR PAGAR'}, text: 'DOCUMENTOS POR PAGAR'},
                {value: {id: 13, text: 'ACREEDORES DIVERSOS'}, text: 'ACREEDORES DIVERSOS'},
                {value: {id: 14, text: 'HIPOTECAS'}, text: 'HIPOTECAS'},
                {value: {id: 15, text: 'ANTICIPO DE CLIENTES'}, text: 'ANTICIPO DE CLIENTES'},
                {value: {id: 16, text: 'RENTAS COBRADAS POR ANTICIPADO'}, text: 'RENTAS COBRADAS POR ANTICIPADO'},
                {value: {id: 21, text: 'CF-IVA'}, text: 'CF-IVA'},
                {value: {id: 19, text: 'IT POR PAGAR'}, text: 'IT POR PAGAR'},
              ]
          },
          {
            label: 'Egreso',
            options: [
              {value: {id: 17,text: 'PAPELERIA Y UTILES'}, text: 'PAPELERIA Y UTILES'},
              {value: {id: 18,text: 'PROPAGANDA Y PUBLICIDAD'}, text: 'PROPAGANDA Y PUBLICIDAD'},
              {value: {id: 20,text: 'IMPUESTO A LAS TRANSACCIONES'}, text: 'IMPUESTO A LAS TRANSACCIONES'},
            ]
          },
          {
            label: 'Patrimonio',
            options: [ 
              {value: {id: 22, text: 'Capital Contable'}, text: 'Capital Contable'},
            ]
                
          }
        ]
    }
  },
  components: {
    Asiento
  }
}
</script>
<style lang="scss">
* {
  font-family:  Arial, Helvetica, sans-serif;
  font-size: 18pt;
}
</style>