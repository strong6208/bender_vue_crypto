<template>
  <main class="w-full bg-fire-map-600">
    <div class="w-full bg-transparent">
      <Header />
    </div>
    <div class="bg-roti">
        <ul>
          <li v-for="bender in benders">
            {{ bender }}
          </li>
        </ul>
    </div>
  </main>
</template>

<script setup>
import Header from "./Landing/Header.vue";
import { useContract } from "../utils/useContract";
import { watch, ref } from "@vue/runtime-core";
import { ethers } from "ethers";

const { benderMarket, benderNTF } = useContract();
let benders = ref([]);

const fetchMarketItems = async () => {
  const marketItems = await benderMarket.value.getMarketItems();
  benders.value = await Promise.all(marketItems.map(async (item) => {
    const bender = await benderNTF.value.getBender(item.tokenId);
    
    return {
      name: 'Item',
      price: ethers.utils.formatEther(item.price),
      tokenId: item.tokenId,
      seller: item.seller,
      owner: item.owner,
      name: bender.name,
      element: bender.element
    }
  }));
}

watch(() => benderMarket.value, () => {
  if (benderMarket.value) {
    fetchMarketItems();
  }
});
</script>
