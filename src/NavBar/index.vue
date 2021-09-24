<!--
 * @Author: your name
 * @Date: 2021-09-15 11:24:16
 * @LastEditTime: 2021-09-15 13:38:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\NavBar\index.vue
-->

<template>
  <div
    class="nav-bar"
    v-nav-current="{
      className: 'nav-item',
      activeClass: 'nav-current',
      curIdx,
    }"
    @click="navClick($event)"
  >
    <div class="scroll-wrapper">
      <div class="nav-wrapper"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
