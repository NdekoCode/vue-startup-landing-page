<script lang="ts" setup>
import logo from '@/assets/images/chat-icon.png'
import heroImage from '@/assets/images/hero-man.png'
import heroStat1 from '@/assets/images/hero-stats-1.png'
import heroStat2 from '@/assets/images/hero-stats-2.png'
import { features, routeLinks } from '@/utilities/constants'
const links = routeLinks
</script>
<template>
  <header>
    <div class="bg-[#d1edf5]">
      <div class="container">
        <nav class="py-4 flex-between-center">
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
        <section class="grid grid-cols-2 py-24">
          <div class="max-w-full col-span-2 mb-10 lg:mb-0 lg:max-w-3xl lg:col-span-1">
            <h1 class="mb-10 font-medium text-7xl">
              Modern POS that makes running your business easier
            </h1>
            <ul class="mb-10">
              <li class="mb-1 flex-y-center gap-x-2" v-for="(feat, index) of features" :key="index">
                <span class="w-5 h-5 p-1 bg-white rounded-full flex-center">
                  <svg
                    class="w-4 h-4"
                    viewBox="0 0 132.292 105.833"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
          <div class="col-span-2 lg:col-span-1">
            <div class="relative min-w-max">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute top-0 -right-1 xl:right-20 lg:right-0 lg:-top-20 w-72"
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
                class="object-cover w-full min-w-[250px] md:w-4/5 max-h-[550px] md:min-w-[350px] rounded-lg lg:min-w-[500px]"
              />
              <img
                :src="heroStat1"
                class="absolute -right-4 lg:right-0 top-28 w-52"
                alt="Graphic"
              />
              <img
                :src="heroStat2"
                class="absolute -left-6 lg:-left-32 bottom-10 w-52"
                alt="Graphic"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- Features -->
    <section class="py-4 bg-white">
      <div class="container flex-between-center">
        <ul class="flex-wrap w-full gap-5 px-3 lg:flex-nowrap lg:justify-evenly flex-y-center">
          <li class="gap-4 flex-center">
            <span class="inline-block p-4 bg-black rounded-full flex-center">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.999 30">
                <g id="icon" transform="translate(0 0)">
                  <path
                    id="Vector"
                    d="M12.6,18.364a.97.97,0,0,1-.452-.113L.515,12.091a.968.968,0,0,1,.121-1.764L28.7.059a.966.966,0,0,1,1.148.388.973.973,0,0,1-.131,1.205L13.289,18.08A.962.962,0,0,1,12.6,18.364ZM25.248,3.383,3.343,11.4l9.083,4.808Z"
                    fill="#fff"
                  />
                  <path
                    id="Vector-2"
                    data-name="Vector"
                    d="M7.128,30a.967.967,0,0,1-.855-.515L.113,17.849a.964.964,0,0,1,.171-1.138L16.711.284A.967.967,0,0,1,17.916.152.974.974,0,0,1,18.305,1.3L8.038,29.364A.969.969,0,0,1,7.195,30ZM14.981,4.752,2.158,17.574l4.809,9.083Z"
                    transform="translate(11.637)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </span>
            <p>
              Developed with the highest care. <br />
              Always updated.
            </p>
          </li>
          <li class="gap-4 flex-center">
            <span class="inline-block p-4 bg-black rounded-full flex-center">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.2 30">
                <g id="icon" transform="translate(0)">
                  <path
                    id="Vector"
                    d="M12.745,25.266A13.072,13.072,0,0,1,11,25.148a22.382,22.382,0,0,1-1.824-5.821h7.444a19.9,19.9,0,0,1-2.183,5.827A13.409,13.409,0,0,1,12.745,25.266ZM8.117,24.4h0a12.847,12.847,0,0,1-6.173-5.076H6.777A26.455,26.455,0,0,0,8.116,24.4Zm9.362-.041v0a22.965,22.965,0,0,0,1.558-5.033h4.5a12.888,12.888,0,0,1-6.061,5.035Zm7.232-7.4h-5.33l.017-.212a31.65,31.65,0,0,0-.124-6.576h5.969a12.544,12.544,0,0,1,.242,2.455,12.4,12.4,0,0,1-.774,4.333Zm-7.715,0H8.867a36.86,36.86,0,0,1,.047-6.789h7.981a29.223,29.223,0,0,1,.1,6.788Zm-10.5,0H.773A12.42,12.42,0,0,1,0,12.632a12.547,12.547,0,0,1,.242-2.455h6.3a39.133,39.133,0,0,0-.047,6.788Zm18.023-9.15h-5.6a.169.169,0,0,0-.012-.053A42.5,42.5,0,0,0,16.942.7a12.739,12.739,0,0,1,7.573,7.111Zm-8,0H9.209a46.561,46.561,0,0,1,1.831-7.7A13.466,13.466,0,0,1,12.745,0a12.322,12.322,0,0,1,1.4.076,39.717,39.717,0,0,1,2.367,7.738Zm-9.7,0H.962A12.773,12.773,0,0,1,8.341.773,50.927,50.927,0,0,0,6.819,7.815Z"
                    transform="translate(2.361 2.367)"
                    fill="#12141d"
                  />
                  <path
                    id="Vector-2"
                    data-name="Vector"
                    d="M15.1,30A15.062,15.062,0,0,1,4.427,25.608a14.922,14.922,0,0,1,0-21.216,15.172,15.172,0,0,1,21.352,0,14.93,14.93,0,0,1-.006,21.216A15.04,15.04,0,0,1,15.1,30Zm-3.553-8.305a22.121,22.121,0,0,0,1.818,5.82,13.2,13.2,0,0,0,1.741.118,13.557,13.557,0,0,0,1.694-.112,20.266,20.266,0,0,0,2.191-5.827Zm-7.243,0a12.843,12.843,0,0,0,6.18,5.077,26.127,26.127,0,0,1-1.34-5.077H4.3Zm17.1,0A23.128,23.128,0,0,1,19.84,26.73,12.846,12.846,0,0,0,25.9,21.694H21.4Zm.236-9.15a31.651,31.651,0,0,1,.124,6.576l-.018.212h5.331A12.4,12.4,0,0,0,27.845,15a12.565,12.565,0,0,0-.242-2.456Zm-10.36,0a36.851,36.851,0,0,0-.048,6.789h8.129a29.238,29.238,0,0,0-.1-6.789Zm-8.672,0a12.546,12.546,0,0,0,.531,6.789H8.849A38.539,38.539,0,0,1,8.9,12.544ZM19.309,3.07a42.724,42.724,0,0,1,1.959,7.06.166.166,0,0,1,.006.026.153.153,0,0,0,.006.027h5.6A12.742,12.742,0,0,0,19.309,3.07Zm-4.209-.7a12.491,12.491,0,0,0-1.705.112,45.469,45.469,0,0,0-1.831,7.7h7.308a39.469,39.469,0,0,0-2.367-7.739A13.8,13.8,0,0,0,15.1,2.367Zm-4.4.773a12.77,12.77,0,0,0-7.379,7.042H9.179A51.063,51.063,0,0,1,10.7,3.14Z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </span>
            <p>
              Get free goodies from all over <br />
              the world after purchase
            </p>
          </li>
          <li class="gap-4 flex-center">
            <span class="inline-block p-4 bg-black rounded-full flex-center">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.7 30.5">
                <g id="icon" transform="translate(1.25 1.25)">
                  <path
                    id="Vector"
                    d="M0,2.8V25.2A2.8,2.8,0,0,0,2.8,28h28a1.4,1.4,0,0,0,1.4-1.4V7a1.4,1.4,0,0,0-1.4-1.4H2.8A2.8,2.8,0,1,1,2.8,0H26.6"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    stroke-dasharray="0 0"
                  />
                  <path
                    id="Vector-2"
                    data-name="Vector"
                    d="M2.1,4.2A2.1,2.1,0,1,1,4.2,2.1,2.1,2.1,0,0,1,2.1,4.2Z"
                    transform="translate(22.4 14.699)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </span>
            <p>
              Save up to 10% of every <br />
              purchase you made
            </p>
          </li>
        </ul>
      </div>
    </section>
  </header>
</template>
