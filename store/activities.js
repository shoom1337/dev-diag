import { LS_ITEM_KEY } from '~/constants/common';
import { filterCheckedActivities } from '~/utils/filter-checked-activities';
import { getInitialState } from '~/utils/get-initial-state';

export const state = () => getInitialState();

export const getters = {
  getActivityValue: (state) => (type) => (activity) => state[type][activity],
  getCheckedActivitiesCount: (state) => {
    const checkedActivities = filterCheckedActivities(state);
    return {
      x: checkedActivities.horizontal.length,
      y: checkedActivities.vertical.length,
    };
  },
};

export const mutations = {
  toggleActivity(state, { type, activity }) {
    state[type][activity] = !state[type][activity];
  },
  resetState(state) {
    Object.assign(state, getInitialState());
  },
  saveStateToLS(state) {
    const checkedActivities = filterCheckedActivities(state);
    localStorage.setItem(LS_ITEM_KEY, JSON.stringify(checkedActivities));
  },
  removeStateFromLS() {
    localStorage.removeItem(LS_ITEM_KEY);
  },
};
