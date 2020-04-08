<template>
    <div class="encuestas">
        <!-- <p>Estamos en Encuestas</p> -->
        <div class="encuestas__wrapper">
            <!-- <div class="main__tabSection__titleContainer">
                <h3 class="main__tabSection__titleContainer__title">Departamento de {{departamentoSeleccionado.nombre}}</h3>
            </div> -->

            <!-- Estandar -->
            <div class="encuestas__wrapper__encuestas-container">
                <div class="main__tabSection__body main__tabSection__body--surveysSection">

                    <div class="main__tabSection__body--surveysSection__surveysContainer" id="kleenex">
                        <!-- pollo -->
                        <div class="positioner positioner--top">




                            <!-- Practica -->
                            <div class="positioner__box positioner__box__leftColumn" @click="nextPage(practica[0],practica[1])" v-bind:class="{verde: promediosGlobales[practica[0]]>minus && flags[practica[1]]==0,rojo: promediosGlobales[practica[0]] == encuestaMenor, amarillo: practica[3] == 1, amarillo: flags[practica[1]] == indicadorMasAlto}">
                                <!-- amarillo: practica[3] == 1, amarillo: flags[practica[1]] == indicadorMasAlto} -->
                                <!-- <p>{{promediosGlobales[practica[0]] == encuestaMenor}} {{flags[practica[1]] == indicadorMasAlto}}}</p> -->
                                <div class="positioner__box__leftColumn__leftSide">
                                    <i class="clipboard list icon"></i>
                                    <h2 class="up">Practica</h2>
                                    <p class="info info__media">La media es: {{promediosGlobales[practica[0]]}}</p>
                                    <p class="info info__indicador">Indicadores: {{flags[practica[1]]}}</p>
                                </div>
                                <div class="positioner__box__leftColumn__rightSide positioner__box__leftColumn__rightSide--top">
                                    <!-- <i v-if="practica.length > 0" class="info circle icon" @click="nextPage(practica[0],practica[1])"></i> -->
                                    <i v-if="practica.length > 0" class="info circle icon"></i>
                                </div>
                            </div>


                            <!-- Procesos -->
                            <div class="positioner__box positioner__box__rightColumn" @click="nextPage(procesos[0],procesos[1])" v-bind:class="{verde: promediosGlobales[procesos[0]]>minus && flags[procesos[1]]==0,rojo: promediosGlobales[procesos[0]] == encuestaMenor, amarillo: procesos[3] == 1, amarillo: flags[procesos[1]] == indicadorMasAlto}">
                                <div class="positioner__box__rightColumn__leftSide">
                                    <!-- <i v-if="procesos.length > 0" class="info circle icon" @click="nextPage(procesos[0],procesos[1])"></i> -->
                                    <i v-if="procesos.length > 0" class="info circle icon"></i>
                                </div>
                                <div class="positioner__box__rightColumn__rightSide positioner__box__leftColumn__rightSide--top">
                                    
                                    <i class="cog icon"></i>
                                    <h2>Procesos</h2>
                                    <p class="info info__media">La media es: {{promediosGlobales[procesos[0]]}}</p>
                                    <p class="info info__indicador">Indicadores: {{flags[procesos[1]]}}</p>
                                </div>

                            </div>



                        </div>

                        <div class="positioner positioner--bottom">



                            <!-- Personas -->
                            <div class="positioner__box positioner__box__leftColumn" @click="nextPage(personas[0],personas[1])" v-bind:class="{verde: promediosGlobales[personas[0]]>minus && flags[personas[1]]==0,rojo: promediosGlobales[personas[0]] == encuestaMenor, amarillo: personas[3] == 1, amarillo: flags[personas[1]] == indicadorMasAlto}">
                                <div class="positioner__box__leftColumn__leftSide">
                                    <h2 class="down">Personas</h2>
                                    <i class="users icon"></i>
                                    <p class="info info__media">La media es: {{promediosGlobales[personas[0]]}}</p>
                                    <p class="info info__indicador">Indicadores: {{flags[personas[1]]}}</p>
                                </div>
                                <div class="positioner__box__leftColumn__rightSide positioner__box__leftColumn__rightSide--bottom">
                                    <!-- <i v-if="personas.length > 0" class="info circle icon" @click="nextPage(personas[0],personas[1])"></i> -->
                                    <i v-if="personas.length > 0" class="info circle icon"></i>
                                </div>
                            </div>





                            <!-- Producto -->
                            <div class="positioner__box positioner__box__rightColumn" @click="nextPage(producto[0],producto[1])" v-bind:class="{verde: promediosGlobales[producto[0]]>minus && flags[producto[1]]==0,rojo: promediosGlobales[producto[0]] == encuestaMenor, amarillo: producto[3] == 1, amarillo: flags[producto[1]] == indicadorMasAlto}">
                                <div class="positioner__box__rightColumn__leftSide">
                                    <!-- <i v-if="producto.length > 0" class="info circle icon" @click="nextPage(producto[0],producto[1])"></i> -->
                                    <i v-if="producto.length > 0" class="info circle icon"></i>
                                </div>
                                <div class="positioner__box__rightColumn__rightSide positioner__box__leftColumn__rightSide--bottom">
                                    <h2 class="down">Producto</h2>
                                    <i class="box icon"></i>
                                    <p class="info info__media">La media es: {{promediosGlobales[producto[0]]}}</p>
                                    <p class="info info__indicador">Indicadores: {{flags[producto[1]]}}</p>
                                </div>
                            </div>



                        </div>


                        <div class="oval" @click="nextPage(acr[0],acr[1])" v-bind:class="{verde: promediosGlobales[acr[0]]>minus && flags[acr[1]]==0,rojo: promediosGlobales[acr[0]] == encuestaMenor, amarillo: acr[3] == 1, amarillo: flags[acr[1]] == indicadorMasAlto}">
                            
                            <div class="caja">
                                <div class="bottom">
                                    <h2>Act. de Cambio Rapido</h2>
                                </div>
                                <div class="top">
                                    <img src="../img/reload.png" alt="">
                                    <!-- <i v-if="acr.length > 0" class="info circle icon" @click="nextPage(acr[0],acr[1])"></i> -->
                                    <i v-if="acr.length > 0" class="info circle icon"></i>
                                </div>
                            </div>

                            <div class="infobox">
                                <p class="infobox__info infobox__media">La media es: {{promediosGlobales[acr[0]]}}</p>
                                <p class="infobox__info infobox__indicador">Indicadores: {{flags[acr[1]]}}</p>
                            </div>
                            
                        </div>


                    </div>
                </div>          
                
            </div>

            <div class="main__tabSection__body--surveysSection__surveysColorLegend encuestas__wrapper__descriptionsColorsContainer">

                <div class="main__tabSection__body--surveysSection__surveysColorLegend__block">

                    <div class="main__tabSection__body--surveysSection__surveysColorLegend__block__des">
                        <div class="color-bg color-bg--rojo"></div>
                        <p class="description">Rojo: Factor con media mas baja</p>
                    </div>

                    <div class="main__tabSection__body--surveysSection__surveysColorLegend__block__des">
                        <div class="color-bg color-bg--amarillo"></div>
                        <p class="description">Amarillo: Factor con indicador mas alto</p>
                    </div>

                </div>

                <div class="main__tabSection__body--surveysSection__surveysColorLegend__block main__tabSection__body--surveysSection__surveysColorLegend__block--2">
                    <div class="main__tabSection__body--surveysSection__surveysColorLegend__block__des">
                        <div class="color-bg color-bg--verde"></div>
                        <p class="description">Verde: Media mayor a 3 e indicadores en 0</p>
                    </div>

                    <div class="main__tabSection__body--surveysSection__surveysColorLegend__block__des">
                        <div class="color-bg color-bg--azul"></div>
                        <p class="description">Azul: Indicador mayor a 0 pero menor que amarillo</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
    
