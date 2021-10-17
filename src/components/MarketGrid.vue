<template>
    <div class="py-10 md:gap-5 grid-container">
        <MarketGridItem 
            v-for="item in items" 
            :item="item"
            :operation-label="operationLabel"
            :currency="currency"
            :mode="mode"
            @item-clicked="$emit('item-clicked', item)"
        />
    </div>
</template>

<script setup>
import MarketGridItem from './MarketGridItem.vue';

defineProps({
    items: {
        type: Array,
        required: true
    },
    mode: {
        type: String,
        default: 'buy'
    },
    operationLabel: {
        type: String, 
        default: 'Buy'
    },
    currency: {
        type: String,
        default: 'ETH'
    }
})

defineEmits(['item-clicked'])
</script>

<style lang="scss">
.grid-container {
  display: flex;
  flex-direction: column;
}

.grid-item {
  max-width: 250px;
}


@screen md {
  .grid-container {
    display: grid;
    grid-template-columns:  repeat(4, minmax(250px, 250px));
  }

  .grid-item {
    max-width: 250px;
  }

}
</style>