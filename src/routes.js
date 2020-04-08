// import App from './App'
import Home from './components/Home.vue'
import Dashboard from './components/Dashboard.vue'
import Encuesta from './components/Encuesta.vue'
import Detalles from './components/Detalles.vue'


const routes = [
  {
    path: '/', redirect: { name: 'inicio' }
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/encuesta',
    name: 'encuesta',
    component: Encuesta,
  },
  {
    path: '/detalles',
    name: 'detalles',
    component: Detalles,
  }
  
]

export default routes
