export const state = () => ({
  products: [],
});

export const getters = {
  getProductState(state) {
    return state.products;
  },
};

export const mutations = {
  getProducts(state, payload) {
    state.products = payload;
  },
};

export const actions = {
  async getProducts({ commit }) {
    const products = await this.$axios.$get(
      `https://insarzamin.ir/wp-json/wc/store/products`
    );
    // console.log(111, products);
    commit("getProducts", products);
    return products;
  },
};
