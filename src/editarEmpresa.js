// Frameworks e Icons
const fontawesome= require('./scss/fontawesome/css/all.scss');
const semantic= require('./scss/semantic/semantic.scss');
const semanticjs=require('./js/semantic');

// Control de los Menu del Layout del Admin
// import {AdminLayout} from './js/adminLayout.js';
// let al= new AdminLayout;
// al.master();
// al.onlyInMain();
// Files de la Pagina
const styles= require('./scss/empleados.scss');


// import Vue from 'vue';

// import {crudJS} from './js/crudJS.js';
// let cjs= new crudJS;
// cjs.acciones("./empleados/destruir/"); // Aqui esta el problema

$('.ui.search.dropdown').dropdown();

$('.ui.form')
  .form({
    fields: {
        nombre: 'empty',
        giro: 'empty',
        proceso: 'empty'
    }
  })
;

// window.abrir= function(permiso=false){
//     this.console.log(permiso)
//     if(permiso==true){
//         $('.agregar').modal('show');
//     }
// }

// window.abrir(true);

const section= document.getElementById('section');
const overlay= document.getElementById('aside-overlay');
const large=960;

const tf= function(){
        
  // Controla el comportamiento del menu, no toca NADA que sea o este dentro de el ul
  aside.classList.toggle('morfosis');
  if(innerWidth < large){
      overlay.classList.toggle('active');
  }else{
      aside.classList.toggle('width')
      section.classList.toggle('width')
  }
};

// const trigger= document.getElementById('trigger');

// trigger.addEventListener('click', tf);

$('.agregar').modal({closable : false,}).modal('show');