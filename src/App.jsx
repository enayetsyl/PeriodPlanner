// src/App.jsx
import React from 'react';
import RoutineForm from './components/RoutineForm';
import RoutineTable from './components/RoutineTable';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">School Routine Generator</h1>
      <RoutineForm />
      <RoutineTable />
    </div>
  );
};

export default App;
