// src/App.js

// import React from 'react';
import StructureSection from './components/StructureSection';
import JoinSection from './components/JoinSection';
import './input.css'
function App1() {
  return (
    <div className="bg-black text-white flex flex-col items-center">
      <div className="container max-w-[1300px] flex flex-col mt-10">
          <StructureSection />
          <JoinSection/>
      </div>
    </div>
  );
}

export default App1;

