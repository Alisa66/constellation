<!--
 * @Author: your name
 * @Date: 2021-09-23 11:12:20
 * @LastEditTime: 2021-09-23 11:42:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\components\common\ConsItem.vue
-->
<template>
<div class="cons-item">
    <div class="title">{{title}}</div>
    <div class="content">{{content ||'加载中...'}}</div>
</div>
    
</template>

<script>
export default {
name:'ConsItem',
props:{
    title:String,
    content: {
        type: [String , Number]
    } 
}
}
</script>


<style lang="scss" scoped>
  .cons-item {
    display: flex;
    flex-direction: row;
    height: .44rem;
    border: 1px solid #ddd;
    border-radius: .05rem;
    margin-bottom: .15rem;
    font-size: .16rem;
    background-color: #fff;

    .title {
      width: 1rem;
      height: .44rem;
      color: #C71585;
      text-align: center;
      line-height: .44rem;
    }

    .content {
      font-size: .16rem;
      line-height: .44rem;
      color: #666;
    }
  }
</style>