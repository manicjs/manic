<template>
  <div class="main-article two-thirds column">
    <SocialHead
      :title="page.title"
      :description="page.description"
      :image="'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTUuNzQ5OCAyNy4xNTUxQzUyLjUyNzcgMjEuNjE1IDQ0LjQ3MjMgMjEuNjE0OSA0MS4yNTAyIDI3LjE1NTFMNi4xMzQwNCA4Ny41MzQ2QzIuOTExOTEgOTMuMDc0OCA2LjkzOTU2IDEwMCAxMy4zODM4IDEwMEg0MC43OTc1QzM4LjA0MzggOTcuNTkzNCAzNy4wMjQxIDkzLjQzMDMgMzkuMTA3OSA4OS44NTg0TDY1LjcwMzMgNDQuMjY5NEw1NS43NDk4IDI3LjE1NTFaIiBmaWxsPSIjODBFRUMwIi8+CjxwYXRoIGQ9Ik03OC4wMDAyIDQwLjM5OTdDODAuNjY2OCAzNS44NjY4IDg3LjMzMzIgMzUuODY2OCA4OS45OTk4IDQwLjM5OTdMMTE5LjA2MSA4OS44MDFDMTIxLjcyOCA5NC4zMzM5IDExOC4zOTUgMTAwIDExMy4wNjIgMTAwSDU0LjkzODNDNDkuNjA1MiAxMDAgNDYuMjcxOSA5NC4zMzM5IDQ4LjkzODUgODkuODAxTDc4LjAwMDIgNDAuMzk5N1oiIGZpbGw9IiMwMERDODIiLz4KPC9zdmc+Cg=='"
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
