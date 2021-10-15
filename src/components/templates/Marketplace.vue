<template>
  <section class="">
    <div class="flex justify-between text-lg text-gray-300" v-if="showFilter">
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
</template>

<script setup>
import { useContract } from "../../utils/useContract";
import { watch, ref, reactive, nextTick } from "@vue/runtime-core";
import { ethers } from "ethers";
import config from "../../config";
import MarketGrid from "../MarketGrid.vue";

defineProps({
  showFilter: {
    type: Boolean,
    
  }
})
const { benderMarket, benderNTF, connectWallet } = useContract();
let benders = ref([]);
const state = reactive({
  isLoading: true
});

const fetchMarketItems = async () => {
  const marketItems = await benderMarket.value.getMarketItems();
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
