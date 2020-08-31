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

const parksById = ["Zero Offset", MK, EP, HS, AK];

export function getParkById(id: Parks) {
  return parksById[id];
}
