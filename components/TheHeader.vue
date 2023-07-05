<script setup lang="ts">
import { title } from '../config/app.json'

const { locale, setLocale } = useI18n()
const menu = ref(false)

const toggleMenu = () => {
  menu.value = !menu.value
}

const closeMenu = () => {
  menu.value = false
}
</script>

<template>
  <header :class="{ activated: menu}">
    <div class="inherit-display-flex-properties">
      <NuxtLink
        id="logo"
        to="/"
        @click="closeMenu()"
      >
        {{ title }}
      </NuxtLink>
      <nav>
        <ContentNavigation v-slot="{ navigation }">
          <ul class="bigScreen">
            <li v-for="link of navigation" :key="link._path">
              <NuxtLink :to="link._path">{{ $t( link.title.toLowerCase() ) }}</NuxtLink>
            </li>
          </ul>
          <div class="burger-item mobileScreen" @click="toggleMenu()">
            <div class="burger four" :class="{ activated: menu}">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </ContentNavigation>
      </nav>
    </div>
    <ContentNavigation v-slot="{ navigation }">
      <ul id="navigation" class="mobileScreen">
        <li v-for="link of navigation" :key="link._path">
          {{ link.title }}
          <NuxtLink :to="link._path" @click="toggleMenu()">{{ $t( link.title.toLowerCase() ) }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </header>
</template>

<style lang="scss" scoped>
/**
 * Special Thanks for Álvaro's Rocket Burger Menu
 * @author @alvarotrigo
 * @see https://codepen.io/alvarotrigo/pen/yLbJxap
 * @todo add artist to resoureces persons
 */
.burger-item {
  width: calc(33% - 30px);
  padding: 10px;
  padding-right: 0; }

nav {
  justify-content: flex-end;
  align-items: center;
  line-height: 1;

  > ul {
    list-style-type: none;
    padding: 0;
    margin: 0.35rem;
  }

  li {
    padding: 0 1rem;
  }

  a {
    color: var(--color-navigation-link);

    &:after {
      content: '';
      position: relative;
      display: block;
      background-color: var(--color-link-hover);
      width: 0;
      height: var(--navigation-underline-thickness);
      margin: 0 auto;
      top: 0.75rem;
      color: var(--color-link);
      transition: width var(--transition-duration-avg),
                  color var(--transition-duration-avg),
                  background-color var(--transition-duration-avg);
    }

    &:hover {
      color: var(--color-link);

      &:after {
        width: 80%;
        background-color: var(--color-link); }
    }
  }
}

.burger {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  width: var(--burger-width);
  height: var(--burger-height);
  padding: var(--burger-thickness);
  cursor: pointer;
  overflow: hidden;
  
  span {
    width: 100%;
    height: var(--burger-thickness);
    background-color: var(--burger-color);
    transition: all 0.25s; }
  
  &.activated {
    span {
      background-color: var(--burger-activated-color); }
  }
////////////////////////////////////////////////////////////////////////////
// BURGER FOUR
////////////////////////////////////////////////////////////////////////////
  &.four {
    &.activated {
      span {
        &:nth-child(1),
        &:nth-child(3) {
          width: 80%; }
        &:nth-child(2) {
          width: 50%;
          transform: translateX(100%); }
      }
    }
  }
}

.btn-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

button {
  position: absolute;
}

/* Style the list */
ul.pagination-breadcrumb {
  padding-left: 2rem;
  list-style: none;
  background-color: #eee;
  height: 6.5vh;
  width: 100vw;
  position: relative;
  top: 5rem;
}

/* Display list items side by side */
ul.pagination-breadcrumb li {
  display: inline;
  font-size: 18px;
}

/* Add a slash symbol (/) before/behind each list item */
ul.pagination-breadcrumb li+li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}

/* Add a color to all links inside the list */
ul.pagination-breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
}

/* Add a color on mouse-over */
ul.pagination-breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}

.slideways-enter-active,
.slideways-leave-active {
  transition: all 0.25s ease-out;
}

.slideways-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slideways-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.open-gate-leave-to,
.open-gate-enter-from {
  transition: all var(--transition--duration-min);
}

.open-gate-enter-from {
  box-shadow: 0 0 0 0;
}
.open-gate-leave-to {
  box-shadow: 0 75px 168px 10px;
}
</style>
