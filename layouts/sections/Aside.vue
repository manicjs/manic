<template>
  <div class="one-third column">
    <a class="avatar-wrapper">
      <img class="avatar bw" alt="Nuxt Logo" src="~/assets/img/colored-logo.svg">
    </a>
    <div id="profile">
      <h2>{{ profile.title }}</h2>
      <hr>
      <div id="social-links">
        <ul class="zmdi-hc-ul">
          <li
            v-for="(link, index) in socialLinks"
            :key="index"
            class="icon"
            :class="link.icon"
          >
            <a :href="link.url" target="_blank">
              <span>{{ link.title }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      socialLinks: [{
        icon: 'github',
        title: 'nuxt-sw3cl on GitHub',
        url: 'https://github.com/MrIsaacs/nuxt-sw3cl'
      }, {
        icon: 'zmdi-globe',
        title: 'NuxtJS docs',
        url: 'https://nuxtjs.org'
      }],
      profile: {
        title: 'Links'
      }
    }
  }
}
</script>
