<template>
  <div class="home">
    <el-container>
      <el-aside :class="{ oppened: !isCollapse, closed: isCollapse }"
        ><LeftAside @changeCollapse="changeCollapse"
      /></el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftAside from "@/components/LeftAside.vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "HomeView",
  components: { LeftAside, Header },
  data() {
    return {
      isCollapse: true,
    };
  },
  computed: {
    asideWidth(): string {
      return this.isCollapse ? "100px" : "250px";
    },
  },
  methods: {
    changeCollapse(isCollapse: boolean) {
      this.isCollapse = isCollapse;
    },
  },
});
</script>
