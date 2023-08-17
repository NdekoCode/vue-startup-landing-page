<script lang="ts" setup>
import c1DataAnalysis from '@/assets/images/c1-data-analysis.png'
import c1Stats from '@/assets/images/c1-stats.png'
</script>
<template>
  <section class="py-20 bg-white">
    <div
      class="container flex flex-col-reverse flex-wrap justify-around px-5 py-10 gap-x-10 lg:flex-nowrap lg:flex-row"
    >
      <div class="max-w-max">
        <div class="relative flex-center">
          <img :src="c1DataAnalysis" alt="c1 Data Analysis" class="shadow-lg w-96" />
          <img
            :src="c1Stats"
            alt="c1 Data Analysis"
            class="absolute w-64 shadow-lg -right-10 bottom-20"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute rotate-180 bottom-10 w-36 -left-1 xl:left-20 lg:left-0 lg:bottom-0"
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
        </div>
      </div>
      <div class="py-3 lg:flex md:items-center md:justify-center">
        <div class="max-w-lg space-y-8">
          <h2 class="text-4xl font-medium">Communicative and fast data processing</h2>
          <p class="text-sm">
            Importance of data processing includes better increased productivity and profits,
            target, right decisions, more accurate and reliable.
          </p>
          <a href="#" class="inline-block text-sm text-gray-600 hover:underline"
            >Make your first Sale</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
