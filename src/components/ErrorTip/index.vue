<!--
 * @Author: your name
 * @Date: 2021-09-23 15:42:24
 * @LastEditTime: 2021-09-23 16:06:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\components\ErrorTip\index.vue
-->
<template>
  <div class="error-tip" v-if="errorCode">
      <img :src="require('../../assets/img/error.png')"
      
       alt="" />
       <p>{{errorData[errorCode]}}</p>
  </div>
</template>

<script>
import errorData from '@/data/error'
import { useStore } from 'vuex'
import { computed } from 'vue';
export default {
    name:'ErrorTip',
    setup(){
        const store = useStore();
        return {
            errorCode:computed(()=> store.state.errorCode),
            errorData
        }
    }

}
</script>
<style lang="scss" scoped>
  .error-tip {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;

    img {
      width: .5rem;
    }

    p {
      margin-top: .15rem;
      font-size: .14rem;
      color: #999;
    }
  }
</style>