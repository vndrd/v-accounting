<template>
    <b-form>
        <b-form-group>
            <Select :form="form" />
        </b-form-group>
        
        <b-input-group size="md" prepend="$" append=".00 Bs.">
            <b-form-input
                onkeypress="return (event.charCode >= 48 && event.charCode <= 57)"
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

</template>
<script>
import { mapGetters,mapActions } from 'vuex'
import Swal from 'sweetalert2'
import Select from '@/components/Select'
export default {
    name: 'Formulario',
    data(){
        return {
            form:{ 
                cuenta: null,
                monto: 0,
                tipo: 'Tipo'
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
        ...mapActions([
            'agregarAsiento',
            'switchCuenta',
        ]),
        agregarCuenta(){
            console.log("qwe")
        },
        cambiarSelect(){
            console.log({select: this.form.cuenta})
        },
        enviarAsiento(){
            console.log("enviarAsiento")
            if( this.form.cuenta===null ){
                Swal.fire('Oops...', 'Debes escoger una cuenta', 'error')
                return
            }
            if( isNaN(this.form.monto) ){
                Swal.fire('Oops...', 'Debes introducir un número válido', 'error')
                return
            }
            if( this.form.monto <= 0 ){
                Swal.fire('Oops...', 'Debes asignar monto', 'error')
                return
            }
            if( this.form.tipo === 'Tipo' ){
                Swal.fire('Oops...', 'Debes escoger tipo', 'error')
                return
            }
            this.agregarAsiento(this.form)
            this.switchCuenta(this.form.cuenta.id)
            this.form.cuenta=null
        },
        cambiandoFecha(){
            console.log({fecha:this.form.fecha})
        },
    },    
}
</script>
<style lang="scss" scoped>
h3{
    background: #333;
    // background: #aa2222;
    border: 5px white solid;
    border-radius: 10px;
    position: absolute;
    transform: translateY(-50px) ;
    padding:10px;
    margin:0;
    color:white;
}
.header-container{
    height: 20px;
    width: 100%;
}
</style>