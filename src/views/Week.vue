<!--
 * @Author: your name
 * @Date: 2021-09-14 13:36:54
 * @LastEditTime: 2021-09-24 11:50:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\views\Week.vue
-->
<template>
  <div class="container">
    <ConsCard :name="weekData.name" :allIndex="weekData.all" />
    <ConsList :data="weekData" />
 
  </div>
</template>

<script>
import { computed, onMounted, ref ,onActivated} from "vue";
import { useStore } from "vuex";
import getData from "@/service/index";
import ConsList from "@/components/List/Week";
export default {
  name: "WeekPage",
  components: { ConsList },
  setup() {
    const store = useStore(),
      state = store.state,
      status = ref("");

    onMounted(() => {
      getData(store);
      console.log(state.filed);
      console.log(state.weekday);
       
      status.value = state.consName;
    });
    onActivated(() => {
      if (status.value !== state.consName) {
        getData(store);
        status.value = state.consName;
      }
    });
    return {
      weekData: computed(() => state.week)
    };
  },
};
</script>

<style></style>
