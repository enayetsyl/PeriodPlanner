// src/components/RoutineForm.jsx
import React, { useContext } from 'react';
import { RoutineContext } from '../context/RoutineContext';
import ItemInput from './ItemInput';

const RoutineForm = () => {
  const {
    teachers, setTeachers,
    classes, setClasses,
    sections, setSections,
    periods, setPeriods,
    days, setDays,
    subjects, setSubjects
  } = useContext(RoutineContext);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <ItemInput label="Teacher Name" items={teachers} setItems={setTeachers} />
      <ItemInput label="Class Name" items={classes} setItems={setClasses} />
      <ItemInput label="Section Name" items={sections} setItems={setSections} />
      <ItemInput label="Period Time" items={periods} setItems={setPeriods} />
      <ItemInput label="Day Name" items={days} setItems={setDays} />
      <ItemInput label="Subject Name" items={subjects} setItems={setSubjects} />
    </div>
  );
};

export default RoutineForm;
