<template>
  <VCard v-for="project in projects">
    <VCardTitle>{{ project.name }}</VCardTitle>
  </VCard>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { ProjectListViewModel } from "build-it-better-shared";
import { projectApi } from "@/api";

import { functions } from "@/services/firebase_app";
import { httpsCallable } from "firebase/functions";

const projects = ref<ProjectListViewModel[]>([]);

async function refresh_projects(): Promise<void> {
  // Logic to init the app
  try {
    // projects.value = await projectApi.List();

    debugger;
    const listP = httpsCallable<object, object>(
      functions,
      "project_list"
    );
    const crest = await listP();
    crest.data;

  } catch (error) {
    alert(error);
  }
}

refresh_projects();
</script>
