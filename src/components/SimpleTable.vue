<template>
<div>
<b-table-simple responsive hover>
  <b-thead class="text-light bg-secondary">
    <b-tr>
      <b-th style="width: 20rem">CUENTA</b-th>
      <b-th style="width: 10rem">DEBE</b-th>
      <b-th style="width: 10rem">HABER</b-th>
      <b-th style="width: 1rem"></b-th>
    </b-tr>
  </b-thead>
    
  <b-tbody tag="transition-group" name="test">
        <b-tr v-if="getAsientos.length==0">
            <b-td colspan="4" class="text-center">Agregar cuentas a la lista</b-td>
        </b-tr>
        <b-tr v-else v-for="cuenta in asientosMasTemporal" :key="cuenta.id">
            <b-td>{{cuenta.nombre}}</b-td>
            <b-td class="text-right">
                {{valueOrBlankSpace(cuenta,'Debe')}}
            </b-td>
            <b-td class="text-right">
                {{valueOrBlankSpace(cuenta,'Haber')}}
            </b-td>
            <b-td style="width: 1rem">
                    <b-button size="sm" 
                    class="mr-1" 
                    @click="quitarAsiento(cuenta.id)" 
                    v-if="cuenta.id!=1000">
                        <b-icon-trash-fill />
                    </b-button>
            </b-td>
        </b-tr>
  </b-tbody>
    
  <b-tfoot  class="mt-5 bg-secondary text-light">  
    <b-tr>
        <b-td>
            <span class="float-right bold">{{getAsientos.length>0? 'Total: ': ''}}</span>
        </b-td>
        <b-td class="text-right">
            {{getAsientos.length>0? `${sumarDebe}.-`: ''}}
        </b-td>
        <b-td class="text-right">
            {{getAsientos.length>0? `${sumarHaber}.-`: ''}}
        </b-td>
        <b-td>
        </b-td>
    </b-tr>
  </b-tfoot>
</b-table-simple>
    <b-form-datepicker class="mb-3 mt-5"
        :disabled="getAsientos.length==0"
        v-model="formu.fecha">
    </b-form-datepicker>
    <b-button variant="success" 
        class="float-right"
        :disabled="sumarHaber!==sumarDebe||getAsientos.length==0">  
        Registrar
    </b-button>
</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
    name: 'SimpleTable',
    props: ['form'],
    data() {
        return {
            formu: {
                fecha: new Date()
            }    
        }
    },
    methods: {
        ...mapActions(['quitarAsiento']),
        valueOrBlankSpace(cuenta,tipo){
            if ( cuenta.tipo === tipo  ) 
                return `${parseInt(cuenta.monto).toFixed(2)}.-`
            return '';

        },
    },
    computed: {
        ...mapGetters(['getAsientos']) ,
        asientosMasTemporal(){
            // if(this.form!==undefined){
            //     return [this.getAsientos, {
            //         nombre: this.form.cuenta.nombre, 
            //         tipo: this.form.tipo,
            //         monto:this.form.monto
            //     }]
            // }
            let aux = this.getAsientos
            return aux.sort( item => item.tipo==='Debe'? 0: 1)
        },
        sumarDebe(){
            let sumaD = 0;
            this.getAsientos.map(x => { if(x.tipo == 'Debe' ) {sumaD += parseInt(x.monto)}})
            return parseInt(sumaD).toFixed(2)
        },
        sumarHaber(){
            let sumaD = 0;
            this.getAsientos.map(x => { if(x.tipo == 'Haber' ) {sumaD += parseInt(x.monto)}})
            return parseInt(sumaD).toFixed(2)
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
.test-active {
    transition: all 1s ease-in-out;
}
.test-enter{
    opacity: 0;
}
.test-enter-to{
    opacity: 1;
}
tbody td span {
    padding: 10px;
    background: yellow;
}
</style>