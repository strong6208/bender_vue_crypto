<template>
 <AtSiteHeader
    title="CryptoBenders"
    :links="state.links"
    link-class="text-white hover:text-fire-400"
    :actions="state.actions"
/>
</template>

<script setup>
import { AtSiteHeader } from "atmosphere-ui";

const state = {
  title: "CryptoBenders",
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
};
</script>