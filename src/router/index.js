import Vue from 'vue'
import Router from 'vue-router'
import BookSearchApp from '@/components/BookSearchApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookSearchApp',
      component: BookSearchApp
    }
  ]
})
