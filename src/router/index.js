import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const home=() =>import('../views/home/home')
const category=() => import('../views/category/category')
const cart=() => import('../views/cart/cart')
const profile=() => import('../views/profile/profile')
const detail=() => import('../views/detail/detail')
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component: home
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/cart',
    component: cart
  },
  {
    path:'/profile',
    component: profile
  },
  {
    path: '/detail/:iid',
    component: detail
  }

]
const router= new VueRouter({
  routes,
  mode: 'history'
})


export default router;