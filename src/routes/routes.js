
import { createRouter, createWebHashHistory } from 'vue-router';
import Bienvenidos from '../components/bienvenidos.vue';
import Habitaciones from '../components/habitaciones.vue';
const routes=[
    {path:'/',component:Bienvenidos},
    {path:'/habitaciones',component:Habitaciones}
  
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})