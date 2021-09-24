/*
 * @Author: your name
 * @Date: 2021-09-14 14:37:10
 * @LastEditTime: 2021-09-24 11:45:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\service\index.js
 */

import {getData} from './request'

export default async(store) =>{
    const consName =(store.state.consName),
          filed = store.state.filed,
          data = await getData(consName,filed);
         console.log("store.state.filed", store.state.filed);
        if(data.error_code){
            store.commit('setErrorCode',data.error_code);
            return;
        }  
        store.commit('setData',data)
} 