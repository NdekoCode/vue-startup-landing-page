<script lang="ts" setup>
import paymentImage from '@/assets/images/c2-cards.png'
import { paymentMethods } from '@/utilities/constants'
</script>
<template>
  <section class="py-5 bg-[#f8fafc]">
    <div
      class="container flex flex-col flex-wrap justify-around px-5 py-5 space-y-10 gap-x-10 lg:flex-nowrap lg:flex-row"
    >
      <div class="py-3 lg:flex md:items-center md:justify-center">
        <div class="max-w-lg space-y-8">
          <h2 class="text-4xl font-medium">Payment method is the easiest with many options</h2>
          <p class="text-sm">
            Credit cards are easily the most secure and safe payment method to use when you shop
            onlien
          </p>
          <ul class="mb-10 space-y-3">
            <li v-for="payment of paymentMethods" class="mb-1 flex-y-center gap-x-2">
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
              ><span>{{ payment }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="max-w-max">
        <div class="relative flex-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute top-0 w-36 -right-1 xl:-right-5 lg:right-0"
            viewBox="0 0 220.421 182.389"
          >
            <g id="shape" transform="translate(1.482)">
              <path
                id="Vector_23"
                data-name="Vector 23"
                d="M9.886,68.408C21.5,82.76,53.365,86.959,53.365,86.959s7.9,38.853,26.667,51.6c22.1,15.008,68.408,0,68.408,0s4.587,28.6,17.972,38.262c16.153,11.662,51.016,0,51.016,0V0H.03V24.928S-1.065,54.873,9.886,68.408Z"
                fill="#fff"
              />
              <g id="line" transform="translate(0.031 25.508)">
                <path
                  id="Vector_20"
                  data-name="Vector 20"
                  d="M.008,0s-.69,28.5,10.446,41.756C21.881,55.364,51.47,60.907,51.47,60.907"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-width="3"
                  stroke-dasharray="0 0"
                />
                <path
                  id="Vector_21"
                  data-name="Vector 21"
                  d="M0,0S8.549,53.607,34.314,69.485c28.305,17.444,84.926-6,84.926-6"
                  transform="translate(48.047 43.75)"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-width="3"
                  stroke-dasharray="0 0"
                />
                <path
                  id="Vector_22"
                  data-name="Vector 22"
                  d="M0,0S3.669,24.677,14.583,34.314C30.422,48.3,68.627,36.887,68.627,36.887"
                  transform="translate(148.414 114.093)"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-width="3"
                  stroke-dasharray="0 0"
                />
              </g>
            </g>
          </svg>
          <img :src="paymentImage" alt="c1 Payment Methods" class="shadow-lg w-96" />
        </div>
      </div>
    </div>
  </section>
</template>
