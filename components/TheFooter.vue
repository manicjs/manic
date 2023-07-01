<script setup lang="ts">
const identities = [
  {
    link: 'https://github.com/manicjs/manic',
    target: '_blank',
    icon: 'zmdi-github-alt'
  }, {
    link: 'https://twitter.com/manicjsorg/',
    target: '_blank',
    icon: 'zmdi-twitter'
  }
]
</script>

<template>
  <footer>
    <ul
      style="display: flex; justify-content: space-around; padding-inline-start: 0; list-style-type: none; width: 100vw; align-items: stretch;"
      class="zmdi-hc-ui"
    >
      <li
        v-for="id in identities"
        :key="id.icon"
      >
        <NuxtLink
          :to="id.link"
          :target="id.target"
        >
          <i
            class="zmdi zmdi-hc-fw zmdi-hc-4x"
            :class="id.icon"
          />
        </NuxtLink>
      </li>
    </ul>
    <p style="width: 100%; text-align: center;">Copyright &copy;  by <em><a href="https://mrisaacs.org" title="MrIsaacs - Blog">MrIsaacs</a></em></p>
  </footer>
</template>
