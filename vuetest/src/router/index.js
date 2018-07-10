import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexQ from '@/components/IndexQ'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(Router);
Vue.use(iView);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index1',
      name: 'IndexQ',
      component: IndexQ
    }
  ]
})
