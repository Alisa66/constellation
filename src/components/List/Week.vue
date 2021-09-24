<!--
 * @Author: your name
 * @Date: 2021-09-24 10:30:29
 * @LastEditTime: 2021-09-24 11:21:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\components\List\Week.vue
-->
<template>
  <div class="list">
      <ConsItem 
        title="本周日期"
        :content="data.date"
      />
       <Summary 
        field="工作"
        :content="data.job"
      />
       <Summary 
        field="健康"
        :content="data.health"
      />
     <Summary 
        field="恋爱"
        :content="data.love"
      />
       <Summary 
        field="财运"
        :content="data.money"
      />
  </div>
</template>

<script>
export default {
    name:'WeekList',
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