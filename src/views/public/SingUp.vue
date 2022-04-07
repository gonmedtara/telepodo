<template>
  <div class="sing-up">
    <el-card class="sing-up-form">
      <h2>Création du compte :</h2>
      <el-form
        :model="dynamicValidateForm"
        label-width="auto"
        label-position="top"
        size="small"
      >
        <el-form-item prop="name" label="Name">
          <el-input v-model="dynamicValidateForm.name" />
        </el-form-item>
        <el-form-item prop="email" label="Email">
          <el-input v-model="dynamicValidateForm.email" />
        </el-form-item>
        <el-form-item prop="password" label="Password">
          <el-input
            v-model="dynamicValidateForm.password"
            type="password"
            :show-password="true"
          />
        </el-form-item>
        <el-form-item prop="repassword" label="Re-password">
          <el-input
            v-model="dynamicValidateForm.repassword"
            type="password"
            :show-password="true"
          />
        </el-form-item>
        <el-form-item prop="fonction" label="Fonction">
          <el-select v-model="dynamicValidateForm.fonction" size="small">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <router-link class="text-color-4" to="/singin"
            >Se connecter ?</router-link
          >
        </el-form-item>
        <el-form-item class="m-0">
          <el-button class="btn-cl-color-4">Créer votre compte</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SingUp",
  data() {
    return {
      dynamicValidateForm: {
        name: "",
        email: "",
        password: "",
        repassword: "",
        fonction: "patient",
      },
      options: [
        {
          value: "patient",
          label: "Patient",
        },
        {
          value: "doctor",
          label: "Doctor",
        },
      ],
    };
  },
});
</script>
