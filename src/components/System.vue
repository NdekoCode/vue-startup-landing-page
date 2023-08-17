<script lang="ts" setup>
import c3Stats from '@/assets/images/c3-pos-system.png'
import { pricingMethods } from '@/utilities/constants'
</script>
<template>
  <section class="py-20 bg-white">
    <div
      class="container flex flex-col-reverse flex-wrap justify-around px-5 py-10 gap-x-10 lg:flex-nowrap lg:flex-row"
    >
      <div class="max-w-max">
        <div class="relative flex-center">
          <img :src="c3Stats" alt="c1 Data Analysis" class="shadow-lg w-96 -right-10 bottom-20" />
        </div>
      </div>
      <div class="py-3 lg:flex md:items-center md:justify-center">
        <div class="max-w-lg space-y-8">
          <h2 class="text-4xl font-medium">Keep the power of POS in your pocket</h2>
          <p class="text-sm">
            We've seen many reasons why having a POS can provide a better user experience.
          </p>
          <ul class="mb-10 space-y-3">
            <li v-for="pricing of pricingMethods" class="mb-1 flex-y-center gap-x-2">
              <span class="w-5 h-5 p-1 text-white bg-black rounded-full flex-center"
                ><svg
                  class="w-4 h-4"
                  viewBox="0 0 132.292 105.833"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-miterlimit="6"
                    stroke-opacity="1"
                    stroke="none"
                    d="M112.836 12.49a8.613 8.613 0 0 0-6.09 2.522l-53.97 53.97-27.231-27.23a8.613 8.613 0 0 0-12.18 0 8.613 8.613 0 0 0 0 12.182l39.41 39.41 66.15-66.15a8.613 8.613 0 0 0 0-12.182 8.613 8.613 0 0 0-6.09-2.522z"
                    style="stroke-miterlimit: 6; paint-order: fill markers"
                  ></path></svg></span
              ><span>{{ pricing }}</span>
            </li>
          </ul>
          <a href="#" class="inline-block text-sm text-gray-600 hover:underline"
            >Make your first Sale</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
