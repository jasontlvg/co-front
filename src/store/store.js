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
        dataForDetalles: {},
        steps: [
            {
                to: 'inicio', 
                active: false, 
                disabled: false, 
                title: 'Departamento', 
                description: 'Seleccione un departamento',
                icon: 'building outline'
            },
            {
                to: 'dashboard', 
                active: false, 
                disabled: true, 
                title: 'Dashboard', 
                description: 'Seleccione una encuesta',
                icon: 'sticky note outline'
            },
            {
                to: 'encuesta', 
                active: false, 
                disabled: true, 
                title: 'Encuestas', 
                description: 'Seleccione una encuesta',
                icon: 'clipboard outline'
            },
            {
                to: 'detalles', 
                active: false, 
                disabled: true, 
                title: 'Detalles', 
                description: '',
                icon: 'chart bar'
            }
        ]
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
        },
        getEncuestaSeleccionada(state){
            return state.encuestaSeleccionada
        },
        getEncuestaIdSeleccionado(state){
            return state.encuestaIdSeleccionado
        },
        getPromedioDePreguntasDeEncuestaSeleccionada(state){
            return state.promedioDePreguntasDeEncuestaSeleccionada
        },
        getPreguntasEncuestaSeleccionado(state){
            return state.preguntasEncuestaSeleccionado
        },
        getIndicadores(state){
            return state.indicadores
        },
        getRespuestasEncuestaSeleccionada(state){
            return state.respuestasEncuestaSeleccionada
        },
        getPreguntaActual(state){
            return state.preguntaActual
        },
        getRespuestasDePreguntas(state){
            return state.respuestasDePreguntas
        },
        getSteps(state){
            return state.steps
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
        },
        setPreguntaActual(state, pregunta){
            state.preguntaActual= pregunta
        },
        setStepActive(state, data){
            state.steps[data.index].active= data.status
        },
        updateStepsStatus(state, index){
            state.steps[index].active= true
            state.steps[index].disabled= false
            // Update de disabled
            for(let i=index+1; i<state.steps.length; i++){
                // console.log(state.steps[i])
                state.steps[i].disabled=true
            }
            // Update de active
            for(let j=0; j<state.steps.length; j++){
                if(j!=index){
                    state.steps[j].active=false
                }
            }
        },

        completeReset(state){
            state.departamentos= []
            state.departamentoSeleccionado= {}
            state.resultados= {}
            state.promediosGlobales= []
            state.encuestaIdSeleccionado= -1
            state.preguntasEncuestaSeleccionado= []
            state.respuestasEncuestaSeleccionada= []
            state.promedioDePreguntasDeEncuestaSeleccionada= []
            state.respuestasDePreguntas= []
            state.encuestaSeleccionada= {}
            state.encuestaMenor= 0
            state.flags= [],
            state.preguntaActual= ''
            state.practica= []
            state.procesos= []
            state.personas= []
            state.producto= []
            state.acr= []
            state.indicadores= ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
            state.lolo= ['uno', 'dos']
            state.indicadorMasAlto= -10
            state.minus= 2.9999
            state.actualView= ''
            state.dashboardData= {}
            state.dashboardDataForGoToEncuestas= {encuesta: 0, turno: 0}
            state.dataForDetalles= {}
        },

        parcialReset(state){
            // state.departamentos= []
            // state.departamentoSeleccionado= {}
            state.resultados= {}
            state.promediosGlobales= []
            state.encuestaIdSeleccionado= -1
            state.preguntasEncuestaSeleccionado= []
            state.respuestasEncuestaSeleccionada= []
            state.promedioDePreguntasDeEncuestaSeleccionada= []
            // state.respuestasDePreguntas= []
            state.encuestaSeleccionada= {}
            state.encuestaMenor= 0
            state.flags= [],
            state.preguntaActual= ''
            state.practica= []
            state.procesos= []
            state.personas= []
            state.producto= []
            state.acr= []
            state.indicadores= ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
            state.lolo= ['uno', 'dos']
            state.indicadorMasAlto= -10
            state.minus= 2.9999
            // state.actualView= ''
            // state.dashboardData= {}
            state.dashboardDataForGoToEncuestas= {encuesta: 0, turno: 0}
            state.dataForDetalles= {}
        },

        setDescriptionStep(state, data){
            // console.log(state.steps[data.index].description)
            state.steps[data.index].description= data.description
            // console.log(state.steps[0].description)
        },

        enTurno2Activate(state, index){
            state.dashboardData.encuestas[index].enTurno2=true
            state.dashboardData.encuestas[index].turno_1=true
        },

        addNewSurvey(state, data){
            // state.dashboardData.encuestas[]
            // console.log(state.dashboardData.encuestas.length+1)
            state.dashboardData.encuestas.push({ "encuesta": state.dashboardData.encuestas.length+1, "turno_1": false, "turno_2": false, "enTurno2": false })
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
                axios.get(`api/getdata/${context.getters.getDepartamentoSeleccionado.id}/${params.encuesta}/${params.turno}`)
                    .then(function (response) {
                        console.dir(response.data);
                        resolve(response)
                    })
                    .catch(function (error) {
                        console.log('en el server se genero un error');
                        reject(error.response)
                    })
                    .then(function () {
                        // always executed
                    });
            })

        },

        getPreguntas(context){
            return new Promise((resolve, reject) => {
                axios.get(`api/results/encuesta/preguntas/${context.getters.getDataForDetalles.encuestaId}`)
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
                axios.get(`api/indicadores/${context.getters.getDataForDetalles.encuestaId}`)
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

        activateFeedbackSurvey(context){
            return new Promise((resolve, reject) => {
                axios.post('api/activate/feedback', {
                    departamento_id: context.getters.getDepartamentoSeleccionado.id, //debug
                    // departamento_id: 1, // debug
                  })
                  .then(function (response) {
                    // console.log(response.data);
                    resolve(response.data)
                  })
                  .catch(function (error) {
                    // console.log(error);
                    reject(error.response)
                  });
            })
        },

        tryToActivateNewSurvey(context){
            return new Promise((resolve, reject) => {
                axios.post('api/activate/survey', {
                    departamento_id: context.getters.getDepartamentoSeleccionado.id, //debug
                    // departamento_id: 1, // debug
                  })
                  .then(function (response) {
                    // console.log(response.data);
                    resolve(response.data)
                  })
                  .catch(function (error) {
                    console.log(error);
                    reject(error.response)
                  });
            })
            
        }




    }
})