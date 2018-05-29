import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/Main'

Vue.use(Router)
Vue.use(VueMaterial)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
