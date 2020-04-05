<template>
    <div>
        <b-table striped hover :items="lista" :fields="fields">
            <template v-slot:table-colgroup="scope">
            <col
                v-for="field in scope.fields"
                :key="field.key"
                :style="{ width: field.key === 'foo' ? '120px' : '180px' }"
            >
            </template>
            <template v-slot:cell(actions)="row">
                <b-button size="sm" @click="quitar(row.item, row.index, $event.target)" class="mr-1">
                    <b-icon-trash-fill></b-icon-trash-fill>
                </b-button>
            </template>
        </b-table>
        
        <b-modal >
            
        </b-modal>
    </div>
</template>

<script>

  export default {
    name: 'Tabla',
    props: ['lista'],
    data() {
        return {
            fields: [
                {key: 'cuenta', label: 'Cuenta', formatter: value => {return value.text}},
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
            ],
            items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' }
            ]
        }
    },
    methods: {
        quitar(item, index, button) {
             let asd = {
                 item,index,button
             }
             alert("asd: ",asd.index)
        },
    },
    computed: {
        listaOptimizada: function() {
            return this.lista.map(function(x) {         
                return {
                    cuenta: x.cuenta.text,
                    debe: this.distribuirDebe(x) ,
                    haber: this.distribuirHaber(x) ,
                    monto: x.monto
                }
            });
        }
    },
    components: {

    }
}
</script>

