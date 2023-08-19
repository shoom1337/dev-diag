import { LS_ITEM_KEY } from '~/constants/common';

export function mixStateFromLS(initialState) {
  try {
    const activitiesInLS = JSON.parse(localStorage.getItem(LS_ITEM_KEY));
    Object.keys(activitiesInLS).forEach((type) => {
      activitiesInLS[type].forEach((activityName) => {
        initialState[type][activityName] = true;
      });
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('error on mix LS state: ', e);
  }

  return initialState;
}
