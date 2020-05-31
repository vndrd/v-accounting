<template>
<b-container>
    <h1>Formulario</h1>
    <b-form @submit="onSubmit">
        <Select :form="form" />
    </b-form>
</b-container>

</template>
<script>
import { mapGetters } from 'vuex'
import Select from '@/components/Select'
export default {
    name: 'Formulario',
    data(){
        return {
            form:{ 
                cuenta: null
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