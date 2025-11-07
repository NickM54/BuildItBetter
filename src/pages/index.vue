<template>
  <VProgressCircular v-if="!initialized" indeterminate />
  <router-view v-else />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { VProgressCircular } from "vuetify/components";

const initialized = ref(false);

async function initialize(): Promise<void> {
  // Logic to init the app
  try {
  } catch (error) {
    alert(error);
  }
}

initialize();
</script>
