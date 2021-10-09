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
    <div class="relative text-gray-100 bg-warm-gray-800">
        <AtPreFooter :sections="state.sections" class="bg-warm-gray-800" />
        <AtSiteFooter
            title="Lumiere"
            year="2021"
            subtitle="Lumiere - The firebase template"
            :links="state.footerLinks"
        />
    </div>
  </main>
</template>

<script setup>
import { AtSiteHeader, AtPreFooter, AtSiteFooter, AtButton } from "atmosphere-ui";
import Header from "./Header.vue";

const state = {
  title: "Lumiere",
  links: [
    {
      name: "Fighting",
      url: "#home",
    },
    {
      name: "MarketPlace",
      url: "/market-place",
    },
    {
        name: "Learn",
        url: "#features",
    }
  ],
  sections: {
    general: {
      label: "General Resources",
      links: {
        Docs: "",
        Blog: "",
        "Use Cases": "",
      },
    },
    more: {
      label: "More",
      links: {
        Zenboard: "",
        Atmosphere: "",
        Lumiere: "",
        "Insane Code": "",
      },
    },
    about: {
      label: "About Neatlancer",
      links: {
        "Open Source Software": "",
        Github: "",
        Twitter: "",
      },
    },
    legal: {
      label: "Legal",
      links: {
        "Privacy Policy": "/privacy-policy",
        "Terms of service": "/terms",
      },
    },
  },
  actions: [
    {
      name: "Want to play crypto benders?",
      url: "/login",
      class: 'text-gray-300 bg-transparent hover:bg-transparent transition'
    },
    {
      name: "Start",
      url: "/register",
      class: 'bg-fire px-10 py-2 text-white hover:bg-fire-400 transition'
    },
  ],
  footerLinks: [
    {
      name: "facebook",
    },
    {
      name: "twitter",
    },
    {
      name: "github",
    },
    {
      name: "github",
    },
  ],
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
