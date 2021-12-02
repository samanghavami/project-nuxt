<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
        <v-card tile class="cart_list">
          <v-list dense>
            <v-subheader>سبد خرید شما</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item v-for="item in cartItems" :key="item.id">
                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-space-between">
                    <div>
                      {{ item.name }}
                    </div>
                    <div>
                      <span>تعداد</span>
                      <span>{{ item.count }}</span>
                    </div>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="cartItems === null">
                سبد خرید خالی است
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <div class="left_section_cart">
          <div>
            <span>تعداد کل محصولات</span> -
            <span v-if="cartItems === null">0</span>
            <span v-else>{{ sumOfCount }}</span>
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
      CountInCart: [],
    };
  },
  created() {
    if (process.client) {
      this.cartItems = JSON.parse(localStorage.getItem("Cart"));
    }
  },
  computed: {
    sumOfPrice() {
      if (this.cartItems && this.cartItems.length > 0) {
        this.cartItems.map((product) => {
          this.pricesInCart.push(parseInt(product.totalPrice));
        }, 0);
        const sum = this.pricesInCart.reduce((accumulator, a) => {
          return accumulator + a;
        }, 0);
        return sum;
      } else {
        return 0;
      }
    },
    sumOfCount() {
      if (this.cartItems && this.cartItems.length > 0) {
        this.cartItems.map((product) => {
          this.CountInCart.push(parseInt(product.count));
        }, 0);
        const sum = this.CountInCart.reduce((accumulator, a) => {
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