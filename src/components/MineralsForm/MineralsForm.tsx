import { useState } from "react";
import { checkMineralRangesResults } from "../../helpers/checkMineralRangesResults";
import { EliminationTable } from "../EliminationTable/EliminationTable";
import { CategorizedMinerals, MineralInputs } from "../../types/types";
import { UserInput } from "../UserInput/UserInput";
import { distributeMinerals } from "../../helpers/distributeMinerals";
import { UploadPdfButton } from "../UploadPdfButton/UploadPdfButton";

const nutritionalMinerals = [
  "Calcium",
  "Magnesium",
  "Sodium",
  "Potassium",
  "Copper",
  "Zinc",
  "Phosphorus",
  "Iron",
  "Manganese",
  "Chromium",
  "Selenium",
  "Boron",
  "Cobalt",
  "Molybdenum",
  "Sulfur",
  "Iodine",
  "Germanium",
  "Rubidium",
  "Lithium",
  "Vanadium",
  "Zirconium",
] as const;

const toxicMinerals = [
  "Nickel",
  "Antimony",
  "Uranium",
  "Arsenic",
  "Beryllium",
  "Mercury",
  "Cadmium",
  "Lead",
  "Aluminum",
];

export const MineralsForm = () => {
  const [formValues, setFormValues] = useState<MineralInputs>({});
  const [isError, setIsError] = useState(false);
  const [categorizedMinerals, setCategorizedMinerals] =
    useState<CategorizedMinerals | null>(null);

  const handleMineralInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const mineralRangesResults = checkMineralRangesResults();

    // Check if the mineral range data is available
    if (mineralRangesResults.status === "success") {
      const newCategorizedMinerals = distributeMinerals(
        formValues,
        mineralRangesResults.data,
      );
      setCategorizedMinerals(newCategorizedMinerals);
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <h1 className="m-4">HTMA Helper</h1>

      <p className="m-4">Instructions</p>

      {/* TODO <UploadPdfButton handleFile={() => console.log("hi")} /> */}

      <div>
        <h2 className="text-2xl font-bold m-12">Nutritional Elements</h2>
        {/* Nutritional elements */}
        <form className="grid grid-cols-1 gap-y-4 mx-auto mr-8 sm:grid-cols-2 sm:gap-x-16 lg:grid-cols-3">
          {nutritionalMinerals
            .slice(0, Math.ceil(nutritionalMinerals.length / 2))
            .map((mineral) => (
              <UserInput
                label={mineral}
                value={formValues[mineral] || ""}
                onChange={handleMineralInputChange}
              />
            ))}
          {nutritionalMinerals
            .slice(Math.ceil(nutritionalMinerals.length / 2))
            .map((mineral) => (
              <UserInput
                label={mineral}
                value={formValues[mineral] || ""}
                onChange={handleMineralInputChange}
              />
            ))}
        </form>

        <h2 className="text-2xl font-bold m-12">Toxic Elements</h2>
        {/* Toxic elements */}
        <form className="grid grid-cols-1 gap-y-4 mx-auto mr-8 sm:grid-cols-2 sm:gap-x-16 lg:grid-cols-3">
          {toxicMinerals
            .slice(0, Math.ceil(toxicMinerals.length / 2))
            .map((mineral) => (
              <UserInput
                label={mineral}
                value={formValues[mineral] || ""}
                onChange={handleMineralInputChange}
              />
            ))}
          {toxicMinerals
            .slice(Math.ceil(toxicMinerals.length / 2))
            .map((mineral) => (
              <UserInput
                label={mineral}
                value={formValues[mineral] || ""}
                onChange={handleMineralInputChange}
              />
            ))}
        </form>
      </div>
      <div>
        <button
          type="button"
          className="m-8 p-3 rounded-md"
          onClick={handleClick}
        >
          Process Results
        </button>
        {isError ? <div>Error</div> : null}
      </div>
      {categorizedMinerals && (
        <EliminationTable categorizedMinerals={categorizedMinerals} />
      )}
    </>
  );
};
