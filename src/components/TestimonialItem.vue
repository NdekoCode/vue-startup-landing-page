<script setup lang="ts">
import type { PropType } from 'vue'
import { type ITestimonial } from '../utilities/types'

const { testimonial } = defineProps({
  testimonial: {
    type: Object as PropType<ITestimonial>,
    required: true
  }
})
</script>
<template>
  <article class="max-w-sm">
    <p class="max-w-xs mb-8 text-sm text-gray-700">{{ testimonial.content }}</p>
    <div class="relative mb-3">
      <button
        class="absolute w-10 h-10 text-gray-700 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg animate-pulse top-1/2 left-1/2 flex-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            fill="currentColor"
            d="M16.75 10.83L4.55 19A1 1 0 0 1 3 18.13V1.87A1 1 0 0 1 4.55 1l12.2 8.13a1 1 0 0 1 0 1.7z"
          />
        </svg>
      </button>
      <img
        :src="testimonial.image"
        :alt="testimonial.userName"
        class="max-w-sm w-full rounded-md object-cover min-h-[230px]"
      />
    </div>
    <p class="text-xs text-gray-600 flex-between-center">
      <span>{{ testimonial.userName }}</span>
      <span>{{ testimonial.post }}</span>
    </p>
  </article>
</template>

<style scoped></style>
