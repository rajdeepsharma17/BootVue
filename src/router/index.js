import Vue from 'vue'
import Router from 'vue-router'
import Hospital from '@/components/Hospital'
import HospitalProfile from '@/components/HospitalProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hospital',
      component: Hospital
    },
    {
      path: '/hospital-profile',
      name: 'HospitalProfile',
      component: HospitalProfile
    },

  ]
})
