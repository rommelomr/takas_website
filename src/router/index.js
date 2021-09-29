import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '../views/ContactUs.vue'
import TermsAndConditions from '../views/TermsAndConditions.vue'
import InformationUsePolitics from '../views/InformationUsePolitics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contactanos',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/terminos_y_condiciones',
    name: 'TermsAndConditions',
    component: TermsAndConditions
  },
  
  {
    path: '/politicas_de_uso_de_datos',
    name: 'InformationUsePolitics',
    component: InformationUsePolitics
  },

  {
    path: '/quienes_somos',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