</template>

<script>
export default {
    name: 'Encuesta',
    created(){
        this.$store.commit('setActualView', 'encuestas')
    },
    data(){
        return {
            welcome: 'Bienvenido'
        }
    },
    computed: {
        departamentoSeleccionado(){
            return this.$store.getters.getDepartamentoSeleccionado
        },
        promediosGlobales(){
            return this.$store.getters.getPromediosGlobales
        },
        practica(){
            return this.$store.getters.getPractica
        },
        procesos(){
            return this.$store.getters.getProcesos
        },
        personas(){
            return this.$store.getters.getPersonas
        },
        producto(){
            return this.$store.getters.getProducto
        },
        acr(){
            return this.$store.getters.getacr
        },
        minus(){
            return this.$store.getters.getMinus
        },
        flags(){
            return this.$store.getters.getFlags
        },
        encuestaMenor(){
            return this.$store.getters.getEncuestaMenor
        },
        indicadorMasAlto(){
            return this.$store.getters.getIndicadorMasAlto
        }
        
    },
    methods: {
        nextPage(encuestaId, index){
            // console.log(encuestaId)
            if(encuestaId==undefined || index==undefined){
                console.log('No disponible')
            }else{
                console.log(index + " " + encuestaId)
                this.$store.commit('setDataForDetalles', { encuestaId: encuestaId, index })
                this.$router.push({name:'detalles'})
            }
            
        }
        
    }
}
</script>>

