<template>
  <VCard v-for="project in projects">
    <VCardTitle>{{ project.name }}</VCardTitle>
  </VCard>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { ProjectListViewModel } from "build-it-better-shared";
import { projectApi } from "@/api";

const projects = ref<ProjectListViewModel[]>([]);

async function refresh_projects(): Promise<void> {
  // Logic to init the app
  try {
    projects.value = await projectApi.List();
  } catch (error) {
    alert(error);
  }
}

refresh_projects();
</script>
