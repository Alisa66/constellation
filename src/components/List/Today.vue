<!--
 * @Author: your name
 * @Date: 2021-09-23 14:57:36
 * @LastEditTime: 2021-09-24 11:12:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\components\List\Today.vue
-->
<template>
  <div class="list">
    <ConsItem title="今日日期" :content="data.datetime" />
    <ConsItem title="配对星座" :content="data.QFriend" />
    <ConsItem title="幸运颜色" :content="data.color" />
    <ConsItem title="幸运数字" :content="data.number" />

    <Summary field="今日"  :content="data.summary" />
  </div>
</template>

<script>
export default {
  name: "TodayList",
  props: {
    data: Object,
  },
};
</script>

<style scoped lang="scss">
.list {
  padding: 0.15rem 0.1rem;
  box-sizing: border-box;
}
</style>
