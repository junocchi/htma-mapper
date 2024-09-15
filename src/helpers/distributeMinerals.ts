import {
  CategorizedMinerals,
  MineralInputs,
  MineralRange,
} from "../types/types";

export const distributeMinerals = (
  formValues: MineralInputs,
  mineralRanges: MineralRange[],
): CategorizedMinerals => {
  const idealGood: string[] = [];
  const poor: string[] = [];
  const veryPoor: string[] = [];
  const elevated: string[] = [];
  const notApplicable: string[] = [];

  mineralRanges.forEach((mineralRange) => {
    const {
      mineralName,
      idealValue,
      goodRange,
      poorEliminator,
      veryPoorEliminator,
      elevated: elevatedRange,
    } = mineralRange;

    const inputValue = Math.max(0, parseFloat(formValues[mineralName] || "0"));

    if (!isNaN(inputValue)) {
      if (inputValue === 0) {
        notApplicable.push(mineralName);
      }
      if (
        inputValue === idealValue ||
        (goodRange &&
          inputValue >= goodRange.min &&
          inputValue <= goodRange.max)
      ) {
        idealGood.push(mineralName);
      } else if (
        poorEliminator &&
        inputValue >= poorEliminator.min &&
        inputValue <= poorEliminator.max
      ) {
        poor.push(mineralName);
      } else if (
        veryPoorEliminator &&
        inputValue !== 0 &&
        inputValue <= veryPoorEliminator.max!
      ) {
        veryPoor.push(mineralName);
      } else if (elevatedRange && inputValue > elevatedRange.min!) {
        elevated.push(mineralName);
      }
    }

    // if the mineral doesn't fit in any category, add it once to "notApplicable"
    if (
      !idealGood.includes(mineralName) &&
      !poor.includes(mineralName) &&
      !veryPoor.includes(mineralName) &&
      !elevated.includes(mineralName) &&
      !notApplicable.includes(mineralName)
    ) {
      notApplicable.push(mineralName);
    }
  });

  // sort the arrays alphabetically
  idealGood.sort();
  poor.sort();
  veryPoor.sort();
  elevated.sort();
  notApplicable.sort();

  return { idealGood, poor, veryPoor, elevated, notApplicable };
};
