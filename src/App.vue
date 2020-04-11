<template>
    <div class="app">
        <!-- <router-link :to="{ name: 'inicio' }">INICIO</router-link>
        <router-link :to="{ name: 'dashboard' }">INICIO</router-link> -->
        <!-- <p>{{actualView}}</p> -->


        <!-- <div class="ui steps">
            <div class="step">
                <i class="building outline icon" :class="{ selectedView: actualView=='departamento' }"></i>
                <div class="content">
                    <div class="title" :class="{ selectedView: actualView=='departamento' }">Departamento</div>
                    <div class="description" :class="{ selectedView: actualView=='departamento' }">Seleccione un departamento</div>
                </div>
            </div>
            <div class="step">
                <i class="sticky note outline icon" :class="{ selectedView: actualView=='dashboard' }"></i>
                <div class="content">
                    <div class="title" :class="{ selectedView: actualView=='dashboard' }">Dashboard</div>
                    <div class="description" :class="{ selectedView: actualView=='dashboard' }">Seleccione una encuesta</div>
                </div>
            </div>
            <div class="step">
                <i class="clipboard outline icon" :class="{ selectedView: actualView=='encuestas' }"></i>
                <div class="content">
                    <div class="title" :class="{ selectedView: actualView=='encuestas' }">Encuestas</div>
                    <div class="description" :class="{ selectedView: actualView=='encuestas' }">Seleccione una encuesta</div>
                </div>
            </div>
            <div class="step">
                <i class="building outline icon" :class="{ selectedView: actualView=='detalles' }"></i>
                <div class="content">
                    <div class="title" :class="{ selectedView: actualView=='detalles' }">Detalles</div>
                    <div class="description" :class="{ selectedView: actualView=='detalles' }">Seleccione una encuesta</div>
                </div>
            </div>
        </div> -->



        <div class="ui steps">
            <!-- <router-link :to="{ name: 'dashboard' }">INICIO</router-link> -->
            <router-link v-for="(step, index) in steps" :to="{ name: step.to }" class="step" :class="{ active: step.active, disabled: step.disabled}" :key="index">
                <i class="icon" :class="step.icon"></i>
                <div class="content">
                    <div class="title">{{step.title}}</div>
                    <div class="description step__description">{{step.description}}</div>
                </div>
            </router-link>

            <!-- <a class="step">
                <i class="building outline icon"></i>
                <div class="content">
                <div class="title">Dashboard</div>
                <div class="description">Seleccione una encuesta</div>
                </div>
            </a> -->
            
            <!-- <router-link :to="{ name: 'dashboard' }" class="step">
                <i class="building outline icon"></i>
                <div class="content">
                <div class="title">Dashboard</div>
                <div class="description">Seleccione una encuesta</div>
                </div>
            </router-link> 
            
            <router-link :to="{ name: 'encuesta' }" class="step">
                <div class="content">
                <div class="title">Encuestas</div>
                <div class="description">Seleccione una encuesta</div>
                </div>
            </router-link> 
            
            <router-link :to="{ name: 'detalles' }" class="step">
                <div class="content">
                <div class="title">Detalles</div>
                <div class="description">Seleccione una encuesta</div>
                </div>
            </router-link>  -->

        </div>
        <router-view class="router-view"></router-view>
    </div>
    
</template>

<script>
export default {
    name: 'App',
    created(){
        
        
    },
    data(){
        return {
            welcome: 'Bienvenido',
            arr: [1,2,3,4]
        }
    },
    computed: {
        actualView(){
            return this.$store.getters.getActualView
        },
        steps(){
            return this.$store.getters.getSteps
        }
        
    },
    methods: {
        
    }
}
</script>>

<style lang="scss" scoped>

*{
    // box-sizing: border-box !important;
}

.app{
    width: 100% !important;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
}

.selectedView{
    color: #1678C2 !important;
}

.ui.steps{
    width: 100% !important;
    // display: flex;
    // flex-wrap: wrap !important;
    .step{
        // width: 500px !important;
        // flex: 0 0 0;
        // background-color: red !important;
        // &:nth-child(odd){
        //     background: blue;
        // }
        &__description{
            // background: red;
            width: 180px;
        }
    }
}

.router-view{
    width: 100%;
}

</style>