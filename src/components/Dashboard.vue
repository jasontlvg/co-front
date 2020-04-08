<template>
    <div class="dashboard">
        {{resultados}}
        <div class="dashboard__wrapper">
            <div class="card-container" >
                <div class="card-container__card" :key="index" v-for="(encuesta, index) in encuestas">
                    <div class="card-container__title">Encuesta {{index+1}}</div>

                    <div class="card-container__buttons-container">

                        <div class="ui animated button" @click="goToEncuestas(index+1, 1)" tabindex="0">
                        <div class="visible content">Encuesta</div>
                            <div class="hidden content">
                                <i class="book icon"></i>
                            </div>
                        </div>
                        
                        <!-- <div class="ui animated button" v-if="encuesta.enTurno2" :class="{ disabled: !encuesta.turno_1 }" tabindex="0"> -->
                        <div class="ui animated button" @click="goToEncuestas(index+1, 2)" v-if="encuesta.enTurno2" :class="{ disabled: !encuesta.turno_1 }" tabindex="0">
                        <div class="visible content">Retroalimentacion</div>
                            <div class="hidden content">
                                <i class="sync icon"></i>
                            </div>
                        </div>
                        
                        <!-- <div class="ui animated button" v-if="!encuesta.enTurno2" :class="{ disabled: !(encuesta.turno_1 && encuesta.turno_2) }" tabindex="0"> -->
                        <div class="ui animated button" v-if="!encuesta.enTurno2">
                        <div class="visible content">Activar retroalimentacion</div>
                            <div class="hidden content">
                                <i class="book icon"></i>
                            </div>
                        </div>
                        
                        <div class="ui animated button"  v-if="encuesta.enTurno2" :class="{ disabled: !(encuesta.turno_1 && encuesta.turno_2) }" tabindex="0">
                        <div class="visible content">Reporte Final</div>
                            <div class="hidden content">
                                <i class="book icon"></i>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>

        </div>
        

    </div>
    
</template>

