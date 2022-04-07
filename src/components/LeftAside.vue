<template>
  <div class="aside-c">
    <div class="aside-c-header" :class="{ 'closed-aside': isCollapse }">
      <div class="app-logo"></div>
      <div class="app-name">TP</div>
      <div class="aside-c-resize" @click="changeCollapse">
        <el-icon v-if="!isCollapse"><ArrowLeftBold /></el-icon>
        <el-icon v-if="isCollapse"><ArrowRightBold /></el-icon>
      </div>
    </div>
    <div class="aside-c-menu">
      <el-menu :collapse="isCollapse" :default-active="$route.name" router>
        <el-menu-item index="reception">
          <el-icon><Menu /></el-icon>
          <template #title>Accueil</template>
        </el-menu-item>
        <el-menu-item index="meeting">
          <el-icon><Watch /></el-icon>
          <template #title>Rendez vous</template>
        </el-menu-item>
        <el-menu-item index="folder">
          <el-icon><Folder /></el-icon>
          <template #title>Dossier médicale</template>
        </el-menu-item>
        <el-menu-item index="following">
          <el-icon><List /></el-icon>
          <template #title>Suivi</template>
        </el-menu-item>
        <el-menu-item index="advices">
          <el-icon><Reading /></el-icon>
          <template #title>Conseil</template>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  ArrowLeftBold,
  ArrowRightBold,
  Menu,
  Folder,
  Reading,
  List,
  Watch,
} from "@element-plus/icons-vue";

export default defineComponent({
  name: "LeftAside",
  components: {
    ArrowLeftBold,
    ArrowRightBold,
    Menu,
    Folder,
    Reading,
    List,
    Watch,
  },
  data() {
    return {
      isCollapse: true,
      menu: [
        {
          link: "/reception",
          label: "Accueil",
          icon: "",
        },
        {
          link: "/meeting",
          label: "Rendez vous",
          icon: "",
        },
        {
          link: "/folder",
          label: "Dossier médicale",
          icon: "",
        },
        {
          link: "/following",
          label: "Suivi",
          icon: "",
        },
        {
          link: "/advices",
          label: "Conseil",
          icon: "",
        },
      ],
    };
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
      this.$emit("changeCollapse", this.isCollapse);
    },
  },
});
</script>
