<!--
 * @Author: your name
 * @Date: 2021-09-24 10:47:51
 * @LastEditTime: 2021-09-24 10:49:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\components\List\Month.vue
-->
<template>
  <div class="list">
      <Summary 
        field="健康"
        :content="data.health"
      />
          <Summary 
        field="工作"
        :content="data.work"
      />
          <Summary 
        field="爱情"
        :content="data.love"
      />
          <Summary 
        field="财运"
        :content="data.money"
      />
      <Summary 
        field="本月"
        :content="data.all"
      />

  </div>
</template>

<script>
export default {
    name:'MonthList',
    props:{
        data:Object
    }


}
</script>

<style lang="scss" scoped>
  .list {
    padding: .15rem .1rem;
    box-sizing: border-box;
  }
</style>