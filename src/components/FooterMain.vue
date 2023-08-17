<script lang="ts" setup>
import FooterListItem from '@/components/FooterListItem.vue'
import { footerData } from '@/utilities/constants'
</script>
<template>
  <footer class="py-16 bg-[#181818] px-5 lg:px-3">
    <div class="container max-w-6xl">
      <div
        class="p-8 rounded-md mb-20 flex-between-center gap-5 flex-wrap md:flex-nowrap bg-[#d1edf5]"
      >
        <h2 class="max-w-md text-3xl">Grow your business fast with Sark Sass Landing.</h2>
        <a
          href="#"
          class="inline-block px-5 py-3 text-sm text-center text-white transition-colors duration-300 bg-gray-900 border border-transparent rounded-lg md:px-8 lg:px-10"
          >Download Sark Now</a
        >
      </div>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <footer-list-item v-for="footerItem of footerData" :footerItem="footerItem" />
      </div>
    </div>
  </footer>
</template>
