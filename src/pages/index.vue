<template>
  <VProgressCircular v-if="!initialized" indeterminate />
  <router-view v-else />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { VProgressCircular } from "vuetify/components";
import {
  googleAuthProvider,
  FirebaseAuthService,
} from "@/services/firebase_app";

const initialized = ref(false);

async function initialize(): Promise<void> {
  try {
    // Logic to init the app
    const auth = FirebaseAuthService.getAuth();

    await FirebaseAuthService.signInWithPopup(auth, googleAuthProvider);
  } catch (error) {
    alert(error);
  }
}

initialize();
</script>
