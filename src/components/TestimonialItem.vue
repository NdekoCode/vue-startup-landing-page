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
