<template>
    <div class="detalles">
        <div class="detalles__wrapper">
            <section class="main__tabSection" id="tabSurvey">
                <!-- Estandar -->
                <div class="main__tabSection__titleContainer main__tabSection__titleContainer--surveySection">

                    <div class="main__tabSection__titleContainer--surveySection__detailsContainer">

                        <div class="boxHeader boxHeader__one">

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

                        </div>

                        <div class="boxHeader boxHeader__two">

                            <form action="co-laravel.com/admin/resultados/reporte" method="get">
                                <div class="invisible">
                                    <input :key="index" v-for="(dep,index) in promedioDePreguntasDeEncuestaSeleccionada" type="text" name="pi[]" id="" :value="dep">
                                    <input type="text" name="departamento" :value="departamentoSeleccionado.nombre">
                                    <input type="text" name="encuesta_id" :value="encuestaIdSeleccionado">
                                    <input type="text" name="encuesta" :value="encuestaSeleccionada.nombre">
                                    <input type="text" name="media" :value="promediosGlobales[encuestaIdSeleccionado]">
                                    
                                </div>
                                <button class="ui button botonDescargar" type="submit">Descargar reporte</button>
                            </form>
                            <!-- <button class="ui green button main__tabSection__titleContainer--surveySection__detailsContainer__button" :class="{disabled: promediosGlobales[encuestaIdSeleccionado]>minus}" @click='reactivarEncuesta'>Reactivar Encuesta</button> -->
                            <button class="ui green button main__tabSection__titleContainer--surveySection__detailsContainer__button" :class="{disabled: promediosGlobales[encuestaIdSeleccionado]>minus}" >Reactivar Encuesta</button>

                            
                        </div>

                    </div>


                </div>

                <!-- Estandar -->
                <div class="main__tabSection__body main__tabSection__body--surveySection">
                    <table class="ui celled selectable table main__tabSection__body main__tabSection__body--surveySection__table">
                        <thead>
                            <tr>
                                <th>Pregunta</th>
                                <th>Media</th>
                                <th>Ver Detalles</th>
                            </tr>
                        </thead>
                        <tbody class="main__tabSection__body main__tabSection__body--surveySection__table__tbody">
                            
                            
                            <tr v-for="(x,index) in preguntasEncuestaSeleccionado" class="main__tabSection__body main__tabSection__body--surveySection__table__tbody__tr" :key="x[0]">
                                <td v-if="promedioDePreguntasDeEncuestaSeleccionada[index]>minus" data-label="Name" class="main__tabSection__body main__tabSection__body--surveySection__table__tbody__tr__td" >{{(index+1)+ '. ' +x.pregunta}}</td>
                                <td v-else :data-tooltip="indicadores[index].indicador" data-inverted="" data-label="Name" class="main__tabSection__body main__tabSection__body--surveySection__table__tbody__tr__td" >{{(index+1)+ '. ' +x.pregunta}}</td>
                                <td data-label="Media" style="text-align:center" class="main__tabSection__body main__tabSection__body--surveySection__table__tbody__tr__td">
                                    <a class="item">
                                        <div class="ui horizontal label" :class="{green: promedioDePreguntasDeEncuestaSeleccionada[index]>minus, red:promedioDePreguntasDeEncuestaSeleccionada[index]<=minus}" >{{promedioDePreguntasDeEncuestaSeleccionada[index]}}</div>
                                    </a>
                                </td>
                                <td data-label="Details" @click="modal(respuestasEncuestaSeleccionada[index],((index+1) + '. ' +x.pregunta))" class="main__tabSection__body main__tabSection__body--surveySection__table__tbody__tr__td--details" ><i class="fas fa-info-circle"></i></td>
                                
                            </tr>


                        </tbody>

                        
                    </table>


                    <!-- <div class="ui modal" id="graficas">
                        <i class="close icon"></i>
                        <div class="header">
                            {{preguntaActual}}
                        </div>
                        <div class="image content">
                            <canvas id="myChart"></canvas>
                        </div>
                        <div class="actions">
                            <div class="ui positive right labeled icon button">
                                Entendido
                                <i class="checkmark icon"></i>
                            </div>
                        </div>
                    </div> -->

                </div>

            </section>
        </div>

    </div>
    
</template>

<script>
export default {
    name: 'Detalles',
    created(){
        this.$store.commit('setActualView', 'detalles')
        this.$store.commit('setEncuestaIdSeleccionado', this.encuestaId)
        this.getData()
        
    },
    data(){
        return {
            welcome: 'Bienvenido'
        }
    },
    computed: {
        encuestaId(){
            return this.$store.getters.getDataForDetalles.encuestaId
        },
        index(){
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
        preguntasEncuestaSeleccionado(){
            return this.$store.getters.getPreguntasEncuestaSeleccionado
        },
        indicadores(){
            return this.$store.getters.getIndicadores

        }
        
        
    },
    methods: {
        getData(){
            this.$store.dispatch('getPreguntas')
            .then( response => {
                // este.preguntasEncuestaSeleccionado= response.data;
                this.$store.commit('setPreguntasEncuestaSeleccionado', response.data)

                // este.encuestaSeleccionada= este.resultados[0][index].encuesta;
                // console.log(this.resultados[0][this.index].encuesta)
                this.$store.commit('setEncuestaSeleccionada', this.resultados[0][this.index].encuesta)


                // este.respuestasEncuestaSeleccionada= este.resultados[1][encuestaId]
                this.$store.commit('setRespuestasEncuestaSeleccionada', this.resultados[1][this.encuestaId])


                // este.promedioDePreguntasDeEncuestaSeleccionada= este.resultados[2][encuestaId];
                this.$store.commit('setPromedioDePreguntasDeEncuestaSeleccionada', this.resultados[2][this.encuestaId])
            })
            .catch( error => {
                console.log(error)
            })

            this.$store.dispatch('getIndicadores')
            .then( response => {
                this.$store.commit('setIndicadores', response)
            })
            .catch( error => {
                console.log(error)
            })
        }
        
    }
}
</script>>

<style lang="scss" scoped>

</style>