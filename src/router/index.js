import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ViewMap from '@/components/ViewMap'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/viewmap/:id',
      name: 'view-map',
      component: ViewMap
    }
  ]
})
