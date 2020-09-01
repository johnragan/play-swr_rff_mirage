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

export function getParkById(id: Parks) {
  return parksById[id];
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
