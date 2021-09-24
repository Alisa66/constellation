/*
 * @Author: your name
 * @Date: 2021-09-14 11:39:04
 * @LastEditTime: 2021-09-14 13:38:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\store\index.js
 */
import { createStore } from 'vuex'
import state from './state';
import mutations from './mutations'
export default createStore({
  state,
  mutations
})
