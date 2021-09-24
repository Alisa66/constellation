/*
 * @Author: your name
 * @Date: 2021-09-23 11:17:28
 * @LastEditTime: 2021-09-23 11:21:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\components\common\index.js
 */

import ConsCard from "@/components/common/Card";
import ConsItem from "@/components/common/ConsItem";
import Summary from "@/components/common/Summary";
let MyPlugin = {};
MyPlugin.install = function(Vue) {
  Vue.component(ConsCard.name, ConsCard);
  Vue.component(ConsItem.name, ConsItem);
  Vue.component(Summary.name, Summary);
};
export default MyPlugin;
