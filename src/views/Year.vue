<!--
 * @Author: your name
 * @Date: 2021-09-14 11:39:04
 * @LastEditTime: 2021-09-24 10:44:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\views\Year.vue
-->
<template>
<div class="container">
  <ConsCard
    :name="yearData.name"
    :allIndex="yearData.all"
  />
  <ConsList :data="yearData" />
</div>
</template>

<script>
import ConsList from '@/components/List/Year'
import { useStore } from 'vuex'
import { computed, onActivated, onMounted ,ref} from 'vue';
import getData from '@/service/index'
export default {
  name:'YearPage',
  components:{
    ConsList
  },
  setup(){
    const store = useStore(),
          state = store.state,
          status = ref('');

          onMounted(()=>{
            getData(store),
            status.value = state.consName
          });

          onActivated(()=>{
            if(status.value !== state.consName){
              getData(store);
              status.value = state.consName
            }
          })

        return {
          yearData: computed(()=> state.year)
        }

  }

}
</script>

<style>

</style>