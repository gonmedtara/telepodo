<template>
  <div class="reset-password">
    <el-card class="reset-password-form">
      <h2>Initialisation de mot de passe :</h2>
      <el-form
        :model="dynamicValidateForm"
        label-width="auto"
        label-position="top"
      >
        <el-form-item prop="email" label="Email">
          <el-input v-model="dynamicValidateForm.email" />
        </el-form-item>
        <el-form-item>
          <router-link class="text-color-4" to="/singin"
            >Se connecter ?</router-link
          >
        </el-form-item>
        <el-form-item class="m-0">
          <el-button class="btn-cl-color-4">Envoyer le code</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ResetPassword",
  data() {
    return { dynamicValidateForm: { email: "" } };
  },
});
</script>
