<!--
 * @Author: your name
 * @Date: 2021-09-14 11:39:04
 * @LastEditTime: 2021-09-23 15:35:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\views\Today.vue
-->
<template>
  <div class="container">
    <ConsCard :name="todayData.name" :allIndex="todayData.all" />

    <NumList :data="todayData" />
    <ConsList :data="todayData"/>
  </div>
</template>
<script>
import getData from "@/service/index";
import { computed, onActivated, onMounted ,ref} from "vue";
import { useStore } from "vuex";
import NumList from "@/components/NumList";
import ConsList from '@/components/List/Today'
export default {
  name: "TodayPage",
  components: { NumList,ConsList },
  setup() {
    const store = useStore(),
      state = store.state,
      status = ref('');
    onMounted(() => {
      getData(store);
      status.value = state.consName;
    });
    onActivated(()=>{
       if (status.value !== state.consName) {
        getData(store);
        status.value = state.consName;
      }
    })
    return {
      todayData: computed(() => state.today),
    };
  },
};
</script>

<style></style>
