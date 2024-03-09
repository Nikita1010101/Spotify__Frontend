<script lang="ts" setup>
import { Search } from 'lucide-vue-next'
import { sidebarLinks } from './sidebar.data'
</script>

<template>
  <aside class="sidebar">
    <div class="image_wrapper">
      <NuxtImg src="/logo.png" width="60" alt="Image" />
      <h1>Spotify</h1>
    </div>
    <div class="search">
      <Search :size="20" color="white" />
      <input type="text" placeholder="Search ..." />
    </div>
    <div class="menu">
      <h2>Menu</h2>
      <ul>
        <LayoutSidebarItem v-for="link of sidebarLinks" :key="link.title" v-bind="link" />
      </ul>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  .image_wrapper {
    @apply mb-14 flex items-center;

    h1 {
      @apply ml-2 text-4xl font-medium text-green-500;
    }
  }

  .search {
    @apply mb-8 px-3 py-1 flex justify-between items-center bg-gray-500 rounded-full opacity-60;

    input {
      @apply px-3 py-1.5 border-none outline-none bg-gray-500 rounded-full text-black placeholder:text-black;
    }
  }

  .menu {
    h2 {
      @apply mb-8 text-3xl font-medium;
    }
  }
}
</style>
