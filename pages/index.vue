<template>
  <div class="main-article two-thirds column">
    <div class="article-layer">
      <h1 id="main-title">
        <p>{{ page.title }}</p>
      </h1>
      <p id="main-date" :title="[page.createdAt]">
        {{ $moment(page.createdAt).fromNow() }}
      </p>
      <p id="main-body">
        <nuxt-content :document="page" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('README').fetch()
    return { page }
  }
}
</script>
