import MineralRanges from "../database/mineralRanges.json";

export type UseMineralRangesResults = {
  status: "loading" | "error" | "success";
  data: Mineral[];
};

type Mineral = {
  mineralName: string;
  mineralType: string;
  idealValue: number;
  elevated: Range;
  poorEliminator?: Range;
  veryPoorEliminator?: Range;
  goodRange?: Range;
};

type Range = {
  min?: number;
  max?: number;
};

export function useMineralRangesResults(): UseMineralRangesResults {
  return { status: "success", data: MineralRanges };
}
