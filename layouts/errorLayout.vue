<template>
  <div>
    <div id="wrapper">
      <div class="container">
        <div id="detail" class="row section content">
          <Nuxt />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/layouts/sections/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>
