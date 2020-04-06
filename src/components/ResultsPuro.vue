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

                <div class="main__tabSection__body--surveysSection__surveysContainer">

                    <!-- <div v-for="survey in resultados[0]" class="main__tabSection__body--surveysSection__surveysContainer__survey">
                        <p>{{survey.encuesta.nombre}}</p>
                    </div> -->


                    <!-- <div class="main__tabSection__body--surveysSection__surveysContainer__survey">
                        <i class="main__tabSection__body--surveysSection__surveysContainer__survey__icon fas fa-users"></i>
                        <div class="main__tabSection__body--surveysSection__surveysContainer__survey__description">
                            <p class="main__tabSection__body--surveysSection__surveysContainer__survey__description__title">Personas</p>
                            <p class="main__tabSection__body--surveysSection__surveysContainer__survey__description__status">Lorem Ipsum 45</p>
                        </div>
                        <div class="main__tabSection__body--surveysSection__surveysContainer__survey__control">
                            <i class="fas fa-info-circle main__tabSection__body--surveysSection__surveysContainer__survey__control__info"></i>
                        </div>
                    </div> -->

                    <div v-for="(survey, index) in resultados[0]" class="main__tabSection__body--surveysSection__surveysContainer__survey" v-bind:class="{alert:promediosGlobales[survey.encuesta_id]<3 || encuestaMenor == promediosGlobales[survey.encuesta_id]}">
                        
                        <!-- <p>{{promediosGlobales[survey.encuesta_id]}}</p> -->
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
                            <!-- <p>{{index}}</p> -->
                            <!-- CALAFIA -->
                            <!-- <p>{{encuestaMenor == 1}}</p> -->
                        </div>
                        <div class="main__tabSection__body--surveysSection__surveysContainer__survey__control">
                            <i class="fas fa-info-circle main__tabSection__body--surveysSection__surveysContainer__survey__control__info" @click="nextPage($event,survey.encuesta_id,index)"></i>
                        </div>


                    </div>

                    
                </div>

                <!-- <p>HOla</p> -->





                <!-- <button class="ui right labeled icon button" id="nextMain" @click="nextPage($event)">
                    <i class="right arrow icon"></i>Siguiente
                </button> -->
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

                    <button class="ui green button main__tabSection__titleContainer--surveySection__detailsContainer__button" :class="{disabled: promediosGlobales[encuestaIdSeleccionado]>3}">Rectivar Encuesta</button>
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


                <div class="ui modal">
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
                preguntaActual: ''
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
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                    // console.log(typeof este.resultados)
                    // console.log(este.resultados[2][1])

                    // console.log(este.resultados[0])




                    // let encuestasDisponibles= este.resultados[0];
                    // for (const iterator of encuestasDisponibles) {
                    //     // console.log(iterator.encuesta_id)
                    //     let i=iterator.encuesta_id;
                    //     let sum=0;
                    //     let promediosPregunta= este.resultados[2][i];
                    //     let numPreguntas= promediosPregunta.length;
                    //     // console.log(promediosPregunta.length)
                    //     for (const promedioPregunta of promediosPregunta) {
                    //         sum= sum + promedioPregunta;
                    //         // console.log(promedioPregunta)
                    //     }
                    //     este.promediosGlobales[i]= sum/numPreguntas; // No borrar, si quieres que en los promedios globales, se agregen por id de encuesta y no seguidas, descomenta esto, y comenta el de abajo
                    //     // este.promediosGlobales.push(sum/numPreguntas);
                    //     console.log(sum/numPreguntas)
                    // }




                    // Este de abajo, listo
                    // let numEncuestas= este.resultados[0].length;

                    // // console.log('Numero de encuestas'+ numEncuestas)
                    // for(let i=1; i<=numEncuestas; i++){
                    //     // console.log(este.resultados[2][i])
                    //     let sum=0;
                    //     let promediosPregunta= este.resultados[2][i];
                    //     let numPreguntas= promediosPregunta.length;
                    //     // console.log(promediosPregunta.length)
                    //     for (const promedioPregunta of promediosPregunta) {
                    //         sum= sum + promedioPregunta;
                    //         // console.log(promedioPregunta)
                    //     }
                    //     // console.log('Agregare al array promediosGlobales index #:'+i)
                    //     este.promediosGlobales[i]= sum/numPreguntas;
                    //     console.log(sum/numPreguntas)
                    // }



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
                    let nextPage= containerParent.nextElementSibling;
                    // console.dir(nextPage)
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
                            labels: this.respuestasDePreguntas,
                            datasets: [{
                                label: 'Pregunta',
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.5)',
                                    'rgba(54, 162, 235, 0.5)',
                                    'rgba(255, 206, 86, 0.5)',
                                    'rgba(75, 192, 192, 0.5)',
                                    'rgba(153, 102, 255, 0.5)',
                                    'rgba(255, 159, 64, 0.5)'
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
    
</style>