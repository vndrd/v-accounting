const state = {
    cuentas: [
        {id: 1, text:'CAJA', tipo: 'Activo' },
        {id: 2, text: 'BANCOS', tipo: 'Activo' },
        {id: 3, text: 'MERCANCIAS', tipo: 'Activo' },
        {id: 4, text: 'CLIENTES', tipo: 'Activo' },
        {id: 5, text: 'EDIFICIOS', tipo: 'Activo' },
        {id: 6, text: 'EQUIPOS DE TRANSPORTE', tipo: 'Activo'},
        {id: 7, text: 'EQUIPOS DE COMPUTO', tipo: 'Activo'},
        {id: 8, text: 'DF-IVA', tipo: 'Activo'},
        {id: 9, text: 'PROVEEDORES', tipo: 'Pasivo'},
        {id: 10, text: 'SUELDOS POR PAGAR', tipo: 'Pasivo'},
        {id: 11, text: 'IMPUESTOS POR PAGAR', tipo: 'Pasivo'},
        {id: 12, text: 'DOCUMENTOS POR PAGAR', tipo: 'Pasivo'},
        {id: 13, text: 'ACREEDORES DIVERSOS', tipo: 'Pasivo'},
        {id: 14, text: 'HIPOTECAS', tipo: 'Pasivo'},
        {id: 15, text: 'ANTICIPO DE CLIENTES', tipo: 'Pasivo'},
        {id: 16, text: 'RENTAS COBRADAS POR ANTICIPADO', tipo: 'Pasivo'},
        {id: 17, text: 'CF-IVA', tipo: 'Pasivo'},
        {id: 18, text: 'IT POR PAGAR', tipo: 'Pasivo'},
        {id: 19,text: 'PAPELERIA Y UTILES', tipo: 'Egreso'},
        {id: 20,text: 'PROPAGANDA Y PUBLICIDAD', tipo: 'Egreso'},
        {id: 21,text: 'IMPUESTO A LAS TRANSACCIONES', tipo: 'Egreso'},
        {id: 22, text: 'Capital Contable', tipo: 'Patrimonio'}
    ]
}
const getters = {
    getCuentas: (state) => state.cuentas
}
const actions = {

}
const mutations = {

}
export default {
    state,
    getters,
    actions,
    mutations,
}