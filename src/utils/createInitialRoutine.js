// src/utils/createInitialRoutine.js
export const createInitialRoutine = (classes, sections, days, periods) => {
  const initialRoutine = {};

  classes.forEach((className) => {
    sections.forEach((sectionName) => {
      const key = `${className}-Section-${sectionName}`;
      initialRoutine[key] = {
        days,
        periods,
        table: days.map(() => periods.map(() => ({ teachers: [], subjects: [] }))),
      };
    });
  });

  return initialRoutine;
};
