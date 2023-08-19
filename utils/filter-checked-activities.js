export function filterCheckedActivities(activities) {
  return Object.keys(activities).reduce(
    (acc, type) => {
      Object.entries(activities[type]).forEach(([key, value]) => {
        if (value) {
          acc[type].push(key);
        }
      });
      return acc;
    },
    { vertical: [], horizontal: [] }
  );
}
