import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PlusSingleDigit from '@/views/PlusLayout/SingleDigit/SingleDigitLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/PlusSingleDigit',
      name: 'PlusSingleDigit',
      component: PlusSingleDigit
    }
  ]
})
