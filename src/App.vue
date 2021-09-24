<!--
 * @Author: your name
 * @Date: 2021-09-14 11:39:04
 * @LastEditTime: 2021-09-23 15:54:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\App.vue
-->
<template>
  <div id="app">
    <my-header> 星空物语</my-header>
   <nav-bar />
   <error-tip/>
    <router-view v-slot="{ Component }" v-if="!errorCode">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <tab />
  </div>
</template>
<script>
import MyHeader from "@/components/Header";
import Tab from "@/components/Tab";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import {  computed, watch } from "vue";
import NavBar from '@/components/NavBar';
import ErrorTip from '@/components/ErrorTip'
export default {
  components: { MyHeader, Tab ,NavBar,ErrorTip},
  setup() {
    const store = useStore(),
           state = store.state, 
          router = useRouter();
    router.push("/");
    store.commit("setFiled", "today");
    watch(
      () => {
        return router.currentRoute.value.name;
      },
      (value) => {
        store.commit("setFiled", value);
      }
    );

    return {
      errorCode: computed(()=> state.errorCode)
    }
   
  },
};
</script>

<style lang="scss" scoped></style>
