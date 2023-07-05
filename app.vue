<script setup lang="ts">
import { title } from './config/app.json'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${title}` : title;
  },
  bodyAttrs: {
    "app-name": title
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
