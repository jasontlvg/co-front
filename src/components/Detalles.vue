<template>
    <div class="detalles">
        <div class="detalles__wrapper">


            <div class="detalles__wrapper__title-container">
                <!-- <button class="boton" @click="checkForModal">Check</button> -->
                <div class="detalles__wrapper__title-container__wrapper">
                    <div class="detalles__wrapper__title-container__media-container">
                        <div class="ui labeled button" tabindex="0">
                            <div class="ui primary button">
                                <i class="chess icon"></i>Media
                            </div>
                            <div class="ui basic primary left pointing label">
                                {{promediosGlobales[encuestaIdSeleccionado]}}
                            </div>
                        </div>
                    </div>
                    <form class="detalles__wrapper__title-container__form" action="http://co-laravel.com/admin/resultados/reporte" method="get">
                    <!-- <form class="detalles__wrapper__title-container__form" action="./resultados/reporte" method="get"> -->
                        <!-- {{departamentoSeleccionado.nombre}} -->
                        <div class="invisible">
                            <input :key="index" v-for="(dep,index) in promedioDePreguntasDeEncuestaSeleccionada" type="text" name="pi[]" id="" :value="dep">
                            <input type="text" name="departamento" :value="departamentoSeleccionado.nombre">
                            <input type="text" name="encuesta_id" :value="encuestaIdSeleccionado">
                            <input type="text" name="encuesta" :value="encuestaSeleccionada.nombre">
                            <input type="text" name="media" :value="promediosGlobales[encuestaIdSeleccionado]">
                        </div>
                        <button class="ui primary button detalles__wrapper__title-container__form__download-button" type="submit">Descargar reporte</button>
                    </form>

                </div>

                <!-- <button class="ui green button main__tabSection__titleContainer--surveySection__detailsContainer__button" :class="{disabled: promediosGlobales[encuestaIdSeleccionado]>minus}" >Reactivar Encuesta</button> -->
            </div>

            <div class="detalles__wrapper__table-container">

                <table class="ui celled selectable table main__tabSection__body detalles__wrapper__table-container__table">
                        <thead class="detalles__wrapper__table-container__table__thead">
                            <tr>
                                <th>Pregunta</th>
                                <th>Media</th>
                                <th>Ver Detalles</th>
                            </tr>
                        </thead>
                        <tbody v-if="renderBody" class="detalles__wrapper__table-container__table__tbody">
                            <tr v-for="(x,index) in preguntasEncuestaSeleccionado" class="detalles__wrapper__table-container__table__tbody__tr" :key="x[0]">
                                <td class="detalles__wrapper__table-container__table__tbody__tr__td detalles__wrapper__table-container__table__tbody__tr__td--pregunta" v-if="promedioDePreguntasDeEncuestaSeleccionada[index]>minus" data-label="Name">
                                    <p>{{(index+1)+ '. ' +x.pregunta}}</p>
                                </td>
                                <td class="detalles__wrapper__table-container__table__tbody__tr__td detalles__wrapper__table-container__table__tbody__tr__td--pregunta" v-else data-label="Name">
                                    <p>{{(index+1)+ '. ' +x.pregunta}}</p>
                                    <p class="detalles__wrapper__table-container__table__tbody__tr__td detalles__wrapper__table-container__table__tbody__tr__td__recomendacion">Recomendacion: {{indicadores[index].indicador}}</p>
                                </td>
                                
                                <!-- <td class="detalles__wrapper__table-container__table__tbody__tr__td detalles__wrapper__table-container__table__tbody__tr__td--pregunta" v-else :data-tooltip="indicadores[index].indicador" data-inverted="" data-label="Name">{{(index+1)+ '. ' +x.pregunta}}</td> -->
                                
                                
                                
                                <td class="detalles__wrapper__table-container__table__tbody__tr__td detalles__wrapper__table-container__table__tbody__tr__td--media" data-label="Media" style="text-align:center">
                                    <a class="item">
                                        <div class="ui horizontal label" :class="{green: promedioDePreguntasDeEncuestaSeleccionada[index]>minus, red:promedioDePreguntasDeEncuestaSeleccionada[index]<=minus}" >{{promedioDePreguntasDeEncuestaSeleccionada[index]}}</div>
                                    </a>
                                </td>
                                <td class="detalles__wrapper__table-container__table__tbody__tr__td detalles__wrapper__table-container__table__tbody__tr__td--detalles" data-label="Details" @click="modal(respuestasEncuestaSeleccionada[index],((index+1) + '. ' +x.pregunta))"><i class="fas fa-info-circle"></i></td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <div class="detalles__wrapper__modal-container">
                <!-- {{preguntaActual}}
                <canvas id="myChart"></canvas> -->
                <div class="ui modal" id="graficas">
                    <i class="close icon"></i>
                    <div class="header">
                        {{preguntaActual}}
                    </div>
                    <div class="image content">
                        <canvas id="myChart"></canvas>
                    </div>
                    <div class="actions">
                        <div class="ui positive right labeled icon button">Entendido<i class="checkmark icon"></i></div>
                    </div>
                </div>

            </div>




           
            <!-- <div class="boxHeader boxHeader__one">

                <div class="main__tabSection__titleContainer--surveySection__detailsContainer__detail">
                    <h3 class="main__tabSection__titleContainer--surveySection__detailsContainer__detail__title">Departamento</h3>
                    <p class="main__tabSection__titleContainer--surveySection__detailsContainer__detail__name">{{departamentoSeleccionado.nombre}}</p>
                </div>
                <div class="main__tabSection__titleContainer--surveySection__detailsContainer__detail">
                    <h3 class="main__tabSection__titleContainer--surveySection__detailsContainer__detail__title">Encuesta</h3>
                    <p class="main__tabSection__titleContainer--surveySection__detailsContainer__detail__name">{{encuestaSeleccionada.nombre}}</p>
                </div>
                <div class="main__tabSection__titleContainer--surveySection__detailsContainer__detail main__tabSection__titleContainer--surveySection__detailsContainer__detail--media">
                    <h3 class="main__tabSection__titleContainer--surveySection__detailsContainer__detail__title main__tabSection__titleContainer--surveySection__detailsContainer__detail--media__title">Media</h3>
                    
                    <p class="main__tabSection__titleContainer--surveySection__detailsContainer__detail__name main__tabSection__titleContainer--surveySection__detailsContainer__detail--media__name" :class="{alert: promediosGlobales[encuestaIdSeleccionado]<=minus}">{{promediosGlobales[encuestaIdSeleccionado]}}</p> 
                </div>

            </div> -->
        </div>

    </div>
    
