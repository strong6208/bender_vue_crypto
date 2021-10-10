<template>
  <div class="py-10 text-center text-white bg-green-400">
      <h2 class="text-2xl font-bold"> Bending Battle </h2>
      <h2 class="text-lg font-bold text-roti-200"> The official CryptoBenders game </h2>
      <AtButton class="mt-5 font-bold bg-roti hover:roti-600"> Go to Bending Battle </AtButton>
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
  fill: rgb(52, 211, 153) !important;
}
</style>
