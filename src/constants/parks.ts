export enum Parks {
  MK = 1,
  EP = 2,
  HS = 3,
  AK = 4,
}

export const MK: string = "Magic Kingdom";
export const EP: string = "Epcot";
export const HS: string = "Hollywood Studios";
export const AK: string = "Animal Kingdom";

const ZERO_OFFSET = "Zero Offset";

const parksById = [ZERO_OFFSET, MK, EP, HS, AK];
const parkIdsByPark = {
  "Magic Kingdom": 1,
  Epcot: 2,
  "Hollywood Studios": 3,
  "Animal Kingdom": 4,
};

export function getParkById(id: Parks) {
  return parksById[id];
}

export function getParkIdFromPark(name: string) {
  // @ts-ignore
  return parkIdsByPark[name];
}

// @ts-ignore
export const MK_RIDES_URL = `http://localhost:3000/api/parks/${Parks.MK}/rides`;
// @ts-ignore
export const EP_RIDES_URL = `http://localhost:3000/api/parks/${Parks.EP}/rides`;
// @ts-ignore
export const HS_RIDES_URL = `http://localhost:3000/api/parks/${Parks.HS}/rides`;
// @ts-ignore
export const AK_RIDES_URL = `http://localhost:3000/api/parks/${Parks.AK}/rides`;

export const PARK_RIDE_URLS = [
  ZERO_OFFSET,
  MK_RIDES_URL,
  EP_RIDES_URL,
  HS_RIDES_URL,
  AK_RIDES_URL,
];

let nextId = 8;
// @ts-ignore
export function nextRideId() {
  nextId = nextId + 1;
  return nextId;
}
