<!--
 * @Author: your name
 * @Date: 2021-09-14 13:37:02
 * @LastEditTime: 2021-09-23 15:33:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\views\Month.vue
-->
<template>
  <div class="container">
    <ConsCard
      :name="tomorrowData.name"
      :allIndex="tomorrowData.all"
    />
    <ConsList :data="tomorrowData" />
  </div>
</template>

<script>
import getData from "@/service/index";
import { computed, onActivated, onMounted ,ref} from "vue";
import { useStore } from "vuex";
import ConsList from '@/components/List/Tomorrow'
export default {
  name: "Month",
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
      tomorrowData:computed(()=>state.tomorrow)
    }
  },
};
</script>

<style></style>
