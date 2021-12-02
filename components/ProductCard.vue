<template>
  <div>
    <v-card class="mx-auto my-2" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img class="image_product" :src="productObject.images[0].src"></v-img>

      <v-card-title>
        <span class="title_product">
          {{ productObject.name }}
        </span>
      </v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <small class="grey--text ms-4">4.5</small>
        </v-row>

        <div class="my-4 text-subtitle-1 text-right">
          {{ productObject.prices.currency_symbol }}
          {{ productObject.prices.price | price }}
        </div>

        <!-- <div v-html="productObject.short_description"></div> -->
      </v-card-text>

      <v-divider class="mx-2"></v-divider>

      <v-card-text class="text-right">
        <!-- <div>{{ isInCart(productObject.id) ? "true" : "false" }}</div> -->
        <small
          class="green--text"
          v-if="isInCart(productObject.id) || AddedToBasket == true"
          >این محصول در سبد خرید شما موجود است</small
        >

        <small v-else>
          <span>
            <br />
          </span>
        </small>
        <v-btn
          class="mt-2"
          color="primary"
          depressed
          elevation="2"
          @click="addToBasket(productObject)"
        >
          افزودن به سبد
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["productObject"],
  data() {
    return {
      AddedToBasket: false,
    };
  },
  methods: {
    addToBasket(product) {
      let oldItems;
      oldItems = JSON.parse(localStorage.getItem("Cart")) || [];
      let productAvailable = oldItems.some((el) => el.id === product.id);

      if (productAvailable) {
        let productFinder = oldItems.find((el) => el.id === product.id);
        let productcount = productFinder.count;
        let newItem = oldItems.filter((el) => el.id !== productFinder.id);
        localStorage.setItem("Cart", JSON.stringify(newItem));
        newItem.push({
          id: product.id,
          name: product.name,
          price: product.prices.price,
          totalPrice: product.prices.price * (productcount + 1),
          count: productcount + 1,
        });
        localStorage.setItem("Cart", JSON.stringify(newItem));
        console.log("bod");
      } else {
        console.log("nabod");

        oldItems.push({
          id: product.id,
          name: product.name,
          price: product.prices.price,
          totalPrice: product.prices.price * 1,
          count: 1,
        });
        localStorage.setItem("Cart", JSON.stringify(oldItems));
      }
      this.AddedToBasket = true;
    },
    isInCart(id) {
      let cartItem = JSON.parse(localStorage.getItem("Cart")) || [];
      const found = cartItem.some((el) => el.id === id);
      return found;
    },
  },

  filters: {
    price(str) {
      str = str + "";
      let objRegex = new RegExp("(-?[0-9]+)([0-9]{3})");
      while (objRegex.test(str)) {
        str = str.replace(objRegex, "$1,$2");
      }

      return str;
    },
  },
};
</script>

<style scoped>
.title_product {
  font-size: 15px;
  font-weight: 700;
  text-align: right;
  height: 70px;
}
.image_product {
  object-fit: contain;
}
</style>