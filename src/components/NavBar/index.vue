
<template>
  <div
    class="nav-bar"
    v-nav-current="{
      className: 'nav-item',
      activeClass: 'nav-current',
      curIdx
    }"
    @click="navClick($event)"
  >
    <div class="scroll-wrapper">
      <div class="nav-wrapper" :style="`width:${navData.length * 0.8}rem`">
        <nav-item
          v-for="(item, index) of navData"
          :key="index"
          :item="item"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavItem from "./Item.vue";
import { ref } from "vue";
import { useStore } from "vuex";

import navData from "@/data/nav";
import { navCurrent } from "@/directives";
import getData from "@/service";
export default {
  name: "NavBar",
  components: { NavItem },
  directives: {
    navCurrent,
  },
  setup() {
    const curIdx = ref(0),
         store = useStore();
    const navClick = (e) => {
      const className = e.target.className;
      if (className === "nav-item") {
        const tar = e.target,
              idx = tar.dataset.index,
              consName = tar.innerText;
              
        curIdx.value = idx;
        store.commit("setconsName", consName);
        getData(store);
      }
    };
    return {
      navData,
      curIdx,
      navClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  // position: fixed;
  top: 0.44rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.38rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background-color: #fff;
  overflow: hidden;
  .scroll-wrapper {
    height: 0.46rem;
    overflow-x: auto;
    .nav-wrapper {
      display: flex;
      flex-direction: row;
      height: 0.42rem;
    }
  }
}
</style>
