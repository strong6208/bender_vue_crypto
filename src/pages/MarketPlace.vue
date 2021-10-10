<template>
  <main> 
    <section class="relative w-full bg-gray-800">
      <div class="w-full bg-transparent">
        <Header />
      </div>
      <div class="bg-gray-700 content">
          <section class="pt-5 mx-auto max-w-7xl">
            <div class="flex justify-between text-lg text-gray-300">
              <div> {{ benders.length }} results</div>
              <div>
                <select name="" id=""></select>
                <select name="" id=""></select>
                <div></div>
              </div>
            </div>
            
            <MarketGrid 
              class="w-full py-10 md:gap-5 grid-container" 
              :items="benders"
              v-if="!state.isLoading"
              @item-clicked="buyItem"
            />  
          
          </section>
      </div>
    </section>
    <SiteFooter class="relative" />
  </main>
</template>

<script setup>
import Header from "./Landing/Header.vue";
import { useContract } from "../utils/useContract";
import { watch, ref, reactive, nextTick } from "@vue/runtime-core";
import { ethers } from "ethers";
import config from "../config";
import MarketGrid from "../components/MarketGrid.vue";
import SiteFooter from "./Landing/SiteFooter.vue";

const { benderMarket, benderNTF, connectWallet } = useContract();
let benders = ref([]);
const state = reactive({
  isLoading: true
});

const fetchMarketItems = async () => {
  const marketItems = await benderMarket.value.getMarketItems();
  console.log(marketItems);
  benders.value = await Promise.all(marketItems.map(async (item) => {
    const bender = await benderNTF.value.getBender(item.tokenId.toNumber());
    
    return {
      itemId: item.itemId,
      price: ethers.utils.formatEther(item.price),
      lastPrice: ethers.utils.formatEther(item.lastPrice),
      priceETH: item.price,
      tokenId: item.tokenId,
      seller: item.seller,
      owner: item.owner,
      name: bender.name,
      element: bender.element
    }
  }));

  state.isLoading = false;
}

watch(() => benderMarket.value, () => {
  if (benderMarket.value) {
      fetchMarketItems();
    }
});


const buyItem = async (marketItem) => {
  connectWallet();
  const trx = await benderMarket.value.createMarketSale(config.bendingAddress, marketItem.itemId, { value: marketItem.priceETH });
  trx.wait();
  nextTick(() => {
    fetchMarketItems();
    alert("Purchase done");
  })
}
</script>

<style lang="scss">
.content {
  min-height: 80vh;
}
</style>
