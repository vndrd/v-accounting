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
            return this.getCuentas
        }
    },
    mounted: function(){

    },
    methods:{
        onSubmit(){
            console.log("qwe")
        }
    },
}
</script>
<style lang="scss" scoped>

</style>