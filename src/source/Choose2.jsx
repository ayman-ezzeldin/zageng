import { useState } from 'react';

function CommitteeSelection() {
  const [selectedCommittee, setSelectedCommittee] = useState(null);

  const committeeMembers = [
    { name: 'Academic', id: 'academic' },
    { name: 'CS', id: 'cs' },
    { name: 'IT', id: 'it' },
    { name: 'Technical', id: 'technical' },
    { name: 'HR', id: 'hr' },
    { name: 'Media', id: 'media' },
  ];

  const handleCommitteeClick = (id) => {
    setSelectedCommittee(id);
  };

  return (
    <div className="flex gap-5 justify-center items-start flex-wrap mt-9 sm:mr-[50px]">
      <h2 className="text-2xl">Choose your committee</h2>
      <div className="sm:border-l-2 pl-4 sm:pl-5 flex flex-col gap-4 flex-wrap">
        <div id="commitee" className="grid grid-cols-3 justify-center text-center items-center gap-4 mr-4">
          {committeeMembers.map((committee) => (
            <div
              key={committee.id}
              className={`committee-member cursor-pointer lg:w-[197px] rounded-md border border-gray-700 px-2 py-4 select-none ${
                selectedCommittee === committee.id ? 'selected' : ''
              }`}
              onClick={() => handleCommitteeClick(committee.id)}
            >
              <h3>{committee.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommitteeSelection;
