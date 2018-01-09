import VueRouter from 'vue-router'

import OneContent from '../components/content/OneContent.vue'

//import TwoContent from '../components/content/TwoContent.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: OneContent
    }
    // {
    //   path: '/two',
    //   component: TwoContent
    // }
  ]
})
