<template>
    <main class="main">
        <div class="main__titleContainer">
            <h3 class="main__titleContainer__title">Seleccione un Departamento</h3>
        </div>

        <div class="main__body">
            <ul class="main__body__listContainer">
                <li v-for="dep in departamentos" class="main__body__listContainer__li" @click="selectedDep(dep, $event)">{{dep.nombre}}</li>
            </ul>
            <!-- <button >Aplastar</button> -->
            <button class="ui right labeled icon button disabled main__button" id="nextMain" @click="nextPage">
                <i class="right arrow icon"></i>Siguiente
            </button>
        </div>


        <!-- tabSection -->
        <!-- Quita el show -->
        <section class="main__tabSection surveys" id="tab">
            <!-- Estandar -->
            <div class="main__tabSection__titleContainer">
                <h3 class="main__tabSection__titleContainer__title">Departamento de {{departamentoSeleccionado.nombre}}</h3>
            </div>

            <!-- Estandar -->
            <div class="main__tabSection__body main__tabSection__body--surveysSection">

                <!-- <div class="main__tabSection__body--surveysSection__surveysContainer">
                    <div v-for="(survey, index) in resultados[0]" class="main__tabSection__body--surveysSection__surveysContainer__survey" v-bind:class="{alert:promediosGlobales[survey.encuesta_id]<3 || encuestaMenor == promediosGlobales[survey.encuesta_id]}">

                        <i v-if="survey.encuesta.nombre == 'Personas'" class="main__tabSection__body--surveysSection__surveysContainer__survey__icon fas fa-users"></i>
                        <i v-else-if="survey.encuesta.nombre == 'Producto'" class="main__tabSection__body--surveysSection__surveysContainer__survey__icon fas fa-truck-loading"></i>
                        <i v-else-if="survey.encuesta.nombre == 'Act. Cambio Rápido'" class="main__tabSection__body--surveysSection__surveysContainer__survey__icon fas fa-share-square"></i>
                        <i v-else-if="survey.encuesta.nombre == 'Procesos'" class="main__tabSection__body--surveysSection__surveysContainer__survey__icon fas fas fa-hat-wizard"></i>
                        <i v-else-if="survey.encuesta.nombre == 'Practica'" class="main__tabSection__body--surveysSection__surveysContainer__survey__icon fas fas fa-clipboard-list"></i>
                        <i v-else class="main__tabSection__body--surveysSection__surveysContainer__survey__icon fas fas fa-poo-storm"></i>
                        
                        <div class="main__tabSection__body--surveysSection__surveysContainer__survey__description">
                            <p class="main__tabSection__body--surveysSection__surveysContainer__survey__description__title">{{survey.encuesta.nombre}}</p>
                            <p class="main__tabSection__body--surveysSection__surveysContainer__survey__description__status" v-bind:class="{calafiero:encuestaMenor == promediosGlobales[survey.encuesta_id]}">La Media es de: {{promediosGlobales[survey.encuesta_id]}}</p>
                            <p class="main__tabSection__body--surveysSection__surveysContainer__survey__description__flags" v-bind:class="{calafiero:encuestaMenor == promediosGlobales[survey.encuesta_id]}">Indicadores: {{flags[index]}}</p>
                        </div>
                        <div class="main__tabSection__body--surveysSection__surveysContainer__survey__control">
                            <i class="fas fa-info-circle main__tabSection__body--surveysSection__surveysContainer__survey__control__info" @click="nextPage($event,survey.encuesta_id,index)"></i>
                        </div>

                    </div>
                </div> -->

                <div class="main__tabSection__body--surveysSection__surveysContainer" id="kleenex">
                    <!-- pollo -->
                    <div class="positioner positioner--top">
                        <!-- Practica -->
                        <div class="positioner__box positioner__box__leftColumn" v-bind:class="{alert:promediosGlobales[practica[0]]<3 || encuestaMenor == promediosGlobales[practica[0]], disabled:practica.length == 0}">
                            <div class="positioner__box__leftColumn__leftSide">
                                <i class="clipboard list icon"></i>
                                <h2 class="up">Practica</h2>
                            </div>
                            <div class="positioner__box__leftColumn__rightSide positioner__box__leftColumn__rightSide--top">
                                <!-- <i class="info circle icon" @click="nextPage($event,practica[0],practica[1])"></i> -->
                                <!-- <i class="fas fa-info-circle main__tabSection__body--surveysSection__surveysContainer__survey__control__info" @click="nextPage($event,practica[0],practica[1])"></i> -->
                                <!-- <i class="info circle icon"></i> -->
                                <i v-if="practica.length > 0" class="info circle icon" @click="nextPage($event,practica[0],practica[1])"></i>
                            </div>
                        </div>

                        <!-- Procesos -->
                        <div class="positioner__box positioner__box__rightColumn" v-bind:class="{alert:promediosGlobales[procesos[0]]<3 || encuestaMenor == promediosGlobales[procesos[0]], disabled:procesos.length == 0}">
                            <div class="positioner__box__rightColumn__leftSide">
                                <!-- <i class="info circle icon"></i> -->
                                <i v-if="procesos.length > 0" class="info circle icon" @click="nextPage($event,procesos[0],procesos[1])"></i>
                                <!-- <i v-else class="info circle icon" @click="nextPage($event,procesos[0],procesos[1])"></i> -->
                            </div>
                            <div class="positioner__box__rightColumn__rightSide positioner__box__leftColumn__rightSide--top">
                                <i class="cog icon"></i>
                                <h2>Procesos</h2>
                            </div>

                        </div>
                    </div>

                    <div class="positioner positioner--bottom">
                        <!-- Personas -->
                        <div class="positioner__box positioner__box__leftColumn" v-bind:class="{alert:promediosGlobales[personas[0]]<3 || encuestaMenor == promediosGlobales[personas[0]], disabled:personas.length == 0}">
                            <div class="positioner__box__leftColumn__leftSide">
                                <h2 class="down">Personas</h2>
                                <i class="users icon"></i>
                            </div>
                            <div class="positioner__box__leftColumn__rightSide positioner__box__leftColumn__rightSide--bottom">
                                <!-- <i class="info circle icon"></i> -->
                                <!-- <i class="info circle icon" @click="nextPage($event,personas[0],personas[1])"></i> -->
                                <i v-if="personas.length > 0" class="info circle icon" @click="nextPage($event,personas[0],personas[1])"></i>
                            </div>
                        </div>

                        <!-- Producto -->
                        <div class="positioner__box positioner__box__rightColumn" v-bind:class="{alert:promediosGlobales[producto[0]]<3 || encuestaMenor == promediosGlobales[producto[0]], disabled:producto.length == 0}">
                            <div class="positioner__box__rightColumn__leftSide">
                                <!-- <i class="info circle icon"></i> -->
                                <!-- <i class="info circle icon" @click="nextPage($event,producto[0],producto[1])"></i> -->
                                <i v-if="producto.length > 0" class="info circle icon" @click="nextPage($event,producto[0],producto[1])"></i>
                            </div>
                            <div class="positioner__box__rightColumn__rightSide positioner__box__leftColumn__rightSide--bottom">
                                <h2 class="down">Producto</h2>
                                <i class="box icon"></i>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="oval"></div>
                    <div class="oval oval__border"></div> -->
                    <div class="oval" v-bind:class="{alert:promediosGlobales[acr[0]]<3 || encuestaMenor == promediosGlobales[acr[0]], disabled:acr.length == 0}">
                        <div class="caja">
                            <div class="top">
                                <img src="../img/reload.png" alt="">
                                <!-- <i class="info circle icon"></i> -->
                                <i v-if="acr.length > 0" class="info circle icon" @click="nextPage($event,acr[0],acr[1])"></i>
                            </div>
                            <div class="bottom">
                                <h2>Act. de Cambio Rapido</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- tabSection -->
        <!-- antes tenia el id='tab' -->
        <section class="main__tabSection" id="tabSurvey">
            <!-- Estandar -->
            <i class="fas fa-backspace main__tabSection__back" @click="previousPage('last')"></i>
            <div class="main__tabSection__titleContainer main__tabSection__titleContainer--surveySection">

                <div class="main__tabSection__titleContainer--surveySection__detailsContainer">

                    <!-- <h3 class="">Encuesta {{encuestaSeleccionada.nombre}}</h3> -->
                    <!-- <div class="lolo">

                        
                    </div> -->
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
                        <p class="main__tabSection__titleContainer--surveySection__detailsContainer__detail__name main__tabSection__titleContainer--surveySection__detailsContainer__detail--media__name" :class="{alert: promediosGlobales[encuestaIdSeleccionado]<=3}">{{promediosGlobales[encuestaIdSeleccionado]}}</p>
                    </div>

                    <button class="ui green button main__tabSection__titleContainer--surveySection__detailsContainer__button" :class="{disabled: promediosGlobales[encuestaIdSeleccionado]>3}" @click='reactivarEncuesta'>Reactivar Encuesta</button>
                </div>


            </div>

            <!-- Estandar -->
            <div class="main__tabSection__body main__tabSection__body--surveySection">
                <!-- <p v-for="x in preguntasEncuestaSeleccionado">{{x.pregunta}}</p> -->
                <!-- <div v-for="(x,index) in preguntasEncuestaSeleccionado">
                    <span>{{x.pregunta}}</span>
                    <p>{{respuestasEncuestaSeleccionada[index]}}</p>
                </div> -->

                <!-- <table class="ui celled table main__tabSection__body main__tabSection__body--surveySection__table" style="max-width:900px"> -->
                <table class="ui celled selectable table main__tabSection__body main__tabSection__body--surveySection__table">
                    <thead>
                        <tr>
                            <th>Pregunta</th>
                            <th>Media</th>
                            <th>Ver Detalles</th>
                        </tr>
                    </thead>
                    <tbody class="main__tabSection__body main__tabSection__body--surveySection__table__tbody">
                        <tr v-for="(x,index) in preguntasEncuestaSeleccionado" class="main__tabSection__body main__tabSection__body--surveySection__table__tbody__tr">
                            <td data-label="Name" class="main__tabSection__body main__tabSection__body--surveySection__table__tbody__tr__td">{{(index+1)+ '. ' +x.pregunta}}</td>
                            <!-- Ignorar el de abajo -->
                            <!-- <td data-label="Age">{{promediosGlobales[encuestaIdSeleccionado]}}</td> -->
                            
                            <!-- <td data-label="Age">{{promedioDePreguntasDeEncuestaSeleccionada[index]}}</td> -->
                            <td data-label="Media" style="text-align:center" class="main__tabSection__body main__tabSection__body--surveySection__table__tbody__tr__td">
                                <a class="item">
                                    <div class="ui horizontal label" :class="{green: promedioDePreguntasDeEncuestaSeleccionada[index]>3, red:promedioDePreguntasDeEncuestaSeleccionada[index]<=3}" >{{promedioDePreguntasDeEncuestaSeleccionada[index]}}</div>
                                    <!-- Kumquats -->
                                </a>
                                <!-- {{promedioDePreguntasDeEncuestaSeleccionada[index]}} -->
                            </td>

                            <!-- <td data-label="Job">{{respuestasEncuestaSeleccionada[index]}}</td> -->
                            <!-- <td data-label="Job" @click="modal(respuestasEncuestaSeleccionada[index])">{{respuestasEncuestaSeleccionada[index]}}</td> -->
                            <td data-label="Details" @click="modal(respuestasEncuestaSeleccionada[index],((index+1) + '. ' +x.pregunta))" class="main__tabSection__body main__tabSection__body--surveySection__table__tbody__tr__td--details"><i class="fas fa-info-circle"></i></td>
                            
                        </tr>
                    </tbody>
                </table>


                <div class="ui modal" id="graficas">
                <i class="close icon"></i>
                <div class="header">
                    {{preguntaActual}}
                </div>
                <div class="image content">
                    <canvas id="myChart"></canvas>
                </div>
                <div class="actions">
                    <!-- <div class="ui black deny button">Nope</div> -->
                    <div class="ui positive right labeled icon button">
                        Entendido
                        <i class="checkmark icon"></i>
                    </div>
                </div>
                </div>

            </div>

        </section>
        
    </main>
