<script setup lang="ts">
import type { IFooter } from '@/utilities/types'
import type { PropType } from 'vue'

const { footerItem } = defineProps({
  footerItem: Object as PropType<IFooter>
})
</script>
<template>
  <div class="text-white">
    <h5 class="mb-5 text-base font-medium">{{ footerItem?.title }}</h5>
    <ul>
      <li v-for="(item, index) of footerItem?.items" :key="index" class="mb-4 text-sm">
        <a href="#" class="hover:underline">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
