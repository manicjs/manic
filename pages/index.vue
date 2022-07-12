<template>
  <div class="main-article two-thirds column">
    <SocialHead
      :title="page.title"
      :description="page.description"
      image="https://mrisaacs.org/nuxt-sw3cl/preview.png"
    />
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
import SocialHead from '~/components/SocialHead.vue'

export default {
  components: {
    SocialHead
  },
  async asyncData ({ $content }) {
    const page = await $content('README').fetch()
    return { page }
  },
  head () {
    return {
      title: this.page.title,
      meta: [
        { hid: 'description', name: 'description', content: this.page.description }
      ]
    }
  }
}
</script>
