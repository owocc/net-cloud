<template>
  <NuxtLink :to="props.to" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
    {{ props.text }}
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';
interface LinkProps {
  to: RouteLocationRaw
  text?: string
}
const props = defineProps<LinkProps>()
</script>
