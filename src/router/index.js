import Vue from 'vue'
import Router from 'vue-router'
import FractionsContainer from '@/components/FractionsContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FractionsContainer',
      component: FractionsContainer
    }
  ]
})
