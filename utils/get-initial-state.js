import { mixStateFromLS } from './mix-state-from-ls';
import activities from '~/content/activities.json';

export function getInitialState() {
  const initialState = Object.keys(activities).reduce(
    (acc, type) => {
      activities[type].forEach(
        (activity) => (acc[type][activity.name] = false)
      );
      return acc;
    },
    { vertical: {}, horizontal: {} }
  );

  mixStateFromLS(initialState);

  return initialState;
}
