<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
        <v-card tile class="cart_list">
          <v-list dense>
            <v-subheader>سبد خرید شما</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item v-for="(item, aa, vv) in counter" :key="item.id">
                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-space-between">
                    <div>
                      {{ aa }}
                    </div>
                    <div>
                      <span>تعداد</span>
                      <span>{{ item }}</span>
                    </div>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <div v-if="counter === null || counter.length < 1">
                سبد خرید خالی است
              </div>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <div class="left_section_cart">
          <div>
            <span>تعداد کل محصولات</span> -
            <span v-if="cartItems === null || Object.keys(cartItems).length < 1"
              >0</span
            >
            <span v-else>{{ cartItems.length }}</span>
          </div>

          <div class="mt-4">
            <span>جمع کل قیمت</span> -
            <span>{{ sumOfPrice | price }}</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [],
      counter: null,
      pricesInCart: [],
    };
  },
  created() {
    if (process.client) {
      this.cartItems = JSON.parse(localStorage.getItem("Cart"));
    }
  },
  mounted() {
    this.makecartItems();
  },
  computed: {
    sumOfPrice() {
      if (this.cartItems && this.cartItems.length > 0) {
        this.cartItems.map((product) => {
          this.pricesInCart.push(parseInt(product.prices.price));
        }, 0);
        console.log(this.pricesInCart);
        const sum = this.pricesInCart.reduce((accumulator, a) => {
          return accumulator + a;
        }, 0);
        return sum;
      } else {
        return 0;
      }
    },
  },
  methods: {
    makecartItems() {
      if (this.cartItems && this.cartItems.length > 0) {
        const counts = {};
        this.cartItems.forEach((x) => {
          return (counts[x.name] = (counts[x.name] || 0) + 1);
        });
        this.counter = counts;
      }
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
.cart_list {
  margin: 20px;
  padding: 10px;
}
.left_section_cart {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  text-align: center;
}
</style>