<template>
  <div class="py-10 text-center text-white bg-roti">
      <h2 class="text-2xl font-bold"> Bending Battle </h2>
      <h2 class="text-lg font-bold text-roti-200"> The official CryptoBenders game </h2>
      <AtButton class="mt-5 font-bold bg-white text-cool-gray-700 hover:text-roti-600"> Go to Bending Battle </AtButton>
  </div>
  <div class="relative text-gray-100">
      <AtPreFooter :sections="state.sections" class="bg-gray-800" />
      <AtSiteFooter
          class="bg-cool-gray-900"
          :title="state.title"
          year="2021"
          :subtitle="`${state.title} - The last crypto bender`"
          :links="state.footerLinks"
      />
  </div>
</template>

<script setup>
import {  AtPreFooter, AtSiteFooter, AtButton } from "atmosphere-ui";

const state = {
  title: "CryptoBenders",
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
        Zenboard: "https://zenboard.app/",
        Atmosphere: "https://atmosphere-ui.netlify.app/",
        Lumiere: "https://github.com/jesusantguerrero/lumiere",
        Code: "https://github.com/jesusantguerrero/crypto-bender"
      },
    },
    about: {
      label: "About Neatlancer",
      links: {
        "Open Source Software": "",
        Github: "",
        Twitter: "",
      },
    }
  },
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
};
</script>

<style>
.custom-shape-divider-top-1629465412 .shape-fill {
  /* fill: rgb(94, 6, 0) !important; */
  fill: rgb(205, 171, 78) !important;
}
</style>
