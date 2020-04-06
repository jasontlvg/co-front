import Vue from 'vue';
export class crudJS{
    constructor() {

    }

    acciones(link){
        let app= new Vue({
            el: '#main',
            data: {
        
            },
            methods: {
                saludo: function(l){
                    console.log('Hola'+l);
                },
                eliminar: function(id){
                    console.log('Eliminaremos: '+id);
                    console.log('A la ruta: ' + link+id)
                    $('.mini.modal.eliminar')
                    .modal({onApprove : function(){
                        // console.log('Hola'+l)
                        console.log('Eliminando!!!')
                        window.location.href = link+id;  
                    }})
                    .modal('show');
                    // console.log()
                },
                agregar: function(){
                    $('.agregar').modal('show');

                    // $('.agregar')
                    // .modal({onDeny : function(){
                    //     console.log('apretado')
                    //     $('form').form('clear')
                    //     // console.log(document.getElementsByClassName("errorValidacion")[0])

                    //     let elementosDeError= document.getElementsByClassName("errorValidacion");

                    //     for (const iterator of elementosDeError) {
                    //         iterator.style.display='none';
                    //         console.log('desapareciendo')
                    //     }

                    // }})
                    // .modal('show');
                    
                    // $('.agregar')
                    // .modal({onDeny : function(){
                    //     console.log('apretado')
                    //     $('form').form('clear')
                    //     // console.log(document.getElementsByClassName("errorValidacion")[0])

                        // let elementosDeError= document.getElementsByClassName("errorValidacion");

                        // for (const iterator of elementosDeError) {
                        //     iterator.style.display='none';
                        //     console.log('desapareciendo')
                        // }

                    // }})
                    // .modal('show');
                },
                cancelar: function(){
                    $('form').form('clear')
                    let elementosDeError= document.getElementsByClassName("errorValidacion");

                    for (const iterator of elementosDeError) {
                        iterator.style.display='none';
                        // console.log('desapareciendo')
                    }
                    // console.log('cerrando')
                }
            },
        })
    }
}