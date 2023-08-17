<script setup lang="ts">
import { testimonialsData } from '@/utilities/constants'
import TestimonialItem from './TestimonialItem.vue'
</script>
<template>
  <section class="py-10 bg-[#f8fafc]">
    <div class="container max-w-6xl flex-col-center">
      <div class="max-w-xl mx-auto mb-10 text-center">
        <h2 class="mb-10 text-3xl">See what our customers are saying</h2>
        <p class="text-sm text-gray-600">2,157 people have said how good we are</p>
      </div>
      <div class="grid max-w-5xl grid-cols-1 gap-20 mx-auto lg:grid-cols-2">
        <testimonial-item v-for="testimonial of testimonialsData" :testimonial="testimonial" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
