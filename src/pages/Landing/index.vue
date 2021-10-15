<template>
  <main class="w-full bg-gray-800">
    <div class="w-full bg-transparent">
      <Header />
    </div>
    <div class="py-20 text-center pb-30 bg-cool-gray-700 text-gray-50">
        <h1 class="text-4xl"> Domain the elements and conquer </h1>
        <div>
            <p class="pt-5 text-xl">
                The future of digital racehorse ownership is here. Race your way to the top and build your legacy today.
            </p>

            <div class="mt-5 space-x-3">
                <AtButton class="px-10 font-bold text-white bg-roti">Start</AtButton>
            </div>
        </div>
    </div>
    <div class="w-full bg-cool-gray-900">
      <div class="py-20 mx-auto text-center space-y-28 max-w-7xl">
          
      </div>
    </div>
    <div class="w-full bg-cool-gray-900">
      <div class="py-5 mx-auto text-center text-white max-w-7xl">
          <h2 class="text-lg font-bold">On Sale</h2>
          <Marketplace />
          <AtButton class="font-bold border hover:text-white hover:bg-roti border-roti-500 text-roti"> See the market</AtButton>
      </div>
      <div class="py-20 mx-auto text-center text-white space-y-28 max-w-7xl">
          <div class="flex items-center justify-around px-5 py-10 rounded-md shadow-md bg-cool-gray-800">
            <div class="text-left">
                <h2 class="text-2xl"> Create your benders</h2>
                <h4 class="text-lg text-gray-400"> Train and fight against other benders</h4>
            </div>
            <div>
                <AtButton class="font-bold border hover:text-white hover:bg-roti border-roti-500 text-roti"> 
                    Start the game
                </AtButton>
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
import Marketplace from "../../components/templates/Marketplace.vue";

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
