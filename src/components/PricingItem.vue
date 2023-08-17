<script setup lang="ts">
import type { PropType } from 'vue'
import { type IPricing } from '../utilities/types'

const { pricing } = defineProps({
  pricing: Object as PropType<IPricing>
})
</script>
<template>
  <article class="max-w-xs p-5 border border-gray-200 rounded-md shadow shadow-gray-100">
    <p class="mb-2 text-sm font-medium text-gray-700">{{ pricing?.type }}</p>
    <strong class="block mb-5 text-4xl font-medium text-gray-700">${{ pricing?.price }}</strong>
    <p class="mb-5 text-sm text-gray-600">{{ pricing?.description }}</p>
    <a
      href="#"
      class="inline-block px-10 py-3 mb-5 text-sm text-center transition-colors duration-300 border rounded-lg hover:bg-gray-900 hover:text-white hover:border-transparent md:px-14 lg:px-20"
      :class="
        pricing?.isRecommended ? 'bg-gray-900 text-white border-transparent' : 'border-gray-600'
      "
      >{{ pricing?.textButton }}</a
    >
    <strong class="block mb-5 text-sm font-medium text-gray-700">What's included</strong>
    <ul>
      <li v-for="(including, index) of pricing?.including" :key="index" class="mb-2 text-gray-500">
        {{ including }}
      </li>
    </ul>
  </article>
</template>

<style scoped></style>
