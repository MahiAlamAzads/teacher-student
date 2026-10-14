const StudentDashboardLedger = ({ ledger, value, requiredDate }) => {
  return (
    <div className="border border-gray-300 p-2 rounded-xl bg-[#d0fb0f]">
      <div className="flex flex-col justify-between items-center">
        <h2 className="text-sm font-semibold">
          {ledger}: {value}
        </h2>
        <p className="text-xs text-gray-700">
          {requiredDate}
        </p>
      </div>
    </div>
  );
};

export default StudentDashboardLedger;
