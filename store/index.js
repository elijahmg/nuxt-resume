export const state = () => ({
  isMobile: false,
});

export const mutations = {
  toggleIsMobile(state, value) {
    state.isMobile = value;
  },
};
