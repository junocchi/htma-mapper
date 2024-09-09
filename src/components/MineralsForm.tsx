import { useState } from "react";
import { useMineralRangesResults } from "../hooks/useMineralRanges";
import { EliminationTable } from "./EliminationTable";

const nutritionalMinerals = [
  "Calcium",
  "Magnesium",
  "Sodium",
  "Potassium",
  "Iron",
  "Copper",
  "Manganese",
  "Zinc",
  "Chromium",
  "Selenium",
  "Boron",
  "Vanadium",
  "Iodine",
  "Rubidium",
  "Zirconium",
  "Germanium",
  "Sulfur",
  "Phosphorus",
  "Cobalt",
  "Lithium",
  "Aluminum",
];

const toxicMinerals = [
  "Arsenic",
  "Cadmium",
  "Lead",
  "Mercury",
  "Nickel",
  "Beryllium",
  "Uranium",
  "Antimony",
];

const MineralsForm = () => {
  const idealGoodMinerals = ["Calcium", "Magnesium"]; // Fill these based on your logic
  const poorMinerals = ["Iron"];
  const veryPoorMinerals = ["Copper"];
  const elevatedMinerals = ["Zinc", "Sodium"];
  type MineralInputs = { [key: string]: string };

  const [formValues, setFormValues] = useState<MineralInputs>({});

  // JU handle input change
  const handleMineralInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // placeholder to handle the form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted with values:", formValues);
    // JU Add form submission logic here
  };

  const mineralRangesResult = useMineralRangesResults();
  console.log(mineralRangesResult);

  return (
    <div>
      <h1>HTMA Helper</h1>
      <div>
        <p>Instructions</p>
      </div>
      <h2 className="text-2xl font-bold m-8">Nutritional Elements</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-8">
          {/* Nutritional elements - column left */}
          <div className="col-span-1">
            {nutritionalMinerals
              .slice(0, Math.ceil(nutritionalMinerals.length / 2))
              .map((mineral) => (
                <div key={mineral} className="flex items-center mb-3">
                  <label htmlFor={mineral} className="w-40 font-bold pr-2">
                    {mineral}:
                  </label>
                  <input
                    type="text"
                    id={mineral}
                    name={mineral}
                    placeholder="e.g. 0.013"
                    value={formValues[mineral] || ""}
                    onChange={handleMineralInputChange}
                    className="p-1 border-gray-300 rounded-xlg w-48"
                  />
                </div>
              ))}
          </div>

          {/* Nutritional elements - column right */}
          <div className="col-span-1">
            {nutritionalMinerals
              .slice(Math.ceil(nutritionalMinerals.length / 2))
              .map((mineral) => (
                <div key={mineral} className="flex items-center mb-3">
                  <label htmlFor={mineral} className="w-40 font-bold pr-2">
                    {mineral}:
                  </label>
                  <input
                    type="text"
                    id={mineral}
                    name={mineral}
                    placeholder="e.g. 0.013"
                    value={formValues[mineral] || ""}
                    onChange={handleMineralInputChange}
                    className="p-1 border-gray-300 rounded-xlg w-48"
                  />
                </div>
              ))}
          </div>
        </div>
      </form>

      <h2 className="text-2xl font-bold m-8">Toxic Elements</h2>
      <form>
        <div className="grid grid-cols-2 gap-8">
          {/* Toxic elements column left */}
          <div className="col-span-1">
            {toxicMinerals
              .slice(0, Math.ceil(toxicMinerals.length / 2))
              .map((mineral) => (
                <div className="flex items-center mb-3" key={mineral}>
                  <label htmlFor={mineral} className="w-40 font-bold pr-2">
                    {mineral}:
                  </label>
                  <input
                    type="text"
                    id={mineral}
                    name={mineral}
                    placeholder="e.g. 0.013"
                    value={formValues[mineral] || ""}
                    onChange={handleMineralInputChange}
                    className="p-1 border-gray-300 rounded-xlg w-48"
                  />
                </div>
              ))}
          </div>

          {/* Toxic elements column right */}
          <div className="col-span-1">
            {toxicMinerals
              .slice(Math.ceil(toxicMinerals.length / 2))
              .map((mineral) => (
                <div className="flex items-center mb-3" key={mineral}>
                  <label htmlFor={mineral} className="w-40 font-bold pr-2">
                    {mineral}:
                  </label>
                  <input
                    type="text"
                    id={mineral}
                    name={mineral}
                    placeholder="e.g. 0.013"
                    value={formValues[mineral] || ""}
                    onChange={handleMineralInputChange}
                    className="p-1 border-gray-300 rounded-xlg w-48"
                  />
                </div>
              ))}
          </div>
        </div>
      </form>
      <button type="submit" className="m-8 p-3 rounded-xlg">
        Process Results
      </button>
      <div>
        <EliminationTable
          idealGood={idealGoodMinerals}
          poor={poorMinerals}
          veryPoor={veryPoorMinerals}
          elevated={elevatedMinerals}
        />
      </div>
    </div>
  );
};

export default MineralsForm;
