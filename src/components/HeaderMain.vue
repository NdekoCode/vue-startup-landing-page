<script lang="ts" setup>
import logo from '@/assets/images/chat-icon.png'
import heroImage from '@/assets/images/hero-man.png'
import { features, routeLinks } from '@/utilities/constants'
const links = routeLinks
</script>
<template>
  <header class="bg-[#d1edf5]">
    <nav class="container py-4 flex-between-center">
      <div class="gap-20 flex-center">
        <a href="#"><img class="w-12" :src="logo" alt="Logo" /></a>
        <ul class="gap-5 flex-y-center">
          <li v-for="link of links">
            <a :href="link.route" class="text-[#1e3a8a] font-medium text-sm">{{ link.name }}</a>
          </li>
        </ul>
      </div>
      <a href="#" class="btn-primary">Start free trial</a>
    </nav>
    <!-- HERO SECTION -->
    <section class="container grid grid-cols-2 py-24">
      <div class="max-w-2xl col-span-2md:col-span-1">
        <h1 class="mb-5 font-medium text-7xl">
          Modern POS that makes running your business easier
        </h1>
        <ul class="mb-5">
          <li class="mb-1 flex-y-center gap-x-2" v-for="(feat, index) of features" :key="index">
            <span class="w-5 h-5 p-1 bg-white rounded-full flex-center">
              <svg class="w-4 h-4" viewBox="0 0 132.292 105.833" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#000"
                  stroke-linecap="round"
                  stroke-miterlimit="6"
                  stroke-opacity="1"
                  stroke="none"
                  style="
                    stroke-miterlimit: 6;
                    -inkscape-stroke: none;
                    paint-order: fill markers stroke;
                  "
                  d="M112.836 12.49a8.613 8.613 0 0 0-6.09 2.522l-53.97 53.97-27.231-27.23a8.613 8.613 0 0 0-12.18 0 8.613 8.613 0 0 0 0 12.182l39.41 39.41 66.15-66.15a8.613 8.613 0 0 0 0-12.182 8.613 8.613 0 0 0-6.09-2.522z"
                />
              </svg>
            </span>
            <span>{{ feat }}</span>
          </li>
        </ul>
        <form
          action=""
          method="POST"
          class="p-1 bg-white rounded-lg min-w-max w-fit"
          @submit.prevent
        >
          <input
            type="email"
            class="h-full px-2 outline-none placeholder:text-sm"
            placeholder="Enter your email"
          /><button class="text-sm capitalize btn-primary">Start free trial</button>
        </form>
        <p class="px-1 mt-1 text-sm">
          <span class="text-gray-600">Already have a account ? </span
          ><a href="#" class="text-gray-700 underline">Log In now</a>
        </p>
      </div>
      <div class="col-span-2 md:col-span-1">
        <div class="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute right-0 -top-2 w-72"
            viewBox="0 0 220.421 182.389"
          >
            <g id="shape" transform="translate(1.482)">
              <path
                id="Vector_23"
                data-name="Vector 23"
                d="M9.886,68.408C21.5,82.76,53.365,86.959,53.365,86.959s7.9,38.853,26.667,51.6c22.1,15.008,68.408,0,68.408,0s4.587,28.6,17.972,38.262c16.153,11.662,51.016,0,51.016,0V0H.03V24.928S-1.065,54.873,9.886,68.408Z"
                fill="#d1edf5"
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

          <img
            :src="heroImage"
            alt="Man hero"
            class="object-cover min-w-[250px] lg:min-w-[500px]"
          />
        </div>
      </div>
    </section>
  </header>
</template>