</template>

<script>
export default {
    name: 'Detalles',
    created(){
        this.$store.commit('setActualView', 'detalles')
        this.$store.commit('updateStepsStatus', 3)
        //debug
        this.checkForModal()
        this.$store.commit('setEncuestaIdSeleccionado', this.encuestaId)
        this.getData()
        
    },
    data(){
        return {
            modalOpen: false,

            // encuestaId: 5,
            // index: 4,
            // resultados: [[{"encuesta_id":1,"encuesta":{"id":1,"nombre":"Personas","created_at":"2019-08-03 06:04:02","updated_at":"2019-08-03 06:04:02"}},{"encuesta_id":2,"encuesta":{"id":2,"nombre":"Producto","created_at":"2019-08-03 06:04:15","updated_at":"2019-08-03 06:04:15"}},{"encuesta_id":3,"encuesta":{"id":3,"nombre":"Act. Cambio Rápido","created_at":"2019-08-03 06:04:46","updated_at":"2019-08-03 06:04:46"}},{"encuesta_id":4,"encuesta":{"id":4,"nombre":"Procesos","created_at":"2019-08-03 06:05:25","updated_at":"2019-08-03 06:05:25"}},{"encuesta_id":5,"encuesta":{"id":5,"nombre":"Practica","created_at":"2019-08-03 06:05:42","updated_at":"2019-08-03 06:05:42"}}],{"1":[[0,0,0,0,0,1],[1,0,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,0,0,0,1,0],[0,0,1,0,0,0],[1,0,0,0,0,0],[0,1,0,0,0,0],[1,0,0,0,0,0],[0,0,1,0,0,0],[0,0,0,0,0,1],[0,1,0,0,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[0,1,0,0,0,0],[0,1,0,0,0,0]],"2":[[0,0,1,0,0,0],[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,0,1]],"3":[[0,0,0,0,1,0],[0,0,1,0,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,1,0,0,0,0],[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0]],"4":[[0,0,0,1,0,0],[0,1,0,0,0,0],[1,0,0,0,0,0],[0,0,1,0,0,0],[1,0,0,0,0,0],[0,0,1,0,0,0],[0,0,1,0,0,0],[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,1,0,0,0,0],[0,0,0,1,0,0],[0,0,0,1,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,0,0,1],[0,0,1,0,0,0],[1,0,0,0,0,0],[1,0,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,1,0],[1,0,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,0,1,0,0,0]],"5":[[0,1,0,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,1,0,0,0,0],[0,1,0,0,0,0],[0,0,0,1,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,0,1,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[0,0,0,0,0,1],[1,0,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,1],[0,0,0,0,0,1],[1,0,0,0,0,0],[0,0,1,0,0,0],[0,1,0,0,0,0]]},{"1":[1,6,6,1,1,2,4,6,5,6,4,1,5,5,2,5,5],"2":[4,6,5,2,4,3,1],"3":[2,4,5,4,5,6,5,2],"4":[3,5,6,4,6,4,4,6,5,4,5,3,3,5,4,1,4,6,6,6,2,6,6,1,1,4],"5":[5,3,2,5,5,3,5,2,6,5,3,5,2,1,6,6,1,1,6,4,5]}],
            // departamentoSeleccionado: {"id":1,"nombre":"Control"},
            // encuestaSeleccionada: {"id":5,"nombre":"Practica","created_at":"2019-08-03 06:05:42","updated_at":"2019-08-03 06:05:42"},
            // promediosGlobales: [10000000,3.8235,3.5714,4.125,4.2308,3.8571],
            // encuestaIdSeleccionado: 5,
            // minus: 2.9999,
            // promedioDePreguntasDeEncuestaSeleccionada: [5,3,2,5,5,3,5,2,6,5,3,5,2,1,6,6,1,1,6,4,5],
            // preguntasEncuestaSeleccionado: [{"id":59,"pregunta":"Existe una estructura organizacional clara que permite que cada persona conozca su rol  y sus  responsabilidades","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":59}},{"id":60,"pregunta":"Existe un área o grupo específico para la mejora continua de los procesos de la empresa, y desde ahí se plantean y se abordan los problemas y la  reducción de tiempos de  los equipos","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":60}},{"id":61,"pregunta":"Se tienen objetivos estratégicos para reducir los tiempos de cambios, incrementar la disponibilidad de la máquina o equipo y la reducción de costos relacionadas con las actividades de cambio","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":61}},{"id":62,"pregunta":"Se cuenta con objetivos establecidos para reducir los desperdicios ocasionados en las actividades de cambios rápidos","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":62}},{"id":63,"pregunta":"Existe apoyo económico para la implementación de mejoras en el equipo, herramientas, área de trabajo etc. que simplifique y mejore la calidad en las actividades de cambio","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":63}},{"id":64,"pregunta":"En el proceso de mejora se utilizan herramientas para el análisis de como 5 porqués, diagramas de Pareto, diagramas de causa efecto, ciclo de PDCA, gráficas de control, entre otras que ayudan a identificar las áreas de oportunidad en las actividades de cambios","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":64}},{"id":65,"pregunta":"Se hacen uso de técnicas complementarias para la mejora de los procesos como 5´s, Poka yoke, Justo a Tiempo, TPM, Kanban, DMAIC, Mapeo de Cadena de Valor, Trabajo Estandarizado, Kaizen, entre otras que apoyan a la eficiencia de los tiempos de cambio","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":65}},{"id":66,"pregunta":"La implementación de varias metodologías de mejora continua a la vez favorecen a las actividades de cambio rápidos","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":66}},{"id":67,"pregunta":"Los roles de las personas que participan en las actividades de cambios rápidos,  son asignados de acuerdo a su experiencia, conocimientos y habilidades  lo que permite tener mayor resultados en el proceso","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":67}},{"id":68,"pregunta":"La alta dirección apoya la implementación de proyectos de cambios rápidos","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":68}},{"id":69,"pregunta":"La empresa tiene una cultura de aseguramiento de la calidad y documenta sus procesos operativos","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":69}},{"id":70,"pregunta":"Al momento de realizar el trabajo, se siguen los procedimientos en el orden y secuencia indicada","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":70}},{"id":71,"pregunta":"Se cuenta con la información del tiempo requerido para realizar cada uno de los cambios","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":71}},{"id":72,"pregunta":"Cada que se realizan acciones de mejora se documenta y se actualiza el procedimiento del proceso","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":72}},{"id":73,"pregunta":"Existe un reporte de las incidencias encontradas en los procesos para la realización de un cambio","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":73}},{"id":74,"pregunta":"Se tienen identificadas, documentadas y asignadas  las tareas o actividades,  lo cual facilita el desarrollo y evitar errores","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":74}},{"id":75,"pregunta":"Existen procedimientos de reajuste que den un enlace directo entre una falla observada en el producto y el parámetro que debe ser reajustado","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":75}},{"id":76,"pregunta":"Los cambios no planeados en el plan de producción diaria afectan los tiempos de cambios de modelos","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":76}},{"id":77,"pregunta":"Sólo se utilizan las herramientas, materiales y medios de control establecidos para realizar el cambio","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":77}},{"id":78,"pregunta":"Las condiciones del entorno (medioambientales, puesto de trabajo, estanterías, etc.) son adecuados para llevar a cabo los cambios rápidos","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":78}},{"id":79,"pregunta":"Se cuenta  con equipo de protección para la seguridad del personal que realiza las tareas de cambios rápidos","created_at":null,"updated_at":null,"pivot":{"encuesta_id":5,"pregunta_id":79}}],
            // indicadores: [{"id":59,"indicador":"No existe una estructura organizacional clara de los roles y responsabilidades de las personas, se requiere ser más clara en la funciones encomendadas","encuesta_id":5,"created_at":null,"updated_at":null},{"id":60,"indicador":"Se requiere trabajar  o integrar un grupo dedicado a la mejora continua de las actividades de cambio","encuesta_id":5,"created_at":null,"updated_at":null},{"id":61,"indicador":"No son claros los objetivos de reducción de tiempos de cambio, mejora de procesos, disponibilidad del equipo y la reducción de costos entre el personal líder, se recomienda tomar acciones por la gerencia","encuesta_id":5,"created_at":null,"updated_at":null},{"id":62,"indicador":"Se requiere objetivos claros enfocados a la reducción de desperdicios generados en el proceso de cambio, como transporte, tiempo de espera, merma, movimiento, etc","encuesta_id":5,"created_at":null,"updated_at":null},{"id":63,"indicador":"Se requiere apoyo económico para la implementación de mejoras en el equipo, herramientas, area etc, que apoye a la eficiencia de  las actividades de cambios","encuesta_id":5,"created_at":null,"updated_at":null},{"id":64,"indicador":"Se requiere hacer más uso de herramientas para el análisis  en el proceso de mejora continua, como los 5 porqués, diagramas de Pareto, diagramas de causa efecto, ciclo de PDCA, gráficas de control, entre otras que ayudan a identificar las áreas de oportunidad en las actividades de cambios","encuesta_id":5,"created_at":null,"updated_at":null},{"id":65,"indicador":"Se requiere  hacer uso de técnicas complementarias para la mejora de los procesos como 5´s, Poka yoke, Justo a Tiempo, TPM, Kanban, DMAIC, Mapeo de Cadena de Valor, Trabajo Estandarizado, Kaizen, entre otras que apoyan a la eficiencia de los tiempos de cambio","encuesta_id":5,"created_at":null,"updated_at":null},{"id":66,"indicador":"La implementación de varias metodologías de mejora continua a la vez impacta  en la eficiencia, se recomienda medir adecuadamente la implementación  y no traslapar implementaciones sin una correcta evaluación","encuesta_id":5,"created_at":null,"updated_at":null},{"id":67,"indicador":"Se requiere revisar los roles asignados a cada persona y que vaya en función de experiencia, conocimientos y habilidades para ser más productivos y eficientes en las actividades","encuesta_id":5,"created_at":null,"updated_at":null},{"id":68,"indicador":"Se requiere un apoyo claro de la alta dirección de la empresa en las implementaciones de proyectos de mejora en los procesos","encuesta_id":5,"created_at":null,"updated_at":null},{"id":69,"indicador":"El sistema de aseguramiento de la calidad de la compañía no es claro, se requiere una evaluación","encuesta_id":5,"created_at":null,"updated_at":null},{"id":70,"indicador":"Se requiere seguimiento del sistema de aseguramiento de la calidad, ya que no se siguen procedimientos o no son claros para las tareas realizadas","encuesta_id":5,"created_at":null,"updated_at":null},{"id":71,"indicador":"Se requiere medición y seguimiento de los tiempos totales de los cambios de producto y seguimiento en la mejora de los mismos","encuesta_id":5,"created_at":null,"updated_at":null},{"id":72,"indicador":"Se requiere control en las  actualizaciones y documentación de procedimientos del proceso","encuesta_id":5,"created_at":null,"updated_at":null},{"id":73,"indicador":"No se cuenta con un registro de incidencias o no se le da seguimiento adecuado en los procesos","encuesta_id":5,"created_at":null,"updated_at":null},{"id":74,"indicador":"Se requiere atención en las secuencias con las que se realizan las tareas, pueden mejorarse para mejorar los tiempos, evitar errores y hacer mejor uso de los recursos","encuesta_id":5,"created_at":null,"updated_at":null},{"id":75,"indicador":"No son claros los procedimientos de reajuste, esto puede influir en la calidad del producto y tiempos productivos","encuesta_id":5,"created_at":null,"updated_at":null},{"id":76,"indicador":"Se requiere mejor planeación en la programación de producción, de forma que favorezca a las actividades de cambios de producto","encuesta_id":5,"created_at":null,"updated_at":null},{"id":77,"indicador":"Se requiere control en el uso de herramientas, materiales, entre otros factores que están establecidos para realizar los cambios","encuesta_id":5,"created_at":null,"updated_at":null},{"id":78,"indicador":"Las condiciones del entorno (medioambientales, puesto de trabajo, estanterías, etc.) requieren atención para favorecer las actividades de  cambios rápidos","encuesta_id":5,"created_at":null,"updated_at":null},{"id":79,"indicador":"Se requiere atención en la seguridad y prevención de riesgos, así como en la protección contra accidentes del personal en las áreas de trabajo","encuesta_id":5,"created_at":null,"updated_at":null}],
            // respuestasEncuestaSeleccionada: [[0,1,0,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,1,0,0,0,0],[0,1,0,0,0,0],[0,0,0,1,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,0,1,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[0,0,0,0,0,1],[1,0,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,1],[0,0,0,0,0,1],[1,0,0,0,0,0],[0,0,1,0,0,0],[0,1,0,0,0,0]],


        }
    },
    computed: {
        encuestaId(){
            return this.$store.getters.getDataForDetalles.encuestaId
        },
        indexFromStore(){
            return this.$store.getters.getDataForDetalles.index
        },
        resultados(){
            return this.$store.getters.getResultados
        },
        departamentoSeleccionado(){
            return this.$store.getters.getDepartamentoSeleccionado
        },

        encuestaSeleccionada(){
            return this.$store.getters.getEncuestaSeleccionada
        },
        promediosGlobales(){
            return this.$store.getters.getPromediosGlobales
        },
        encuestaIdSeleccionado(){
            return this.$store.getters.getEncuestaIdSeleccionado
        },
        minus(){
            return this.$store.getters.getMinus
        },
        promedioDePreguntasDeEncuestaSeleccionada(){
            return this.$store.getters.getPromedioDePreguntasDeEncuestaSeleccionada
        },
        indicadores(){
            // console.log(this.$store.getters.getIndicadores)
            return this.$store.getters.getIndicadores
        },
        preguntasEncuestaSeleccionado(){
            return this.$store.getters.getPreguntasEncuestaSeleccionado
        },
        respuestasEncuestaSeleccionada(){
            return this.$store.getters.getRespuestasEncuestaSeleccionada
        },
        respuestasDePreguntas(){
            return this.$store.getters.getRespuestasDePreguntas
        },
        preguntaActual(){
            return this.$store.getters.getPreguntaActual
        },

        renderBody(){
            return this.$store.getters.getPreguntasEncuestaSeleccionado.length == this.$store.getters.getIndicadores.length
        }


    },
    methods: {
        getData(){

            this.$store.dispatch('getIndicadores')
            .then( response => {
                this.$store.commit('setIndicadores', response)
                // console.log('Indicadores: ')
                // console.log(response)
            })
            .catch( error => {
                console.log(error)
            })
            
            // console.log('preguntasEncuestaSeleccionado antes del dispatch: ')
            // console.log(this.$store.getters.getPreguntasEncuestaSeleccionado)

            this.$store.dispatch('getPreguntas')
            .then( response => {
                this.$store.commit('setPreguntasEncuestaSeleccionado', response.data)
                // console.log('preguntasEncuestaSeleccionado despues del dispatch:')
                // console.log(response.data)
                this.$store.commit('setEncuestaSeleccionada', this.resultados[0][this.indexFromStore].encuesta)
                this.$store.commit('setDescriptionStep', { index: 2, description: this.resultados[0][this.indexFromStore].encuesta.nombre })

                this.$store.commit('setRespuestasEncuestaSeleccionada', this.resultados[1][this.encuestaId])


                // este.promedioDePreguntasDeEncuestaSeleccionada= este.resultados[2][encuestaId];
                this.$store.commit('setPromedioDePreguntasDeEncuestaSeleccionada', this.resultados[2][this.encuestaId])
            })
            .catch( error => {
                console.log(error)
            })

            
        },

        modal(arr,pregunta){
            $('.ui.modal').modal('show');
            this.$store.commit('setPreguntaActual', pregunta)
            if(window.chart != undefined){
                // console.log('Destruyendo')
                window.chart.destroy()
            }else{
                // console.log('es la primera')
            }

            

            window.ctx = document.getElementById('myChart').getContext('2d');
            // console.dir(ctx)
            window.chart = new Chart(ctx, {
                    // The type of chart we want to create
                type: 'bar',

                // The data for our dataset
                data: {
                        // 229, 76, 56 rojo
                        // 81, 87, 96 gris
                        // 103, 193, 111 verde
                        // 15, 123, 135 azul
                        labels: this.respuestasDePreguntas,
                        datasets: [{
                            label: 'Pregunta',
                            backgroundColor: [
                                'rgba(81, 87, 96, 0.5)',
                                'rgba(15, 123, 135, 0.5)',
                                'rgba(81, 87, 96, 0.5)',
                                'rgba(15, 123, 135, 0.5)',
                                'rgba(81, 87, 96, 0.5)',
                                'rgba(15, 123, 135, 0.5)'
                            ],
                            // borderColor: 'rgb(255, 99, 132)',
                            data: arr
                        }]
                },

                // Configuration options go here
                options: {
                    legend: {
                        display: false
                    },
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem) {
                                    return tooltipItem.yLabel;
                            }
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

            this.modalOpen=true
        },
        checkForModal(){
            // let modal= document.getElementsByClassName('modals')
            let modal= $('.modals')
            // console.log(modal.length)
            if(modal.length==1){
                // console.log('Eliminando')
                modal.remove();
                // console.log(modal)
            }else{
                // console.log('no existe')
            }
        }
        
    }
}
</script>>

<style lang="scss" scoped>
@import '../scss/partials/variables';

.invisible{
    display: none;
}

.detalles{
    background: $backgroundColor;
    flex: 1 1 auto;
    &__wrapper{

        margin-bottom: 2em;
        &__title-container{
            width: 100%;
            margin-bottom: 1em;

            &__wrapper{
                max-width: 1070px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            // el &__form en el html esta dentro del &__wrapper
            &__form{
                display: flex;
                justify-content: flex-end;
                // padding-bottom: 1em;
                align-items: center;
                // background: red;
                &__download-button{
                    margin: 0;
                }
            }
        }

        &__table-container{
            max-width: 1070px;
            margin: 0 auto;
            position: relative;
            // z-index: 100000000;

            &__table{
                &__tbody{
                    &__tr{

                        &__td{
                            &__recomendacion{
                                color: rgb(173, 124, 0);
                                font-weight: bold;

                            }
                            &--pregunta{

                            }
                            &--media{

                            }
                            &--detalles{
                                // display: flex;
                                // background-color: red;
                                align-items: center;
                                justify-content: center;
                                text-align: center !important;
                            }

                        }

                    }
                }
            }

        }

        &__modal-container{

        }

    }
}

</style>