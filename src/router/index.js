import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import question from '@/components/question'
import solution from '@/components/solution'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/question',
      name: 'question',
      component: question
    },
    {
      path: '/solution',
      name: 'solution',
      component: solution
    }
  ]
})
