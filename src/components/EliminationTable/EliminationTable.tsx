import { type CategorizedMinerals } from "../../types/types";

// Helper function for displaying minerals
function distributeMinerals(minerals: string[]) {
  return minerals.length > 0 ? (
    minerals.map((mineral, index) => (
      <div
        key={index}
        className="bg-slate-200 rounded-full my-2 py-1 px-4 text-center text-slate-950"
      >
        {mineral}
      </div>
    ))
  ) : (
    <div className="bg-slate-200 rounded-full my-2 py-1 px-4 text-center">
      N/A
    </div>
  );
}

export const EliminationTable = ({
  categorizedMinerals,
}: {
  categorizedMinerals: CategorizedMinerals;
}) => {
  return (
    <div className="container mx-auto bg-white p-10">
      <h2 className="text-2xl font-bold mb-8">
        Nutritional Elements Elimination
      </h2>
      <div className="grid grid-cols-5 gap-4 p-2">
        <div className="col-span-1 w-36">
          <h2 className="bg-lime-500 rounded-full py-1 px-4 text-slate-950">
            IDEAL/GOOD
          </h2>
          <div>{distributeMinerals(categorizedMinerals.idealGood)}</div>
        </div>

        <div className="col-span-1">
          <h2 className="bg-yellow-400 rounded-full py-1 px-4 text-slate-950">
            POOR
          </h2>
          <div>{distributeMinerals(categorizedMinerals.poor)}</div>
        </div>

        <div className="col-span-1">
          <h2 className="bg-orange-400 rounded-full py-1 px-4 text-slate-950">
            VERY POOR
          </h2>
          <div>{distributeMinerals(categorizedMinerals.veryPoor)}</div>
        </div>

        <div className="col-span-1">
          <h2 className="bg-red-500 rounded-full py-1 px-4 text-slate-950">
            ELEVATED
          </h2>
          <div>{distributeMinerals(categorizedMinerals.elevated)}</div>
        </div>

        <div className="col-span-1">
          <h2 className="bg-slate-400 rounded-full py-1 px-4 text-slate-950">
            N/A
          </h2>
          <div>{distributeMinerals(categorizedMinerals.notApplicable)}</div>
        </div>
      </div>
    </div>
  );
};