</template>

<script>
    // import { EventBus } from './../results';
    export default{
        data:function(){
            return{
                departamentos: [],
                departamentoSeleccionado: {},
                resultados: {},
                promediosGlobales:[],
                encuestaIdSeleccionado: -1,
                preguntasEncuestaSeleccionado:[],
                respuestasEncuestaSeleccionada:[],
                promedioDePreguntasDeEncuestaSeleccionada:[],
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
                acr: []
            }
        },
        created: function(){
            let este=this;
            axios.get(raiz+'api/results')
            .then( ({data}) => {
                // console.log(JSON.parse(JSON.stringify(data)))
                este.departamentos= data;
                // console.log(este.departamentos)
                // this.departamentos= JSON.parse(JSON.stringify(data));
                // console.log(this.departamentos[0]);
                
            })
            .catch((error)=>{
                console.log(error.response.data)
            });

            // Respuestas
            axios.get(raiz+'api/results/encuesta/respuestas')
            .then(function (response) {
                // handle success
                // console.log(JSON.parse(JSON.stringify(response.data)));
                este.respuestasDePreguntas= JSON.parse(JSON.stringify(response.data));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        }
        ,
        methods: {
            saludo(){
                console.log('Exito')
                // this.departamentoSeleccionado= dep;
            },
            reactivarEncuesta(){
                console.log('reactivar')
                let este= this;
                axios.get(raiz + `api/reactivar/${este.departamentoSeleccionado.id}/${este.encuestaIdSeleccionado}`)
                .then(function (response) {
                    // handle success
                    console.log(response.data==1);
                    Swal.fire({
                        type: 'success',
                        title: 'Encuestas reactivadas',
                    })
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
            },
            getData:function(){
                
                let este= this;
                axios.get(raiz + `api/getdata/${este.departamentoSeleccionado.id}`)
                .then(function (response) {
                    // handle success
                    // console.log(response.data);
                    //Aqui obtenemos los resultados, ya nos retornan los resultados, y los resultados filtrados (ademas de las encuestas disponibles)
                    este.resultados= response.data;

                    let encuestasDisponibles= este.resultados[0];
                    for (const iterator of encuestasDisponibles) {
                        // console.log(iterator.encuesta_id)
                        let i=iterator.encuesta_id;
                        let sum=0;
                        let promediosPregunta= este.resultados[2][i];
                        let numPreguntas= promediosPregunta.length;
                        // console.log(promediosPregunta.length)
                        let flag=0;
                        for (const promedioPregunta of promediosPregunta) {
                            sum= sum + promedioPregunta; // Solito este, ya sirve
                            // sum= sum + promedioPregunta; // Solito este, ya sirve
                            // console.log(promedioPregunta)

                            // Nuevo
                            if(promedioPregunta<=3){
                                flag++;
                            }
                        }
                        // console.log(flag)
                        este.flags.push(flag);
                        let x= sum/numPreguntas; // decimal

                        // este.promediosGlobales[i]= (x.toFixed(4)); // No borrar, si quieres que en los promedios globales, se agregen por id de encuesta y no seguidas, descomenta esto, y comenta el de abajo, decimal
                        este.promediosGlobales[i]= parseFloat(x.toFixed(4)); // No borrar, si quieres que en los promedios globales, se agregen por id de encuesta y no seguidas, descomenta esto, y comenta el de abajo, decimal
                        
                        // este.promediosGlobales[i]= sum/numPreguntas; // No borrar, si quieres que en los promedios globales, se agregen por id de encuesta y no seguidas, descomenta esto, y comenta el de abajo
                        // este.promediosGlobales.push(sum/numPreguntas);
                        // console.log(sum/numPreguntas)
                    }
                    // let nana= [1,2,3]
                    este.promediosGlobales[0]=10000000;
                    let caja= este.promediosGlobales;
                    // console.log(caja)
                    este.encuestaMenor= Math.min(...caja)
                    // console.log(Math.min(...caja))

                    // Aqui ya obtuvimos los resultados
                    // console.log(este.resultados[0].length)
                    let ed= este.resultados[0]; // ed = encuestas disponibles
                    for(let i=0; i<ed.length; i++){
                        // console.log(ed[i].encuesta.nombre)
                        if(ed[i].encuesta.nombre == 'Personas'){ // if(ed[i].encuesta.nombre == 'Personas'){
                            este.personas.push(ed[i].encuesta_id)
                            este.personas.push(i)
                        }

                        if(ed[i].encuesta.nombre == 'Producto'){
                            este.producto.push(ed[i].encuesta_id)
                            este.producto.push(i)
                        }

                        if(ed[i].encuesta.nombre == 'Act. Cambio Rápido'){
                            este.acr.push(ed[i].encuesta_id)
                            este.acr.push(i)
                        }

                        if(ed[i].encuesta.nombre == 'Procesos'){
                            este.procesos.push(ed[i].encuesta_id)
                            este.procesos.push(i)
                        }

                        if(ed[i].encuesta.nombre == 'Practica'){
                            este.practica.push(ed[i].encuesta_id)
                            este.practica.push(i)
                        }
                    }

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
            },
            selectedDep: function(dep,event){
                this.departamentoSeleccionado= dep;
                // console.dir(this.departamentoSeleccionado)
                let listOfDepartments=document.getElementsByClassName("main__body__listContainer__li");
                for(let dep of listOfDepartments){
                    dep.classList.remove('selected')
                }
                // console.dir()
                event.target.classList.toggle('selected')
                // event.path[0].classList.toggle('selected')
                document.getElementById('nextMain').classList.remove('disabled')
            },
            nextPage: function(event, encuestaId, index){
                // console.dir(event.srcElement.offsetParent)
                let este=this;
                let containerParent= event.srcElement.offsetParent;
                if(containerParent.classList[0] == 'main'){
                    // console.dir(containerParent.children[2].classList.toggle('show'))
                    containerParent.children[2].classList.toggle('show')
                    this.getData()
                }else{
                    let nextPage= document.getElementById('tabSurvey');


                    if(nextPage != null){
                        // SIEMENS
                        nextPage.classList.toggle('show')
                        // console.dir(nextPage.classList.toggle('show'))
                        // console.log(encuestaId)
                        if(encuestaId != undefined){
                            // console.log(encuestaId)
                            this.encuestaIdSeleccionado= encuestaId;
                            
                            axios.get(raiz + `api/results/encuesta/preguntas/${encuestaId}`)
                            .then(function (response) {
                                // handle success
                                // console.log(response.data);
                                este.preguntasEncuestaSeleccionado= response.data;
                                // AQUI
                                // console.log(index)
                                // este.encuestaSeleccionada= este.resultados[1][index];
                                // console.log(este.encuestaSeleccionada= este.resultados[0][index])
                                este.encuestaSeleccionada= este.resultados[0][index].encuesta;
                                // TECLADO
                                este.respuestasEncuestaSeleccionada= este.resultados[1][encuestaId]
                                // console.log(este.resultados[2][encuestaId])
                                este.promedioDePreguntasDeEncuestaSeleccionada= este.resultados[2][encuestaId];

                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                            .finally(function () {
                                // always executed
                            });

                            // console.log(this.resultados[1][encuestaId])
                        }

                        
                    }else{
                        console.log('Ya no hay otra pagina')
                    }
                }
            },
            previousPage: function(v){
                if(v == 'last'){
                    let section= document.getElementById('tabSurvey');
                    section.classList.toggle('show')
                    
                }
            },
            modal: function(arr,pregunta){
                console.log(arr)
                console.log(pregunta);
                this.preguntaActual= pregunta;
                $('.ui.modal').modal('show');
                // console.log(window.myChart)

                if(window.chart != undefined){
                    // console.log('Destruyendo')
                    window.chart.destroy()
                }else{
                    // console.log('es la primera')
                }

                window.ctx = document.getElementById('myChart').getContext('2d');
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




                // if(window.myChart != undefined){
                //     console.log('Destruyendo')
                //     window.myChart.destroy()
                // }else{
                //     console.log('No destruyendo')
                // }
                // window.ctx = document.getElementById('myChart');
                // window.myChart = new Chart(ctx, {
                //     type: 'pie',
                //     data: {
                //         labels: this.respuestasDePreguntas,
                //         datasets: [{
                //             label: '# of Votes',
                //             data: arr,
                //             backgroundColor: [
                //                 'rgba(255, 99, 132, 0.2)',
                //                 'rgba(54, 162, 235, 0.2)',
                //                 'rgba(255, 206, 86, 0.2)',
                //                 'rgba(75, 192, 192, 0.2)',
                //                 'rgba(153, 102, 255, 0.2)',
                //                 'rgba(255, 159, 64, 0.2)'
                //             ],
                //             borderColor: [
                //                 'rgba(255, 99, 132, 1)',
                //                 'rgba(54, 162, 235, 1)',
                //                 'rgba(255, 206, 86, 1)',
                //                 'rgba(75, 192, 192, 1)',
                //                 'rgba(153, 102, 255, 1)',
                //                 'rgba(255, 159, 64, 1)'
                //             ],
                //             borderWidth: 1
                //         }]
                //     },
                    // options: {
                    //     scales: {
                    //         yAxes: [{
                    //             ticks: {
                    //                 beginAtZero: true
                    //             }
                    //         }]
                    //     }
                    // }
                // });
            }
        }
    }


</script>

<style lang="scss">
    @import '../scss/partials/variables.scss';
    // $masterColor: orangered;
    
    .section{
        .main{
            position:relative;
            justify-content: center;
            align-content: flex-start;
            overflow-x: hidden;
            overflow-y: auto;
            @media screen and (min-width: $large) {
                overflow-y: auto; // antes hidden
                // overflow-y: hidden;
            }

            // background: blue;
            flex-wrap: wrap;
            flex-direction: column;
            &__titleContainer{
                width: 100%;
                display: flex;
                justify-content: center;
                padding: 3em;
                &__title{
                    font-size: 2em

                }
            }

            &__body{
                width: 100%;
                flex: 1 1 auto;
                // background: tomato;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                &__listContainer{ // ul
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    width: 20em;
                    max-height: 50em;
                    overflow: auto;
                    // background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
                    margin-bottom: 4em;
                    background-color: white;
                    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

                    &__li{
                        // background: blue;
                        font-size: 1em;
                        padding: 1.5em;
                        cursor: pointer;
                        color: black;
                        background: none;
                        transition: all $masterTime;
                        &:hover{
                            background: $masterColor;
                            color: white;
                        }

                        &.selected{
                            background-color: $masterColor;
                            color: white;
                        }
                    }
                }
            }
        }
        .header{
            // background-color: orangered;
            display: none;
        }
    }

    @import '../scss/partials/tabSection.scss';
    @import '../scss/resultsImp.scss';
    
</style>