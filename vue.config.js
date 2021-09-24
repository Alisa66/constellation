/*
 * @Author: your name
 * @Date: 2021-09-14 11:45:01
 * @LastEditTime: 2021-09-14 14:43:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\vue.config.js
 */

module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://web.juhe.cn',
                ws:true,
                secure:false,//不检查https
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}
