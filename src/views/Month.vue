<!--
 * @Author: your name
 * @Date: 2021-09-14 13:37:02
 * @LastEditTime: 2021-09-24 10:52:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\views\Month.vue
-->

<template>
  <div class="container">
    <ConsCard
      :name="monthData.name"
      :allIndex="Number(monthData.all)"
    />
    <ConsList :data="monthData" />
  </div>
</template>

<script>
import getData from "@/service/index";
import { computed, onActivated, onMounted ,ref} from "vue";
import { useStore } from "vuex";
import ConsList from '@/components/List/Month'
export default {
  name: "MonthPage",
  components:{ConsList}, 
  setup() {
    const store = useStore(),
           state = store.state,
           status = ref('');
    
    onMounted(() => {
      getData(store);
      status.value = state.consName;
    });
    onActivated(()=>{
      if(status.value !== state.consName){
        getData(store);
        status.value = state.consName
      }
    })
    return {
      monthData:computed(()=>state.month)

    }
  },
};
</script>

<style></style>
