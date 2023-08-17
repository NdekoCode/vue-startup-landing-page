<script setup lang="ts">
import DataProcess from '@/components/DataProcess.vue'
import FooterMain from '@/components/FooterMain.vue'
import HeaderMain from '@/components/HeaderMain.vue'
import Payment from '@/components/Payment.vue'
import Pricing from '@/components/Pricing.vue'
import System from '@/components/System.vue'
import Testimonials from '@/components/Testimonials.vue'
</script>

<template>
  <header-main />
  <main>
    <data-process />
    <payment />
    <system />
    <testimonials />
    <pricing />
  </main>
  <footer-main />
</template>
