import React from "react";

const StudentJoinToTeacher = () => {
  const JoinWays = [
    {
      title: "Join Via Link (provided from teacher)",
      placeholder: "Enter Link",
    },
    {
      title: "Join Via Code (provided from teacher)",
      placeholder: "Enter Code",
    },
    { title: "Add Other", placeholder: "Enter User Id" },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Join to Teacher</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {JoinWays.map((way, index) => (
          <>
            <JoinCard
              key={index}
              title={way.title}
              placeholder={way.placeholder}
            />
          </>
        ))}
      </div>
      <div className="mt-8 border border-gray-300 rounded-2xl p-4">
        <h3>Your already joined to 3 teachers.</h3>
        <ul className="list-disc list-inside">
          <li>Teacher 1</li>
          <li>Teacher 2</li>
          <li>Teacher 3</li>
        </ul>
      </div>
    </div>
  );
};

export default StudentJoinToTeacher;

const JoinCard = ({ title, placeholder }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-10">
      <h2>{title}</h2>
      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
      <button className="bg-brand-purple text-white px-4 py-2 rounded-md mt-2">
        Join
      </button>
    </div>
  );
};
