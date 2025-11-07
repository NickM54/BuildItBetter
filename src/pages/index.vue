<template>
  <VProgressCircular v-if="!initialized" indeterminate />
  <router-view v-else />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import app from "@/services/auth";
import { VProgressCircular } from "vuetify/components";

const initialized = ref(false);

async function initialize(): Promise<void> {
  // Logic to init the app
  try {
    await app.initialize();
    await app.loginPopup();
    initialized.value = true;
  } catch (error) {
    alert(error);
  }
}

initialize();
</script>
