export interface RouteData {
  id: string;
  name: string;
  estimatedMinutes: number;
  cctvCount: number;
  bellCount: number;
  streetlightScore: number;
  mainRoadScore: number;
  alleyPenalty: number;
  coordinates: [number, number][];
}

export const routes: RouteData[] = [
  {
    id: "route_a",
    name: "A 최단 경로",
    estimatedMinutes: 11,
    cctvCount: 2,
    bellCount: 0,
    streetlightScore: 7,
    mainRoadScore: 5,
    alleyPenalty: 12,
    coordinates: [
      [36.365, 127.344], // 충남대 정문 인근 (예시)
      [36.362, 127.346],
      [36.355, 127.345], // 봉명동 원룸가 (예시)
    ],
  },
  {
    id: "route_b",
    name: "B 균형 경로",
    estimatedMinutes: 13,
    cctvCount: 5,
    bellCount: 1,
    streetlightScore: 11,
    mainRoadScore: 10,
    alleyPenalty: 6,
    coordinates: [
      [36.365, 127.344],
      [36.363, 127.348],
      [36.358, 127.347],
      [36.355, 127.345],
    ],
  },
  {
    id: "route_c",
    name: "C 안심 경로",
    estimatedMinutes: 14,
    cctvCount: 8,
    bellCount: 2,
    streetlightScore: 14,
    mainRoadScore: 13,
    alleyPenalty: 3,
    coordinates: [
      [36.365, 127.344],
      [36.363, 127.349],
      [36.358, 127.348],
      [36.355, 127.345],
    ],
  },
];