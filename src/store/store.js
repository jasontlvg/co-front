import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://co-laravel.com/admin/'

export const store = new Vuex.Store({
    state: {
        departamentos: [],
        departamentoSeleccionado: {},
        resultados: {},
        promediosGlobales: [],
        encuestaIdSeleccionado: -1,
        preguntasEncuestaSeleccionado: [],
        respuestasEncuestaSeleccionada: [],
        promedioDePreguntasDeEncuestaSeleccionada: [],
        respuestasDePreguntas: [],
        encuestaSeleccionada: {},
        encuestaMenor: 0,
        flags: [],
        preguntaActual: '',
        // Para el Diseño Imp
        practica: [],
        procesos: [],
        personas: [],
        producto: [],
        acr: [],
        indicadores: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',],
        lolo: ['uno', 'dos'],
        indicadorMasAlto: -10,
        minus: 2.9999,
        actualView:'',
        dashboardData: {},
        dashboardDataForGoToEncuestas: {encuesta: 0, turno: 0},
        dataForDetalles: {}
    },
    getters: {
        getDepartamentos(state) {
            return state.departamentos
        },
        getDepartamentoSeleccionado(state) {
            return state.departamentoSeleccionado
        },
        getActualView(state){
            return state.actualView
        },
        getDashboardData(state){
            return state.dashboardData
        },
        getDashboardDataForGoToEncuestas(state){
            return state.dashboardDataForGoToEncuestas
        },
        getResultados(state){
            return state.resultados
        },
        getMinus(state){
            return state.minus
        },
        getPromediosGlobales(state){
            return state.promediosGlobales
        },
        getFlags(state){
            return state.flags
        },
        getPractica(state){
            return state.practica
        },
        getProcesos(state){
            return state.procesos
        },
        getPersonas(state){
            return state.personas
        },
        getProducto(state){
            return state.producto
        },
        getacr(state){
            return state.acr
        },
        getEncuestaMenor(state){
            return state.encuestaMenor
        },
        getIndicadorMasAlto(state){
            return state.indicadorMasAlto
        },
        getDataForDetalles(state){
            return state.dataForDetalles
        }


    },
    mutations: {
        setDepartamentos(state, departamentos) {
            state.departamentos = departamentos
        },

        setRespuestas(state, respuestas) {
            state.respuestasDePreguntas = respuestas
        },

        setDepartamentoSeleccionado(state, departamento) {
            state.departamentoSeleccionado = departamento
        },

        setActualView(state, view){
            state.actualView= view
        },

        setDashboardData(state, data){
            state.dashboardData= data
        },

        setDashboardDataForGoToEncuestas(state, data){
            state.dashboardDataForGoToEncuestas.encuesta= data.encuesta
            state.dashboardDataForGoToEncuestas.turno= data.turno
        },

        setResultados(state, data){
            state.resultados= data;
        },

        pushFlags(state, flag){
            state.flags.push(flag);
        },

        setPromediosGlobales(state,data){
            // console.log(`${data.i} ${data.data}`)
            state.promediosGlobales[data.i]= data.data
        },

        setEncuestaMenor(state, data){
            state.encuestaMenor= data
        },

        setIndicadorMasAlto(state, indicador){
            state.indicadorMasAlto= indicador
        },


        setPersonas(state, data){
            state.personas.push(data)
        },

        setProducto(state, data){
            state.producto.push(data)
        },

        setacr(state, data){
            state.acr.push(data)
        },

        setProcesos(state, data){
            state.procesos.push(data)
        },

        setPractica(state, data){
            state.practica.push(data)
        },

        setDataForDetalles(state, data){
            state.dataForDetalles= data
        },
        setEncuestaIdSeleccionado(state,id){
            state.encuestaIdSeleccionado= id
        },
        setPreguntasEncuestaSeleccionado(state, data){
            state.preguntasEncuestaSeleccionado= data;
        },
        setEncuestaSeleccionada(state,data){
            state.encuestaSeleccionada= data
        },
        setRespuestasEncuestaSeleccionada(state, data){
            state.respuestasEncuestaSeleccionada= data
        },
        setPromedioDePreguntasDeEncuestaSeleccionada(state,data){
            state.promedioDePreguntasDeEncuestaSeleccionada= data
        },
        setIndicadores(state, data){
            state.indicadores=data
        }
        
        

    },
    actions: {

        getDepartamentos(context) {
            return new Promise((resolve, reject) => {
                axios.get('api/results')
                    .then(function (response) {
                        // console.log(response.data);
                        resolve(response.data)
                    })
                    .catch(function (error) {
                        // console.log(error);
                        reject(error.response)
                    })
                    .then(function () {
                        // always executed
                    });
            })
        },

        getRespuestas(context) {
            return new Promise((resolve, reject) => {
                axios.get('api/results/encuesta/respuestas')
                    .then(function (response) {
                        // console.log(response.data);
                        resolve(response.data)
                    })
                    .catch(function (error) {
                        // console.log(error);
                        reject(error.response)
                    })
                    .then(function () {
                        // always executed
                    });
            })
        },

        getDashboard(context) {
            let departamento_id=context.getters.getDepartamentoSeleccionado.id 
            return new Promise((resolve, reject) => {
                axios.get('api/results/getdashboard', {
                    params: {
                        departamento_id: departamento_id
                    }
                })
                    .then(function (response) {
                        // console.log(response.data);
                        resolve(response.data)
                    })
                    .catch(function (error) {
                        // console.log(error);
                        reject(error.response)
                    })
                    .then(function () {
                        // always executed
                    });
            })
        },

        getResultados(context){
            let params= context.getters.getDashboardDataForGoToEncuestas
            // console.log(params)
            // console.log(context.getters.getDepartamentoSeleccionado.id)
            let este= this
            return new Promise((resolve, reject) => {
                // axios.get(`api/getdata/${context.getters.getDepartamentoSeleccionado.id}/${params.encuesta}/${params.turno}`)
                axios.get(`api/getdata/1/${params.encuesta}/${params.turno}`) // debug comenta este y descomenta el de arriba para produccion
                    .then(function (response) {
                        // console.log(response.data);
                        resolve(response)
                    })
                    .catch(function (error) {
                        // console.log(error);
                        reject(error.response)
                    })
                    .then(function () {
                        // always executed
                    });
            })

        },

        getPreguntas(context){
            // console.log(context.getters.getDataForDetalles.encuestaId)
            return new Promise((resolve, reject) => {
                axios.get(`api/results/encuesta/preguntas/${context.getters.getDataForDetalles.encuestaId}`) // debug comenta este y descomenta el de arriba para produccion
                    .then(function (response) {
                        // console.log(response.data);
                        resolve(response)
                    })
                    .catch(function (error) {
                        // console.log(error);
                        reject(error.response)
                    })
                    .then(function () {
                        // always executed
                    });
            })

        },

        getIndicadores(context){
            return new Promise((resolve, reject) => {
                axios.get(`api/indicadores/${context.getters.getDataForDetalles.encuestaId}`) // debug comenta este y descomenta el de arriba para produccion
                    .then(function (response) {
                        console.log(response.data);
                        resolve(response.data)
                    })
                    .catch(function (error) {
                        // console.log(error);
                        reject(error.response)
                    })
                    .then(function () {
                        // always executed
                    });
            })

        }



    }
})
