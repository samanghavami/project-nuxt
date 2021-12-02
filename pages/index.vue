<template>
  <div>
    <div class="products">
      <div class="">
        <v-container fluid>
          <v-row>
            <v-col
              cols="12"
              sm="12"
              md="3"
              v-for="product in getProductState"
              :key="product.id"
            >
              <product-card :productObject="product" />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  async created() {
    await this.getProducts();
    this.getProductState;
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
  computed: {
    ...mapGetters(["getProductState"]),
  },
  updated() {
    console.log(1111);
  },
};
</script>

<style scoped>
</style>