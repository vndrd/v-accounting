<template>
    <b-table striped hover :items="getAsientos" :fields="fields" foot-clone fixed responsive>
        <template v-slot:table-colgroup="scope">
            <col
                v-for="field in scope.fields"
                :key="field.key"
                :style="{ width: field.key === 'cuenta' ? '200px' : '180px' }"
            >
        </template>
        <template v-slot:cell(actions)="row">
            <b-button size="sm" @click="quitarAsiento(row.item.id)" class="mr-1" v-if="row.item.id!=1000">
                <b-icon-trash-fill></b-icon-trash-fill>
            </b-button>
        </template>
        <template v-slot:cell(cuenta)="row">
            <span class="float-left">{{row.value}} </span>
        </template>
        <!-- A custom formatted header cell for field 'name' -->
        <template v-slot:head(cuenta)="data">
            <span class="text-secondary">{{ data.label.toUpperCase() }}</span>
        </template>
        <!-- A custom formatted footer cell for field 'name' -->
        <template v-slot:foot(cuenta)="">
            <span class="text-secondary float-right">Total</span>
        </template>
        <template v-slot:foot(debe)="">
            <span class="text-secondary mt-5">{{sumarDebe}}</span>
        </template>
        <template v-slot:foot(haber)="">
            <span class="text-secondary mt-5">{{sumarHaber}}</span>
        </template>
        <template v-slot:foot(actions)="">
            <b-button :disabled="sumarDebe!=sumarHaber"
                size="md"
                variant="success"
            >
                Registrar
            </b-button>
        </template>
        <!-- Default fall-back custom formatted footer cell -->
        <template v-slot:foot()="data">
            <i>{{ data.label }}</i>
        </template>
    </b-table>                
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
    name: 'Tabla',
    data() {
        return {

            fields: [
                {key: 'cuenta', label: 'Cuenta', formatter: cuenta => {return cuenta.text}},
                {key: 'debe', label: 'Debe', formatter: (value,key,item) => {
                    if ( item.tipo == 'Debe'  ) {
                        return item.monto
                        }
                        return '';
                    }
                },
                {key: 'haber', label: 'Haber', formatter: (value,key,item) => {
                    if ( item.tipo == 'Haber'  ) {
                        return item.monto
                        }
                        return '';
                    }
                },
                { key: 'actions', label: '' }
            ]
        }
    },
    methods: {
        ...mapActions(['quitarAsiento'])
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