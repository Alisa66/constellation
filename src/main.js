/*
 * @Author: your name
 * @Date: 2021-09-14 11:39:04
 * @LastEditTime: 2021-09-23 11:22:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\main.js
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/assets/css/border.css"
import "@/assets/css/resets.css"
import "@/assets/js/common.js"

import MyPlugin from '@/components/common/'

createApp(App).use(store).use(router).use(MyPlugin).mount('#app')
