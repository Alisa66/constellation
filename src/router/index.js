/*
 * @Author: your name
 * @Date: 2021-09-14 11:39:04
 * @LastEditTime: 2021-09-24 10:53:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\router\index.js
 */

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'today',
    component: ()=> import('../views/Today.vue')
  },
  {
    path:'/tomorrow',
    name:'tomorrow',
    component:()=> import('../views/Tomorrow.vue')
  },
  {
    path: '/week',
    name: 'week',
    component: () => import(/* webpackChunkName: "week" */ '../views/Week.vue')
  },{
    path:'/month',
    name:'month',
    component:()=> import('../views/Month.vue')
  },
  {
    path:'/year',
    name:'year',
    component:()=>import('../views/Year.vue')  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
