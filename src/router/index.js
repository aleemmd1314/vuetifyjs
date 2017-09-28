import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
import Dashboard from '@/components/dashboard'
import Signup from '@/components/Signup'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }

  ]
})
