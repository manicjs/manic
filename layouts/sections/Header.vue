<template>
  <div id="header">
    <div class="container">
      <div class="three columns">
        <div class="logo">
          <p>
            <NuxtLink :to="menu.logo.url">
              {{ menu.logo.title }}
            </NuxtLink>
          </p>
        </div>
      </div>
      <div class="nine columns">
        <div class="navbar-spacer" />
        <nav id="navbar" class="navbar">
          <ul>
            <li
              v-for="(item, index) in menu.navigation"
              :key="index"
            >
              <NuxtLink :to="item.url">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="mob nine columns u-pull-right">
        <a id="menu-bar" class="menu-bar u-pull-right">
          <span class="bar bar1" />
          <span class="bar bar2" />
          <span class="bar bar3" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menu: {
        logo: {
          title: 'nuxt-sw3cl',
          url: '/'
        },
        navigation: [{
          title: 'home',
          url: '/'
        }]
      }
    }
  }
}
</script>
