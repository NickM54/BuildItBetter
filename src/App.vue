<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
import { setBaseURL } from "@/services/axios";
setBaseURL("https://builtitbetterapi-aqakcwhcbdf6gdcu.eastus2-01.azurewebsites.net/api")
</script>
