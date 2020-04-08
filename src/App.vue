<template>
    <div class="app">
        <!-- <router-link :to="{ name: 'inicio' }">INICIO</router-link>
        <router-link :to="{ name: 'dashboard' }">INICIO</router-link> -->
        <!-- <p>{{actualView}}</p> -->
        <div class="ui steps">
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
        </div>
        <router-view></router-view>
    </div>
    
</template>

<script>
export default {
    name: 'App',
    created(){
        
    },
    data(){
        return {
            welcome: 'Bienvenido'
        }
    },
    computed: {
        actualView(){
            return this.$store.getters.getActualView
        }
        
    },
    methods: {
        
    }
}
</script>>

<style lang="scss" scoped>

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

</style>