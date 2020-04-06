import Swal from 'sweetalert2'
window.Swal= Swal;
// Frameworks e Icons
const fontawesome= require('./scss/fontawesome/css/all.scss');
const semantic= require('./scss/semantic/semantic.scss');
const semanticjs=require('./js/semantic');
import Chart from 'chart.js';

// Control de los Menu del Layout del Admin
import {AdminLayout} from './js/adminLayout.js';
let al= new AdminLayout;
al.master();

// Files de la Pagina
const styles= require('./scss/results.scss');


// Axios -- Comenta el codigo especial si vas a trabajas desde VSC, descomentalo cuando lo pases al server

window.raiz='./';
// window.raiz='http://geministorm.com/admin/';

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}


// Vue

import Vue from 'vue';
import App from './components/Results.vue';

new Vue({
    render: h => h(App)
}).$mount('#main');

$('.cap').popup();