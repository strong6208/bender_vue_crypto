<template>
 <AtSiteHeader
    title="CryptoBenders"
    :links="state.links"
    link-class="font-bold text-white transition hover:text-roti hover:font-bold"
    :actions="state.actions"
    dot-class="text-roti"
>

  <template v-slot:actions v-if="AppState.user">
    <div class="text-gray-400">
      <div>
        {{ AppState.user ? 'Logged User' : 'Nada' }}
      </div>

      <div>
        {{ AppState.provider.balance || 0}} ETH
      </div>
    </div>
  </template>
</AtSiteHeader>

</template>

<script setup>
import { AtSiteHeader } from "atmosphere-ui";
import AppState from "../../utils/AppState";

const state = {
  title: "CryptoBenders",
  links: [
    {
      name: "Fighting",
      url: "#home",
    },
    {
      name: "Marketplace",
      to: { name: 'marketPlace'},
    },
    {
      name: "My Items",
      to: {name: 'myItems'},
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
      class: 'bg-roti px-10 py-2 text-white hover:bg-roti-600 transition'
    },
  ],
};
</script>