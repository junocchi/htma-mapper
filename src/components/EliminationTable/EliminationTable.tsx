import { type CategorizedMinerals } from "../../types/types";

import "./EliminationTable.css";

function renderMinerals(minerals: string[], bgColor: string) {
  return minerals.length > 0 ? (
    minerals.map((mineral, index) => (
      <div
        key={index}
        className={`${bgColor} rounded-full my-2 py-1 px-4 text-center text-slate-950`}
      >
        {mineral}
      </div>
    ))
  ) : (
    <div className="bg-slate-200 rounded-full my-2 py-1 px-4 text-center text-slate-950">
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
    <div className="bg-white p-10 w-full">
      <h2 className="text-2xl font-bold mb-8">Elements Elimination</h2>
      <div className="grid grid-cols-1 gap-4 p-2 mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-1">
          <h2 className="bg-green-500 rounded-full py-1 px-4 text-slate-950">
            IDEAL/GOOD
          </h2>
          <div>
            {renderMinerals(categorizedMinerals.idealGood, "bg-green-200")}
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="bg-yellow-400 rounded-full py-1 px-4 text-slate-950">
            POOR
          </h2>
          <div>{renderMinerals(categorizedMinerals.poor, "bg-yellow-200")}</div>
        </div>

        <div className="col-span-1">
          <h2 className="bg-orange-400 rounded-full py-1 px-4 text-slate-950">
            VERY POOR
          </h2>
          <div>
            {renderMinerals(categorizedMinerals.veryPoor, "bg-orange-200")}
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="bg-red-500 rounded-full py-1 px-4 text-slate-950">
            ELEVATED
          </h2>
          <div>
            {renderMinerals(categorizedMinerals.elevated, "bg-red-200")}
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="bg-slate-400 rounded-full py-1 px-4 text-slate-950">
            N/A
          </h2>
          <div>
            {renderMinerals(categorizedMinerals.notApplicable, "bg-slate-200")}
          </div>
        </div>
      </div>
    </div>
  );
};
