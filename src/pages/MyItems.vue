<template>
  <main class="w-full bg-fire-map-600">
    <div class="w-full bg-transparent">
      <Header />
    </div>
    <div class="bg-roti">
        <div class="grid grid-cols-4 py-10" v-if="!state.isLoading">
          <div v-for="bender in benders" class="flex flex-col items-center justify-center px-5 py-3 mx-10 bg-white rounded-lg">
            <AvatarCard 
              :bender="bender"
            />

            <div class="w-full mt-5">
              <input class="w-full px-2 py-2 mb-2 border rounded-md" placeholder="0.00 ETH" v-model="bender.sellPrice">
              <AtButton class="w-full text-white bg-fire" @click="sellItem(bender)"> Sell </AtButton>
            </div>

          </div>
        </div>
    </div>
  </main>
</template>

<script setup>
import Header from "./Landing/Header.vue";
import { useContract } from "../utils/useContract";
import { AtButton } from "atmosphere-ui";
import { watch, ref, reactive } from "@vue/runtime-core";
import { ethers } from "ethers";
import AvatarCard from "../components/AvatarCard.vue";
import config from "../config";

const { benderMarket, benderNTF, connectWallet, signer } = useContract();
let benders = ref([]);
const state = reactive({
  isLoading: true
});

const fetchMarketItems = async () => {
  const marketItems = await benderMarket.value.getMyNFTs();
  benders.value = await Promise.all(marketItems.map(async (item) => {
    const bender = await benderNTF.value.getBender(item.tokenId);
    
    return {
      itemId: item.itemId,
      name: 'Item',
      price: ethers.utils.formatEther(item.price),
      priceETH: item.price,
      tokenId: item.tokenId,
      seller: item.seller,
      owner: item.owner,
      name: bender.name,
      element: bender.element
    }
  }));

  if (signer.value.address && benderNTF.value) {
    console.log(await benderNTF.value.balanceOf(signer.value.address));

  }
  state.isLoading = false;
}

watch(() => benderMarket.value, () => {
  if (benderMarket.value) {
    fetchMarketItems();

  }
});



const sellItem = async (marketItem) => {
  await connectWallet();
  if (!marketItem.sellPrice) {
    alert("Set a price for the item");
  }
  const listPricing = await benderMarket.value.getListingPrice();
  const price = ethers.utils.parseEther(marketItem.sellPrice);
  const trx = await benderMarket.value.resellMarketItem(config.bendingAddress, marketItem.tokenId, price,  { value: listPricing });
  trx.wait();
  fetchMarketItems();
  alert("Purchase done");
}
</script>
