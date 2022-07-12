<template>
  <div class="main-article two-thirds column">
    <div class="article-layer">
      <h1
        v-if="error.statusCode === 404"
        id="main-title"
        style="font-size: 5em;"
      >
        <p>{{ Error.noPage }}</p>
      </h1>
      <h1
        v-else
        id="main-title"
        style="font-size: 5em;"
      >
        <p>{{ Error.other }}</p>
      </h1>
      <p id="main-date" :title="[Error.createdAt]">
        {{ Error.createdAt }}
      </p>
      <p
        id="main-body"
        style="font-size: 3em;"
      >
        {{ Error.body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'errorLayout',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      Error: {
        noPage: '404 Not Found',
        other: 'An error occurred',
        createdAt: new Date(),
        body: 'The page you are looking for could not be found.'
      }
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
