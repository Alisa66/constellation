<!--
 * @Author: your name
 * @Date: 2021-09-15 11:24:11
 * @LastEditTime: 2021-09-15 11:25:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\NavBar\item.vue
-->
<template>
  <div 
  class="nav-item"
  :data-index="index"
  >{{item}}

  </div>
</template>

<script>
export default {
    name:'NavItem',
    props:{
        item:String,
        index:Number
    }

}
</script>

<style>

</style>