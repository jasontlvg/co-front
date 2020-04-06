// Frameworks e Icons
const fontawesome= require('./scss/fontawesome/css/all.scss');
const semantic= require('./scss/semantic/semantic.scss');
const semanticjs=require('./js/semantic');

// Control de los Menu del Layout del Admin
import {AdminLayout} from './js/adminLayout.js';
let al= new AdminLayout;
al.master();

// Files de la Pagina
const styles= require('./scss/index.scss');
$('.cap').popup();