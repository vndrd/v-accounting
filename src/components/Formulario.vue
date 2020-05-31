<template>
<b-container>
    <b-form>
        <b-form-group>
            <Select :form="form" />
        </b-form-group>
        <b-input-group size="md" prepend="$" append=".00 Bs.">
            <b-form-input
                v-model="form.monto"
            ></b-form-input>
        </b-input-group>        
        <b-form-group class="mt-3">
            <b-form-radio-group 
                buttons
                size="md"
            v-model="form.tipo">
                <b-form-radio value="Debe" button-variant="outline-secondary">
                    Debe</b-form-radio>
                <b-form-radio value="Haber" button-variant="outline-secondary">
                    Haber</b-form-radio>
            </b-form-radio-group>
            <b-button class="float-right" variant="info" size="md" @click="enviarAsiento">
            Agregar</b-button>
        </b-form-group>
    </b-form>
</b-container>

</template>
<script>
import { mapGetters,mapActions } from 'vuex'
import Select from '@/components/Select'
export default {
    name: 'Formulario',
    data(){
        return {
            form:{ 
                cuenta: null,
                monto: 0,
                tipo: 'Tipo',
            }
        }
    },
    components: {
        Select
    },
    computed: {
        ...mapGetters(['getCuentas']),
    },
    methods:{
        ...mapActions(['agregarAsiento']),
        agregarCuenta(){
            console.log("qwe")
        },
        cambiarSelect(){
            console.log({select: this.form.cuenta})
        },
        enviarAsiento(){
            console.log("enviarAsiento")
            if( this.form.cuenta===null ){
                alert("escoger cuenta")
                return
            }
            if( this.form.monto <= 0 ){
                alert("asignar monto")
                return
            }
            if( this.form.tipo === 'Tipo' ){
                alert("escoger tipo")
                return
            }
            this.agregarAsiento(this.form)
        }
    },    
}
</script>
<style lang="scss" scoped>

</style>