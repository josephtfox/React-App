import React, { useState } from 'react';
import './WeeklyMealPlan.css';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner'];

const WeeklyMealPlan = () => {
  const [mealPlan, setMealPlan] = useState(
    DAYS.reduce((acc, day) => {
      acc[day] = MEAL_TYPES.reduce((meals, type) => {
        meals[type] = '';
        return meals;
      }, {});
      return acc;
    }, {})
  );

  const handleMealChange = (day, mealType, meal) => {
    setMealPlan(prevPlan => ({
      ...prevPlan,
      [day]: {
        ...prevPlan[day],
        [mealType]: meal
      }
    }));
  };

  return (
    <div className="weekly-meal-plan">
      <h2>Weekly Meal Plan</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            {MEAL_TYPES.map(type => <th key={type}>{type}</th>)}
          </tr>
        </thead>
        <tbody>
          {DAYS.map(day => (
            <tr key={day}>
              <td>{day}</td>
              {MEAL_TYPES.map(type => (
                <td key={`${day}-${type}`}>
                  <input
                    type="text"
                    value={mealPlan[day][type]}
                    onChange={(e) => handleMealChange(day, type, e.target.value)}
                    placeholder={`Add ${type}`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyMealPlan;