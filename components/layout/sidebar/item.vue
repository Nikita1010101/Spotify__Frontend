<script lang="ts" setup>
import { defineProps } from 'vue'

import type { LucideIcon } from './sidebar.interface'

const { Icon, path, title } = defineProps<{
  title: string
  path: string
  Icon: LucideIcon
}>()

const route = useRoute()
</script>

<template>
  <NuxtLink :to="path">
    <li>
      <Icon :color="route.path === path ? 'chartreuse' : ''" />
      <h4>{{ title }}</h4>
    </li>
  </NuxtLink>
</template>

<style lang="scss" scoped>
a {
  li {
    @apply mb-3 p-3 flex items-center rounded-full transition duration-300 hover:bg-gray-500 hover:bg-opacity-50;

    h4 {
      @apply ml-5 font-medium;
    }
  }
}
</style>
