<template>
  <div class="item" :class="{'list-group-item': displayList}">
    <button class="btn btn-success pull-right" :disabled="item.quantity === 0" @click="addItem">
              Add to cart
    </button>
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex';
export default {
  props: ['item', 'displayList'],
  methods: {
    ///...mapActions(['updateCart']),
    addItem() {
      const order = {
        item: Object.assign({}, this.item),
        quantity: 1,
        isAdd: true
      };
      this.updateCart(order);
    }
  },
}
</script>
