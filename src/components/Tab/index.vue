<!--
 * @Author: your name
 * @Date: 2021-09-15 10:20:12
 * @LastEditTime: 2021-09-15 13:40:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\components\Tab\index.vue
-->
<template>
  <div class="tab">
    <div class="tab-item" v-for="(item, index) of tabData" :key="index">
      <tab-icon :iconText="item.iconText" :path="item.path">
        {{ item.tabText }}
      </tab-icon>
    </div>
  </div>
</template>

<script>
import TabIcon from "./Icon.vue";
import tabData from "@/data/tab";
import { reactive, toRefs } from "vue";
export default {
  name: "Tab",
  components: {
    TabIcon,
  },
  setup() {
    const state = reactive({ tabData });
    return { ...toRefs(state) };
  },
};
</script>
<style lang="scss" scoped>
.tab {

    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .44rem;
    border-top: 1px solid #ddd;
    background-color: #fff;
    .tab-item{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        height: 100%;
    }
}
</style>
