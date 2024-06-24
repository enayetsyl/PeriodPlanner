import React, { useContext } from 'react';
import { RoutineContext } from '../context/RoutineContext';

const RoutineTable = () => {
  const { classes, sections, days, periods, routine, setRoutine } = useContext(RoutineContext);

  const handleInputChange = (e, dayIndex, periodIndex, type, className, sectionName) => {
    const { value } = e.target;
    const routineKey = `${className}-${sectionName}`;

    if (!routine[routineKey]) return;

    // Create a deep copy of the routine to ensure immutability
    const newRoutine = { ...routine };
    newRoutine[routineKey] = { ...newRoutine[routineKey] };
    newRoutine[routineKey].table = newRoutine[routineKey].table.map((row, i) =>
      row.map((cell, j) => (i === dayIndex && j === periodIndex ? { ...cell } : cell))
    );

    const cell = newRoutine[routineKey].table[dayIndex][periodIndex];

    // Check for duplicate teacher assignment in the same period and same day
    if (type === 'teachers') {
      for (let classSection in routine) {
        if (classSection !== routineKey) {
          const otherClassTable = routine[classSection].table;
          if (otherClassTable[dayIndex][periodIndex].teachers.includes(value)) {
            alert(`Teacher ${value} is already assigned to another class during this period on the same day.`);
            return;
          }
        }
      }
    }

    cell[type] = [value]; // Store the value in the appropriate type array

    setRoutine(newRoutine);
    console.log(newRoutine); // Log the updated routine to the console
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {classes.map((className) =>
        sections.map((section) => (
          <div key={`${className}-${section}`} className="mb-8">
            <h2 className="text-lg font-bold">{className} - Section {section}</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Day</th>
                  {periods.map((period) => (
                    <th key={`${period}-header`} colSpan={2} className="border p-2">
                      {period}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {days.map((day, dayIndex) => (
                  <tr key={`${day}-${dayIndex}`}>
                    <td className="border p-2">{day}</td>
                    {periods.map((period, periodIndex) => (
                      <React.Fragment key={`${day}-${period}-${periodIndex}`}>
                        <td key={`${day}-${period}-${periodIndex}-teacher`} className="border p-2">
                          <input
                            type="text"
                            placeholder="Teacher"
                            onChange={(e) =>
                              handleInputChange(e, dayIndex, periodIndex, 'teachers', className, section)
                            }
                            value={
                              routine[`${className}-${section}`]?.table[dayIndex][periodIndex].teachers[0] || ''
                            }
                            className="p-2 w-full"
                          />
                        </td>
                        <td key={`${day}-${period}-${periodIndex}-subject`} className="border p-2">
                          <input
                            type="text"
                            placeholder="Subject"
                            onChange={(e) =>
                              handleInputChange(e, dayIndex, periodIndex, 'subjects', className, section)
                            }
                            value={
                              routine[`${className}-${section}`]?.table[dayIndex][periodIndex].subjects[0] || ''
                            }
                            className="p-2 w-full"
                          />
                        </td>
                      </React.Fragment>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
};

export default RoutineTable;
