<template>
    <div>
        <b-container>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-row>
                    <b-col md="1">
                        <b-button 
                            size="md"
                            ref="tipo"
                            :variant="debehaber"
                            @click="changeType">{{form.tipo}}</b-button>
                    </b-col>
                    <transition-group name="rowCuenta" tag="div" class="col-md-11 float-left">
                        <b-col md="6" v-if="form.tipo!='Tipo'" v-bind:key="'qwe'" class="float-left">
                            <b-form-group id="input-group-3" label-for="input-3">
                                <b-form-select
                                v-model="form.cuenta"
                                :options="cuentas"
                                required
                                ></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col md="5" v-if="form.tipo!='Tipo'" v-bind:key="'asd'" class="float-left">
                        <b-input-group size="md" prepend="$" append=".00 Bs.">
                            <b-form-input
                             v-model="form.monto"
                            ></b-form-input>
                        </b-input-group>
                        </b-col>
                        <b-col md="1" v-if="form.tipo!='Tipo'" v-bind:key="'zxc'" class="float-left">
                            <b-button variant="info" @click="agregarCuenta">+</b-button>
                        </b-col>
                    </transition-group>
                    
                </b-row>
            <!--Tabla con datos-->
            <Tabla :lista="tablaCuentas" @quitarCuenta="quitarCuenta" v-if="tablaCuentas.length"/>
            </b-form>
        </b-container>
    </div>
</template>

<script>
import Tabla from '@/components/Tabla.vue'
export default {
    name: 'Asiento',
    props: ['cuentas'],
data() {
      return {
        tablaCuentas: [],
        form: {
            cuenta: null,
            monto: 0,
            tipo: 'Tipo',
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true,
        tipos: [
          { text: 'Debe', value: 'Debe' },
          { text: 'Haber', value: 'Haber' },
        ]
      }
    },
    methods: {
        quitarCuenta(item){
            this.tablaCuentas = this.tablaCuentas.filter( x => {return x.cuenta.id !== item.cuenta.id })
            this.$emit('reestablecerOption',item.cuenta.id)
        },
        agregarCuenta(){
            this.tablaCuentas.push({
                cuenta: this.form.cuenta, 
                monto: this.form.monto, 
                tipo: this.form.tipo, 
            });
            this.tablaCuentas.sort(x => {
                if( x.tipo == 'Haber')
                    return 1
                return -1
            })
            let id = this.form.cuenta.id
            this.$emit("quitarOption", id)
            this.form.cuenta = null;
            this.form.monto = 0;
            this.form.tipo = 'Debe';
            this.$refs.tipo.focus();
        },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      changeType() {
          if( this.form.tipo == 'Debe' ){
              this.form.tipo = 'Haber'
          }else {
              this.form.tipo = 'Debe'
          }
      }
    },
    computed: {
        debehaber: function(){
            if( this.form.tipo == 'Debe'){
                return 'success'
            }else if ( this.form.tipo == 'Haber' ){
                return 'danger'   
            }
            return '';
        },
        
    },
    components: {
        Tabla
    }
}
/*
<b-col md="8" v-if="form.tipo">
                            <b-col md="4">
                                <b-form-group id="input-group-3" label="Seleccionar Cuenta" label-for="input-3">
                                    <b-form-select
                                    v-model="form.cuenta"
                                    :options="cuentas"
                                    required
                                    ></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col md="4">
                                <b-form-group id="input-group-2" label="Introducir Monto" label-for="input-2">
                                    <b-form-input
                                    v-model="form.name"
                                    required
                                    placeh  older="0.00"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-col>
*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .rowCuenta-enter{
        opacity: 0;
        transform: translateX(100px);
    }
    .rowCuenta-enter-to{
        transform: translateX(0px);
        opacity: 1;
    }
    .rowCuenta-enter-active{
          transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .rowCuenta-leave{

    }
    .rowCuenta-leave-to{
        
    }
    .rowCuenta-leave-active{
        
    }
</style>