<script>
export default {
    name: 'Dashboard',
    created(){
        
        this.$store.commit('setActualView','dashboard')

        let este= this
        // Reactivar todo lo de abajo y despues comentar el 'encuestas' de data
        // this.$store.dispatch('getDashboard')
        // .then( data => {
        //     console.log(data)
        //     este.$store.commit('setDashboardData',data)
        // })
        // .catch( data => {
        //     console.log('error funcionando correctamente')
        // })
        
    },
    data(){
        return {
            welcome: 'Bienvenido',
            encuestas: [ { "encuesta": 1, "turno_1": true, "turno_2": true, "enTurno2": true }, { "encuesta": 2, "turno_1": true, "turno_2": false, "enTurno2": false } ],
            // resultados: [ [ { "encuesta_id": 1, "encuesta": { "id": 1, "nombre": "Personas", "created_at": "2019-08-03 06:04:02", "updated_at": "2019-08-03 06:04:02" } }, { "encuesta_id": 2, "encuesta": { "id": 2, "nombre": "Producto", "created_at": "2019-08-03 06:04:15", "updated_at": "2019-08-03 06:04:15" } }, { "encuesta_id": 3, "encuesta": { "id": 3, "nombre": "Act. Cambio Rápido", "created_at": "2019-08-03 06:04:46", "updated_at": "2019-08-03 06:04:46" } }, { "encuesta_id": 4, "encuesta": { "id": 4, "nombre": "Procesos", "created_at": "2019-08-03 06:05:25", "updated_at": "2019-08-03 06:05:25" } }, { "encuesta_id": 5, "encuesta": { "id": 5, "nombre": "Practica", "created_at": "2019-08-03 06:05:42", "updated_at": "2019-08-03 06:05:42" } } ], { "1": [ [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ] ], "2": [ [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ] ], "3": [ [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ] ], "4": [ [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ] ], "5": [ [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ], [ 0, 0, 0, 0, 0, 2 ] ] }, { "1": [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], "2": [ 1, 1, 1, 1, 1, 1, 1 ], "3": [ 1, 1, 1, 1, 1, 1, 1, 1 ], "4": [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], "5": [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] } ]
        }
    },
    computed: {
        // encuestas(){
        //     return this.$store.getters.getDashboardData.encuestas
        // },
        resultados(){
            return this.$store.getters.getResultados
        },
        minus(){
            return this.$store.getters.getMinus
        },
        promediosGlobales(){
            return this.$store.getters.getPromediosGlobales
        },
        flags(){
            return this.$store.getters.getFlags
        }
        
    },
    methods: {

        goToEncuestas(encuesta,turno){
            // console.log(`${encuesta} ${turno}`)
            let este= this
            this.$store.commit('setDashboardDataForGoToEncuestas', {encuesta: encuesta, turno: turno})
            this.$store.dispatch('getResultados')
            .then( response => {
                this.$store.commit('setResultados', response.data)
                let encuestasDisponibles= this.resultados[0];
                // console.log(encuestasDisponibles)

                for (const iterator of encuestasDisponibles) {
                    let i=iterator.encuesta_id;
                    let sum=0;
                    let promediosPregunta= este.resultados[2][i];
                    let numPreguntas= promediosPregunta.length;
                    let flag=0;
                    for (const promedioPregunta of promediosPregunta) {
                        sum= sum + promedioPregunta;
                        if(promedioPregunta<=este.minus){
                            flag++;
                        }
                    }
                    this.$store.commit('pushFlags',flag)
                    let x= sum/numPreguntas; // decimal
                    // este.promediosGlobales[i]= parseFloat(x.toFixed(4)); // No borrar, si quieres que en los promedios globales, se agregen por id de encuesta y no seguidas, descomenta esto, y comenta el de abajo, decimal
                    // console.log(parseFloat(x.toFixed(4)))
                    this.$store.commit('setPromediosGlobales', { i: i, data: parseFloat(x.toFixed(4)) })


                }
                // este.promediosGlobales[0]=10000000;
                this.$store.commit('setPromediosGlobales', { i:0, data: 10000000})

                let caja= este.promediosGlobales;


                // este.encuestaMenor= Math.min(...caja)
                this.$store.commit('setEncuestaMenor', Math.min(...caja))

                let ed= este.resultados[0]; // ed = encuestas disponibles
                for(let i=0; i<ed.length; i++){

                    if(ed[i].encuesta.nombre == 'Personas'){ // if(ed[i].encuesta.nombre == 'Personas'){
                        this.$store.commit('setPersonas',ed[i].encuesta_id) // originalmente aqui hay una nota, checa en el origin si lo ocupas
                        this.$store.commit('setPersonas',i)

                    }

                    if(ed[i].encuesta.nombre == 'Producto'){
                        // este.producto.push(ed[i].encuesta_id)
                        // este.producto.push(i)
                        this.$store.commit('setProducto',ed[i].encuesta_id)
                        this.$store.commit('setProducto',i)

                        // este.producto.push(0)
                        // este.producto.push(0)
                        this.$store.commit('setProducto',0)
                        this.$store.commit('setProducto',0)

                    }

                    if(ed[i].encuesta.nombre == 'Act. Cambio Rápido'){
                        // este.acr.push(ed[i].encuesta_id)
                        // este.acr.push(i)
                        this.$store.commit('setacr',ed[i].encuesta_id)
                        this.$store.commit('setacr',i)

                        // este.acr.push(0)
                        // este.acr.push(0)
                        this.$store.commit('setacr',0)
                        this.$store.commit('setacr',0)
                    }

                    if(ed[i].encuesta.nombre == 'Procesos'){
                        // este.procesos.push(ed[i].encuesta_id)
                        // este.procesos.push(i)
                        this.$store.commit('setProcesos',ed[i].encuesta_id)
                        this.$store.commit('setProcesos',i)

                        // este.procesos.push(0)
                        // este.procesos.push(0)
                        this.$store.commit('setProcesos',0)
                        this.$store.commit('setProcesos',0)
                    }

                    if(ed[i].encuesta.nombre == 'Practica'){
                        // este.practica.push(ed[i].encuesta_id)
                        // este.practica.push(i)
                        this.$store.commit('setPractica',ed[i].encuesta_id)
                        this.$store.commit('setPractica',i)

                        // este.practica.push(0)
                        // este.practica.push(0)
                        this.$store.commit('setPractica',0)
                        this.$store.commit('setPractica',0)
                    }
                }


                // este.indicadorMasAlto= Math.max(...este.flags);
                this.$store.commit('setIndicadorMasAlto', Math.max(...este.flags))
                this.$router.push({ name: 'encuesta' })

            })
            .catch( response => {
                console.log(response)
            })
            }
        
    }
}
</script>>

<style lang="scss" scoped>

.dashboard{
    // background: red;
    flex: 1 1 auto;

    &__wrapper{
        max-width: 970px;
        margin: 0 auto;
        // background: blue;
    }
}

.card-container{
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    // padding: 1em;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    // background: tomato;
    grid-gap: 1em;

    &__card{
        display: flex;
        justify-content: space-between;
        align-items: center;
        // background: blue;
        padding: 1em;
        box-shadow:0 0 2px rgba(0, 0, 0, 0.5);
    }
    
}

</style>