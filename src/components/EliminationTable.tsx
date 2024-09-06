interface EliminationTableProps {
  idealGood: string[];
  poor: string[];
  veryPoor: string[];
  elevated: string[];
}

function distributeMinerals(minerals: string[]) {
  return minerals.length > 0 ? (
    minerals.map((mineral, index) => <div key={index}>{mineral}</div>)
  ) : (
    <div>N/A</div>
  );
}

export const EliminationTable = ({
  idealGood,
  poor,
  veryPoor,
  elevated,
}: EliminationTableProps) => {
  return (
    <div className="bg-white pt-10 pb-10">
      <h2 className="text-2xl font-bold mb-8">
        Nutritional Elements Elimination
      </h2>
      <div className="grid grid-cols-4 gap-2 p-2">
        <div className="col-span-1 w-40">
          <h2 className="bg-lime-600">IDEAL/GOOD</h2>
          <div className="border rounded-xlg w-40">
            {distributeMinerals(idealGood)}
          </div>
        </div>
        <div className="col-span-1">
          <h2>POOR</h2>
          {distributeMinerals(poor)}
        </div>
        <div className="col-span-1">
          <h2>VERY POOR</h2>
          {distributeMinerals(veryPoor)}
        </div>
        <div className="col-span-1">
          <h2>ELEVATED</h2>
          <div>{distributeMinerals(elevated)}</div>
        </div>
      </div>
    </div>
  );
};
