<template>
<b-container>
    <h1>Formulario</h1>
    <b-form @submit="onSubmit">
        <b-row>
            <b-col md="6" class="float-left">
                <b-form-group id="input-group-3" label-for="input-3">
                    <b-form-select
                    v-model="form.cuenta"
                    :options="cuentasSelect"
                    @change="cambiarSelect"
                    required
                    ></b-form-select>
                </b-form-group>
            </b-col>
        </b-row>
    </b-form>
</b-container>

</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Formulario',
    data(){
        return {
            form:{ 
                cuenta: null
            }
        }
    },
    computed: {
        ...mapGetters(['getCuentas']),
        cuentasSelect: function(){
            let tipos = ['Activo','Pasivo','Egreso','Patrimonio'],
            cuentas = tipos.reduce( (arr,tipo) => {
                let options  = this.getCuentas
                    .filter( cuenta => 
                        cuenta.tipo === tipo
                    ).map( cuenta => {
                        return {
                            value: cuenta,
                            text:   cuenta.text,
                            disabled:false
                        }
                    })
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
    mounted: function(){

    },
    methods:{
        onSubmit(){
            console.log("qwe")
        },
        cambiarSelect(){
            console.log({select: this.form.cuenta})
        }
    },
}
</script>
<style lang="scss" scoped>

</style>