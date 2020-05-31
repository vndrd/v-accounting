<template>
<b-form-group>
    <b-form-select
        size="sm"
        :options="cuentasSelect"
        v-model="form.cuenta"
        @change="cambiarSelect"
        required
    ></b-form-select>
</b-form-group>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    props:['form'],
    name: 'Select',
    data(){
        return {
        }
    },
    computed: {
        ...mapGetters(['getCuentas']),
        cuentasSelect: function(){
            let tipos = ['Activo','Pasivo','Egreso','Patrimonio'],
            cuentas = tipos.reduce( (arr,tipo) => {
                let options  = this.getCuentas
                    .filter( cuenta => cuenta.tipo === tipo )
                    .map( cuenta => 
                        ({
                            value: cuenta,
                            text:   cuenta.text,
                            disabled:   false,
                        })
                    )
                let grupo = {
                    label: tipo,
                    options
                }
                arr.push(grupo)
                return arr
            },[] )
            cuentas.push({value: null, text: 'Seleccionar Cuenta' })
            return cuentas
        }
    },
    methods:{
        cambiarSelect(){
            console.log({select: this.form.cuenta})
        }
    },
}
</script>
<style lang="scss" scoped>

</style>