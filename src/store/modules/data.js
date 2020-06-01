const state = {
    cuentas: [
        {id: 1, text:'CAJA', tipo: 'Activo',disabled:false},
        {id: 2, text: 'BANCOS', tipo: 'Activo',disabled:false},
        {id: 3, text: 'MERCANCIAS', tipo: 'Activo',disabled:false},
        {id: 4, text: 'CLIENTES', tipo: 'Activo',disabled:false},
        {id: 5, text: 'EDIFICIOS', tipo: 'Activo',disabled:false},
        {id: 6, text: 'EQUIPOS DE TRANSPORTE', tipo: 'Activo',disabled:false},
        {id: 7, text: 'EQUIPOS DE COMPUTO', tipo: 'Activo',disabled:false},
        {id: 8, text: 'DF-IVA', tipo: 'Activo',disabled:false},
        {id: 9, text: 'PROVEEDORES', tipo: 'Pasivo',disabled:false},
        {id: 10, text: 'SUELDOS POR PAGAR', tipo: 'Pasivo',disabled:false},
        {id: 11, text: 'IMPUESTOS POR PAGAR', tipo: 'Pasivo',disabled:false},
        {id: 12, text: 'DOCUMENTOS POR PAGAR', tipo: 'Pasivo',disabled:false},
        {id: 13, text: 'ACREEDORES DIVERSOS', tipo: 'Pasivo',disabled:false},
        {id: 14, text: 'HIPOTECAS', tipo: 'Pasivo',disabled:false},
        {id: 15, text: 'ANTICIPO DE CLIENTES', tipo: 'Pasivo',disabled:false},
        {id: 16, text: 'RENTAS COBRADAS POR ANTICIPADO', tipo: 'Pasivo',disabled:false},
        {id: 17, text: 'CF-IVA', tipo: 'Pasivo',disabled:false},
        {id: 18, text: 'IT POR PAGAR', tipo: 'Pasivo',disabled:false},
        {id: 19,text: 'PAPELERIA Y UTILES', tipo: 'Egreso',disabled:false},
        {id: 20,text: 'PROPAGANDA Y PUBLICIDAD', tipo: 'Egreso',disabled:false},
        {id: 21,text: 'IMPUESTO A LAS TRANSACCIONES', tipo: 'Egreso',disabled:false},
        {id: 22, text: 'Capital Contable', tipo: 'Patrimonio',disabled:false},
    ],
    asientos: [
        // {id: 1000,monto: 12,tipo: '',cuenta:{text:'qwe'}}
    ]
}
const getters = {
    getCuentas: (state) => state.cuentas,
    getAsientos: (state) => state.asientos,
}
const actions = {
    agregarAsiento: function({commit},form) {
        //logica para agregar
        let asiento = {
            nombre: form.cuenta.text,
            id: form.cuenta.id,
            ...form
        }
        console.log({asiento})
        commit('setAsiento',asiento)
    },
    quitarAsiento: function({commit},id){
        console.log({text:'filtering',id})
        //logica
        commit('deleteAsiento',id)
        commit('switchCuentaById',id)
    },
    switchCuenta: function({commit},id){
        commit('switchCuentaById',id)
    }
}
const mutations = {
    setAsiento: (state,asiento) => state.asientos = [...state.asientos,asiento],
    deleteAsiento: (state,id) => 
        state.asientos =
        state.asientos.filter(asiento => asiento.cuenta.id!==id),
    switchCuentaById: (state,id) => {
        state.cuentas.map(cuenta => {
            if( cuenta.id === id){
                cuenta.disabled = !cuenta.disabled
            }
        })
    }
}
export default {
    state,
    getters,
    actions,
    mutations,
}