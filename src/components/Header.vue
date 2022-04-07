<template>
  <div class="header">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">Accueil</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $route.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data() {
    return {
      isCollapse: false,
    };
  },
});
</script>
