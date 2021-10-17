<template>
  <main> 
    <section class="relative w-full bg-gray-800">
      <div class="w-full bg-transparent">
        <Header />
      </div>
      <div class="bg-gray-700 marketplace-content"> 
        <Marketplace class="pt-5 mx-auto max-w-7xl"/>
      </div>
    </section>
    <SiteFooter class="relative" />
  </main>
</template>

<script setup>
import Header from "./Landing/Header.vue";
import Marketplace from "../components/templates/Marketplace.vue";
import SiteFooter from "./Landing/SiteFooter.vue";
</script>

<style lang="scss">
.marketplace-content {
  min-height: 80vh;
}
</style>
