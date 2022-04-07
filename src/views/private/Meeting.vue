<template>
  <div class="meeting">
    <vue-cal
      class="vuecal--blue-theme"
      style="height: 500px"
      locale="fr"
      hide-weekends
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import "vue-cal/dist/i18n/fr.js";

export default defineComponent({
  name: "Meeting",
  components: { VueCal },
});
</script>
