export enum ParkIds {
  MK = 1,
  EP = 2,
  HS = 3,
  AK = 4,
}

export enum ParkNames {
  MK = "Magic Kingdom",
  EP = "Epcot",
  HS = "Hollywood Studios",
  AK = "Animal Kingdom",
}

const ZERO_OFFSET = "Zero Offset";

const parksById = [
  ZERO_OFFSET,
  ParkNames.MK,
  ParkNames.EP,
  ParkNames.HS,
  ParkNames.AK,
];
const parkIdsByPark = {
  "Magic Kingdom": 1,
  Epcot: 2,
  "Hollywood Studios": 3,
  "Animal Kingdom": 4,
};

export function getParkById(id: ParkIds) {
  return parksById[id];
}

export function getParkIdFromPark(name: string): number {
  // @ts-ignore
  return parkIdsByPark[name];
}

export const MK_RIDES_URL = `http://localhost:3000/api/parks/${ParkIds.MK}/rides`;
export const EP_RIDES_URL = `http://localhost:3000/api/parks/${ParkIds.EP}/rides`;
export const HS_RIDES_URL = `http://localhost:3000/api/parks/${ParkIds.HS}/rides`;
export const AK_RIDES_URL = `http://localhost:3000/api/parks/${ParkIds.AK}/rides`;

export const PARK_RIDE_URLS = [
  ZERO_OFFSET,
  MK_RIDES_URL,
  EP_RIDES_URL,
  HS_RIDES_URL,
  AK_RIDES_URL,
];

let nextId = 8;
export function nextRideId() {
  nextId = nextId + 1;
  return nextId;
}
