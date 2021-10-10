<template>
  <div class="relative text-gray-100 bg-cool-gray-900">
      <AtPreFooter :sections="state.sections" class="bg-gray-900" />
      <AtSiteFooter
          :title="state.title"
          year="2021"
          :subtitle="`${state.title} - The last crypto bender`"
          :links="state.footerLinks"
      />
  </div>
</template>

<script setup>
import {  AtPreFooter, AtSiteFooter } from "atmosphere-ui";

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
