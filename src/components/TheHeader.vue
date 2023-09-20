<script setup>
import { isPageValid } from '../validator';
import TheLogo from './TheLogo.vue';
import TheHeaderProgress from './TheHeaderProgress.vue';
import { PAGE_PROGRESS, PAGE_TIMELINE } from '../constants';
const emit = defineEmits({
  navigate: isPageValid
});
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b p-3 bg-gray-200">
    <TheLogo @click="emit('navigate', PAGE_TIMELINE)" />
    <TheHeaderProgress @click="emit('navigate', PAGE_PROGRESS)" />
  </header>
</template>
