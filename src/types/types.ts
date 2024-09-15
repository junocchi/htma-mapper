export type MineralInputs = { [key: string]: string };

export type CategorizedMinerals = {
  idealGood: string[];
  poor: string[];
  veryPoor: string[];
  elevated: string[];
  notApplicable: string[];
};

export type MineralRange = {
  mineralName: string;
  idealValue: number;
  goodRange?: { min: number; max: number };
  elevated?: { min: number };
  poorEliminator?: { min: number; max: number };
  veryPoorEliminator?: { max: number };
};
