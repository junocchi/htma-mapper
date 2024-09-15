import MineralRanges from "../database/mineralRanges.json";

export type UseMineralRangesResults = {
  status: "loading" | "error" | "success";
  data: Mineral[];
};

type Mineral = {
  // from https://www.drlwilson.com/articles/MIN.IDEALS.htm
  mineralName: string;
  mineralType: string;
  idealValue: number;
  goodRange?: Range; // Both min and max are used in the type
  poorEliminator?: Range; // Both min and max are optional in the type
  veryPoorEliminator?: Range; // Only max is used in the type
  elevated: Range; // Min is required but optional in the type
};

type Range = {
  min?: number;
  max?: number;
};

export function checkMineralRangesResults(): UseMineralRangesResults {
  return { status: "success", data: MineralRanges };
}
