<template>
    <div class="detalles">
        <p>Estamos en detalles</p>

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