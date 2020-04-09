<template>
    <div class="home">

        <!-- <div class="home__header">
            <h2>Seleccione un departamento</h2>
        </div> -->
        

        <div class="home__wrapper">

            <div class="main__body">
                <ul class="main__body__listContainer">
                    <li v-bind:key="index" v-for="(dep,index) in departamentos" class="main__body__listContainer__li" @click="selectedDep(dep, $event)">{{dep.nombre}}</li>
                </ul>
                <!-- <button >Aplastar</button> -->
                <button class="ui right labeled icon button disabled main__button" id="nextMain" @click="nextPage">
                    <i class="right arrow icon"></i>Siguiente
                </button>
            </div>

        </div>
        
    </div>
    
</template>

<script>
export default {
    name: 'Home',
    created(){
        this.$store.commit('completeReset')

        this.$store.commit('setActualView', 'departamento')
        this.$store.commit('updateStepsStatus', 0)

        let este=this
        this.$store.dispatch('getDepartamentos')
        .then(data=>{
            // console.log(data)
            este.$store.commit('setDepartamentos',data)
        })
        .catch(data=>{
            console.log('error funcionando correctamente')
        })

        this.$store.dispatch('getRespuestas')
        .then( data => {
            // console.log(data)
            este.$store.commit('setRespuestas',data)
        })
        .catch( data => {
            console.log('error funcionando correctamente')
        })
        
    },
    data(){
        return {
            welcome: 'Bienvenido'
        }
    },
    computed: {
        departamentos(){
            return this.$store.getters.getDepartamentos
        },
        actualView(){
            return this.$store.getters.getActualView
        }
        
    },
    methods: {
        selectedDep: function(dep,event){
            this.$store.commit('setDepartamentoSeleccionado',dep)
            let listOfDepartments=document.getElementsByClassName("main__body__listContainer__li");
            for(let dep of listOfDepartments){
                dep.classList.remove('selected')
            }
            event.target.classList.toggle('selected')
            document.getElementById('nextMain').classList.remove('disabled')
        },
        nextPage: function(event, encuestaId, index){
            this.$router.push({ name: 'dashboard'})
        }
        
    }
}
</script>>

<style lang="scss" scoped>
@import '../scss/partials/variables.scss';

*{
    box-sizing: border-box !important;
}

.home{
    // background-color: blue;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    &__header{
        flex: 1 1 auto;
        padding: 4em;
        width: 100%;
        // background: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__wrapper{
        // background: skyblue;
        // max-width: 970px;
        flex: 7 7 auto;
        display: flex;

    }
}



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

.invisible{
    display: none;
}
</style>