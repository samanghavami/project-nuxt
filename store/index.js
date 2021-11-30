export const state = () => ({
  users: [],
});

export const getters = {};

export const actions = {
  async getUsers({ commit }) {
    const users = await this.$axios.$get(
      `https://randomuser.me/api/?results=10`
    );
    commit("addUsers", users.results);
    return users.results;
  },
};

export const mutations = {
  addUsers(state, payload) {
    console.log(payload);
    state.users = payload;
    // state.users.push(...payload);
  },
};
