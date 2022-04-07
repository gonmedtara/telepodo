<template>
  <div class="advices">
    <el-card class="card card-1">
      <template #header>
        <div class="card-header">
          <span>17, juil 2022</span>
          <span>owner</span>
        </div>
      </template>
      <h2>Titre du traitement</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <el-button @click="showDialog = true">action</el-button> </el-card
    ><el-card class="card card-2">
      <template #header>
        <div class="card-header">
          <span>17, juil 2022</span>
          <span>owner</span>
        </div>
      </template>
      <h2>Titre du traitement</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <el-button @click="showDialog = true">action</el-button> </el-card
    ><el-card class="card card-3">
      <template #header>
        <div class="card-header">
          <span>17, juil 2022</span>
          <span>owner</span>
        </div>
      </template>
      <h2>Titre du traitement</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <el-button @click="showDialog = true">action</el-button>
    </el-card>
    <el-dialog v-model="showDialog" title="Tips">
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Advices",
  data() {
    return {
      showDialog: false,
    };
  },
});
</script>
