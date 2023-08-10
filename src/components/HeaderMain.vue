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
            class="text-[#d1edf5] w-72 h-72 absolute right-0 -top-0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#a)">
              <mask
                id="b"
                style="mask-type: luminance"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                class="w-72 h-72"
              >
                <path
                  d="M413.476.43.951 150.577l232.573 638.991 412.525-150.147L413.476.431Z"
                  fill="#fff"
                />
              </mask>
              <g mask="url(#b)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M211.628 364.417c8.191 56.073 26.172 110.313 63.46 134.401 44.365 28.66 117.298 22.591 166.974 13.641l.442.449s-4.199 138.402 58.828 161.627c53.317 19.648 136.725-49.764 136.725-49.764L501.332 127.993l-437.422-.331 1.074 1.738-1.386-1.407c.167-.181.27-.288.302-.321l-.46.161.158.16c-5.121 5.536-70.523 80.021 9.212 192.238 82.906 116.681 138.888 46.821 138.888 46.821l-1.341-2.172 1.271-.463ZM66.056 131.137l-1.072-1.737 1.541 1.567-.47.17Z"
                  fill="#fff"
                />
                <path
                  d="M70.5 123.5c-32.5 26-57.213 99.5-3.857 190 25.705 43.599 61.087 68.571 90.857 71.5 32.024 3.151 57.554-17.5 57.554-17.5s12.76 107.637 69.536 139c51.959 28.703 156.41 8 156.41 8s3.359 128.172 57 160.5c28.978 17.465 81-10 81-10"
                  stroke="#000"
                  stroke-width="10"
                />
              </g>
            </g>
            <path
              d="M74 127c-1.105 0 1.5 29.988-9 22l-9 132.933c0 1.112.895 2.012 2 2.012h435V625l145-.223V129.012a2.006 2.006 0 0 0-2-2.012H74Z"
              fill="#fff"
            />
            <defs>
              <clipPath id="a">
                <path fill="#fff" transform="translate(.95 .43)" d="M0 0h645.099v789.138H0z" />
              </clipPath>
            </defs>
          </svg>
          <img :src="heroImage" alt="Man hero" class="object-cover min-w-[250px] h-72" />
        </div>
      </div>
    </section>
  </header>
</template>
