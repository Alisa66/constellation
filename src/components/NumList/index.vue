<!--
 * @Author: your name
 * @Date: 2021-09-23 14:41:53
 * @LastEditTime: 2021-09-23 14:53:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\components\NumList\index.vue
-->
<template>
  <div class="num-list">
    <num-item
      v-for="(item, index) of numData"
      :key="index"
      :item="item"
      :data="data"
    />
  </div>
</template>

<script>
import NumItem from "./Item.vue";
import numData from '@/data/num'
export default {
  name: "NumList",
  props: {
    data: Object,
  },
  components: { NumItem },
  setup() {
    return {
      numData
    };
  },
};
</script>

<style lang="scss" scoped>
  .num-list {
    display: flex;
    flex-direction: row;
    margin: .15rem 0;
    padding: .1rem;
    box-shadow: .02rem .02rem .05rem #999;
  }
</style>