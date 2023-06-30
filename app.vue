<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Manic` : 'Manic';
  },
  meta: [
    { name: 'description', content: 'nuxt full static client' }
  ],
  bodyAttrs: {
    "app-name": 'Manic'
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
