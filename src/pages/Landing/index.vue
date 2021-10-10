<template>
  <main class="w-full bg-fire-map-600">
    <div class="w-full bg-transparent">
      <Header />
    </div>
    <div class="py-20 text-center pb-30 bg-fire-map text-gray-50">
        <h1 class="text-4xl"> Domain the elements and conquer </h1>
        <div>
            <p class="pt-5 text-xl">
                The future of digital racehorse ownership is here. Race your way to the top and build your legacy today.
            </p>

            <div class="mt-5 space-x-3">
                <AtButton class="px-10 font-bold text-white bg-fire">Start</AtButton>
            </div>
        </div>
    </div>
    <div class="w-full bg-white">
      <div class="py-20 mx-auto text-center bg-white space-y-28 max-w-7xl">
          <div class="flex w-full" v-for="featureRow in state.features">
              <div class="w-4/12" v-for="feature in featureRow">
              <h4 class="font-bold"> {{ feature.emoji }} {{ feature.name }}</h4>
              <p class="mt-5 text-left"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore soluta quod vitae reprehenderit quis odio quo cum minima error asperiores consequuntur, repudiandae consectetur explicabo. Totam est molestiae ducimus doloribus.</p>
              </div>
          </div>
      </div>
    </div>
    <SiteFooter />
  </main>
</template>

<script setup>
import { AtButton } from "atmosphere-ui";
import Header from "./Header.vue";
import SiteFooter from "./SiteFooter.vue";

const state = {
  features: {
      row1: [
          {
              emoji: "📦",
              name: "Firebase",
          },
          {
              emoji: "📦",
              name: "TailwindCSS",
          },
          {
              emoji: "📦",
              name: "Storybook",
          }
      ],
        row2: [
              {
                  emoji: "📦",
                  name: "Atmosphere UI",
              },
              {
                  emoji: "📦",
                  name: "Vue 3",
              },
              {
                emoji: "📦",
                name: "Vue Testing Library",
                 
      }],
        row3: [
              {
                  emoji: "📦",
                  name: "Full auth flow",
                  description: "Authentication, registration, password update, password confirmation, Social logins"
              },
              {
                  emoji: "📦",
                  name: "API, Teams, Payment",
              },
              {
                emoji: "📦",
                name: "Settings",
                 
      }],
  }
};
</script>
