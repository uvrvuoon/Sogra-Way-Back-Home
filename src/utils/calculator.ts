import { RouteData } from "../data/routes";

// 안심점수 계산 로직
export function calculateSafetyScore(route: RouteData, fastestMinutes: number): number {
  const baseScore = 40;

  const cctvScore = Math.min(route.cctvCount * 2.5, 20);
  const bellScore = Math.min(route.bellCount * 7, 15);
  const streetlightScore = route.streetlightScore;
  const mainRoadScore = route.mainRoadScore;
  const alleyPenalty = route.alleyPenalty;

  const detourMinutes = route.estimatedMinutes - fastestMinutes;
  const detourPenalty = Math.min(Math.max(detourMinutes, 0) * 2, 10);

  const rawScore =
    baseScore +
    cctvScore +
    bellScore +
    streetlightScore +
    mainRoadScore -
    alleyPenalty -
    detourPenalty;

  return Math.max(0, Math.min(100, Math.round(rawScore)));
}

// 기본 추천 이유 생성 (LLM 실패 시 대비용 Fallback)
export function generateReasonFallback(route: RouteData, fastestMinutes: number): string {
  const extraMinutes = route.estimatedMinutes - fastestMinutes;
  
  if (extraMinutes === 0) {
    return `${route.name}를 추천합니다. 가장 빠르게 도착할 수 있으며, 기본적인 안전 요소가 포함되어 있습니다.`;
  }

  return `${route.name}를 추천합니다. 최단 경로보다 약 ${extraMinutes}분 더 걸리지만, CCTV ${route.cctvCount}개와 비상벨 ${route.bellCount}개가 경로 주변에 있고 조명 점수와 큰길 비율이 높아 야간 귀가 시 더 안심할 수 있습니다.`;
}