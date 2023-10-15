<template>
  <div :class="mainBoxClasses">
    <ImageHome class="w-2/5 hidden md:block" />
    <div class="md:border md:p-6 w-full md:w-2/5 rounded-md md:dark:border-gray-700 md:shadow-md">
      <NuxtPage />
    </div>
  </div>
</template>
<script lang="ts" setup>
import clsx from "clsx";

const mainBoxClasses = computed(() =>
  clsx(
    "h-screen w-full px-6 flex gap-12 pt-32 overflow-hidden",
    "dark:bg-gray-900",
    "md:items-center md:justify-around md:pt-0"
  )
);
</script>
