<template>
    <div>
        <p>Conexion Electrica</p>
        <p>{{departamentos}}</p>
    </div>
</template>

<script>
    // import { EventBus } from './../results';
    export default {
        name:'encuestas',
        data: function(){
            return{
                saludo: 'Hola Mundo'
            }
        },
        methods: {
            saludar:function(){
                console.log(this.saludo)
            }    
        }
    }
</script>

<style lang="scss">
    
</style>