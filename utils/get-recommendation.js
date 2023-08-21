import { RECOMMENDATIONS, WAY, HINT } from '~/constants/recommendations';

export function getRecommendation(activities) {
  const h = activities.horizontal.length;
  const v = activities.vertical.length;
  let way, recommendations, hint;

  if (h > v) {
    way = WAY.HORIZONTAL;
    hint = HINT.HORIZONTAL;
    recommendations = [...RECOMMENDATIONS.HORIZONTAL];
  }

  if (h < v) {
    way = WAY.VERTICAL;
    hint = HINT.VERTICAL;
    recommendations = [
      ...RECOMMENDATIONS.VERTICAL,
      ...RECOMMENDATIONS.HORIZONTAL,
    ];
  }

  if (h === v) {
    way = WAY.BOTH;
    hint = HINT.BOTH;
    recommendations = [
      ...RECOMMENDATIONS.VERTICAL,
      ...RECOMMENDATIONS.HORIZONTAL,
    ];
  }

  return {
    way,
    hint,
    recommendations,
  };
}
