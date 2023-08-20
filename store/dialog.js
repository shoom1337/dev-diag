export const state = () => ({
  isOpen: false,
});

export const getters = {
  getIsOpen: ({ isOpen }) => isOpen,
};

export const mutations = {
  toggleIsOpen(state) {
    state.isOpen = !state.isOpen;
  },
};
