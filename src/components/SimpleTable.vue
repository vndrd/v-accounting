<template>
<b-table-simple responsive>
  <b-thead>
    <b-tr>
      <b-th>Cuenta</b-th>
      <b-th>Debe</b-th>
      <b-th>Haber</b-th>
      <b-th></b-th>
    </b-tr>
  </b-thead>
  <b-tbody>
    <b-tr v-for="cuenta in getAsientos" :key="cuenta.id">
      <b-td>{{cuenta.nombre}}</b-td>
      <b-td>{{valueOrZero(cuenta,'Debe')}}</b-td>
      <b-td>{{valueOrZero(cuenta,'Haber')}}</b-td>
      <b-th>
            <b-button size="sm" 
            @click="quitarAsiento(cuenta.id)" 
            class="mr-1" 
            v-if="cuenta.id!=1000">
                <b-icon-trash-fill />
            </b-button>
      </b-th>
    </b-tr>
  </b-tbody>
  <b-tfoot>
    <b-tr>
        <b-td>Total</b-td>
        <b-td>{{sumarDebe}}</b-td>
        <b-td>{{sumarHaber}}</b-td>
        <b-td>
            <b-button variant="success" :disabled="sumarHaber!==sumarDebe">
                Agregar
            </b-button>
        </b-td>
    </b-tr>
  </b-tfoot>
</b-table-simple>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
    name: 'SimpleTable',
    data() {
        return {
            
        }
    },
    methods: {
        ...mapActions(['quitarAsiento']),
        valueOrZero(cuenta,tipo){
            if ( cuenta.tipo === tipo  ) 
                return cuenta.monto
            return '';

        },
    },
    computed: {
        ...mapGetters(['getAsientos']) ,
        sumarDebe(){
            let sumaD = 0;
            this.getAsientos.map(x => { if(x.tipo == 'Debe' ) {sumaD += parseInt(x.monto)}})
            return sumaD
        },
        sumarHaber(){
            let sumaD = 0;
            this.getAsientos.map(x => { if(x.tipo == 'Haber' ) {sumaD += parseInt(x.monto)}})
            return sumaD
        }
    },
    components: {

    }
}
</script>
<style lang="scss">
.tablita-move{
    transition: transform 1s;
}
.table.b-table.b-table-fixed {
    table-layout: auto !important;
}
</style>