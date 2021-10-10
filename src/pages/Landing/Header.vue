<template>
 <AtSiteHeader
    title="CryptoBenders"
    :links="state.links"
    link-class="font-normal text-white transition hover:text-fire-map-300 hover:font-bold"
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
      name: "Marketplace",
      url: "/market-place",
    },
    {
      name: "My Items",
      url: "/my-items",
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
      class: 'bg-fire-400 px-10 py-2 text-white hover:bg-fire-300 transition'
    },
  ],
};
</script>