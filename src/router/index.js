import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ViewMap from '@/components/ViewMap'
import Error404 from '@/components/Error404'

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
    },
    {
      path: '*',
      name: '404',
      component: Error404
    }
  ]
})
