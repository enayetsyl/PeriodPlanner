// src/context/RoutineContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const RoutineContext = createContext();

const createInitialRoutine = (classes, sections, days, periods) => {
  const routine = {};
  classes.forEach((className) => {
    sections.forEach((sectionName) => {
      routine[`${className}-${sectionName}`] = {
        days,
        periods,
        table: Array(days.length).fill(null).map(() =>
          Array(periods.length).fill(null).map(() => ({ teachers: [], subjects: [] }))
        ),
      };
    });
  });
  return routine;
};

export const RoutineProvider = ({ children }) => {
  const [teachers, setTeachers] = useState(['a', 'b', 'c']);
  const [classes, setClasses] = useState(['Class1']);
  const [sections, setSections] = useState(['A']);
  const [periods, setPeriods] = useState(['7.00-7.40', '7.41-8.20']);
  const [days, setDays] = useState(['Sat', 'Sun']);
  const [subjects, setSubjects] = useState(['eng', 'bac']);
  const [routine, setRoutine] = useState({});

  useEffect(() => {
    setRoutine(createInitialRoutine(classes, sections, days, periods));
  }, [classes, sections, days, periods]);

  return (
    <RoutineContext.Provider value={{
      teachers, setTeachers,
      classes, setClasses,
      sections, setSections,
      periods, setPeriods,
      days, setDays,
      subjects, setSubjects,
      routine, setRoutine,
    }}>
      {children}
    </RoutineContext.Provider>
  );
};
