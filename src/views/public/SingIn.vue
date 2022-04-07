<template>
  <div class="sing-in">
    <el-card class="sing-in-form">
      <h2>Connection :</h2>
      <el-form
        :model="dynamicValidateForm"
        label-width="auto"
        label-position="top"
      >
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
        <el-form-item>
          <router-link class="text-color-4" to="/singup"
            >Créer un nouveau compte</router-link
          >
          <el-divider direction="vertical" border-style="dashed" />

          <router-link class="text-color-4" to="/resetpassword"
            >Mot de passe oublié</router-link
          >
        </el-form-item>
        <el-form-item class="m-0">
          <el-button class="btn-cl-color-4" @click="singin"
            >Se connecter</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SingIn",
  data() {
    return { dynamicValidateForm: { email: "", password: "" } };
  },
  methods: {
    singin() {
      this.$router.push("/");
    },
  },
});
</script>