<style lang="scss" scoped>
@import '../scss/partials/variables';

.encuestas{
    // background: red;
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    &__wrapper{
        // background: blue;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        &__encuestas-container{
            width: 800px;
            position: relative;
            // background-color: purple;
        }

        &__descriptionsColorsContainer{
            width: 100%;
            // background-color: green;
        }
    }

}


@mixin data-section(){
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    // align-items: center;
    // background: blue;
    width: 11em;
    margin-left: 4em;
    h2{
        margin: 0;
        color: white;
        &.up{
            // color: red;
        }
        &.down{
            margin-bottom: 1em; 
        }
    }
    i{
        width: 100%;
        margin: 0;
        font-size: 4em;
        color: white;
    }

    .info{
        color: white;
        padding: 0;
        margin: 0;
        &__media{
        }
        &__indicador{
        }

    }

}

@mixin info-section(){
    width: 8em;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon{
        cursor: pointer;
        font-size: 2.5em;
    }
    &--top{
    }

    &--bottom{
    }
}

@mixin colors-bg(){
    &.amarillo{
        background: $amarillo;
    }
    &.rojo{
        background: $rojo;
    }

    &.verde{
        background: $verde;
    }

    &.azul{
        background: $azul;
    }
}

.positioner{
    width: 100%;
    height: 180px;
    // background: red;
    display: flex;
    justify-content: space-between;
    &--top{
        // background: blue;

    }

    &--bottom{
        // background: green;
        margin-top: 4em;
    }

    &__box{
        width: 350px;
        border-radius: 4em;
        // background: pink;
        background: $azul;
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
        overflow: hidden;
        transition: box-shadow 0.5s;
        &:hover{
            box-shadow: 0px 3px 25px -2px rgba(0,0,0,0.2),0px 10px 10px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);

        }
        cursor: pointer;

        // &.alert{
        //     background: yellow;
        // }

        

        @include colors-bg();

        &.disabled{
            background: $gris !important;
            box-shadow: none;
        }
        
        &__leftColumn{
            // background: red;
            display: flex;
            justify-content: space-between;
            &__leftSide{
                @include data-section();
            }

            &__rightSide{
                @include info-section();
            }

        }

        &__rightColumn{
            // background: red;
            display: flex;
            justify-content: space-between;
            &__leftSide{
                // background: green;
                @include info-section();
            }
            &__rightSide{
                // width: 6em;
                // background: blue;
                @include data-section();
                margin-right: 4em;
            }
        }
    }

}

.oval{
    background: $azul;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;

    .infobox{
        position: absolute;
        // display: none;
        top: 9.4em;
        &__info{
            margin: 0;
            text-align: center;
            color: white;
        }
    }
    

    // Clip
    // clip-path: ellipse(23% 15% at 50% 50%);
    // width: 600px;
    // height: 600px;

    // Border Radius
    width: 320px;
    height: 210px;
    border-radius: 50%;
    border: 10px solid #F2F7FA;

    // &.alert{
    //     background: $rojo;
    // }

    @include colors-bg();

    &.disabled{
        background: $gris !important;
        box-shadow: none;
    }

    .caja{
        // background: blue;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
        .top{
            display: flex;
            justify-content: space-around;
            align-items: center;
            // position: absolute;
            // top: 1em;
            // background: green;
            img{
                width: 36%;
            }
            i{
                color: white;
                font-size: 2.5em;
                cursor: pointer;

            }
        }

        .bottom{
            width: 10em;
            text-align: center;
            // background: blue;
            position: absolute;
            top: -1.8em;
            h2{
                color: white;
                font-size: 1.3em;
                font-family: "Lato", "Helvetica Neue", Arial, Helvetica, sans-serif;
            }
        }

    }
}

.reloadimg{
    width: 30%;
}

.info.circle.icon{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}

.main__tabSection__body--surveysSection__surveysColorLegend{
    width: 100%;
    // background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    &__block{
        display: flex;
        &--2{
            margin-top: 1.3em;
        }
        &__des{
            

            display: flex;
            align-items: center;
            margin-left: 1em;
            .color-bg{
                width: 20px;
                height: 20px;
                background: $rojo;

                &--azul{
                    background-color: $azul;
                }

                &--amarillo{
                    background-color: $amarillo;
                }

                &--verde{
                    background-color: $verde;
                }


            }
            .description{
                font-size: 1em;
                margin: 0;
                margin-left: 0.5em;
            }
        }

        }
}

</style>