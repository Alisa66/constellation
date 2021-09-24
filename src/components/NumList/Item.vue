<!--
 * @Author: your name
 * @Date: 2021-09-23 14:42:08
 * @LastEditTime: 2021-09-23 14:43:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\components\NumList\Item.vue
-->
<template>
  <div class="num-item" :style="`background-color:${item.bgColor}`">
    <h1>{{ item.title }}</h1>
    <p>{{ data[item.field] || 0 }}</p>
  </div>
</template>

<script>
export default {
  name: "NumItem",
  props: {
    item: Object,
    data: Object,
  },
};
</script>
<style lang="scss" scoped>
  .num-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .15rem 0;
    color: #666;

    h1 {
      font-size: .16rem;
    }

    p {
      font-size: .2rem;
      margin-top: .1rem;
    }
  }
</style>