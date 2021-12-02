<template>
  <v-app>
    <v-main>
      <header class="header">
        <div class="mr-3">
          <nuxt-link to="/" class="text-decoration-none">
            فروشگاه اینترنتی
          </nuxt-link>
        </div>
        <nuxt-link to="/cart" class="text-decoration-none">
          <v-icon class="icon_basket_style" x-large>mdi-basket-outline</v-icon>
        </nuxt-link>
      </header>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.header {
  height: 60px;
  background: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon_basket_style {
  cursor: pointer;
  margin-top: 10px;
  margin-left: 30px;
}
</style>
