<script setup lang="ts">
import { pricingData } from '@/utilities/constants'
import PricingItem from './PricingItem.vue'
</script>
<template>
  <section class="py-10">
    <div class="container max-w-6xl flex-col-center">
      <div class="max-w-xl mx-auto mb-10 text-center">
        <h2 class="mb-10 text-4xl font-medium">Make the wise decision for your business</h2>
        <p class="text-sm text-gray-600">Choose from our affordable 3 packages</p>
      </div>
      <div class="grid grid-cols-1 gap-5 px-5 md:grid-cols-2 lg:grid-cols-3">
        <pricing-item v-for="pricing of pricingData" :pricing="pricing" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
