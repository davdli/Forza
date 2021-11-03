// create custom hook
// map through inputsCategory, for each input we need the exercise it belongs to

import { useContext } from "react";
import { StrengthProgressContext } from "./context/context";
import { currentCategories, startCategories, resetCategories } from "./constants/categories";

// [
//   { id: 1, category: 'Current', weight: 50, exercise: 'Bench'},
//   { id: 1, category: 'Current', weight: 50, exercise: 'Bench'},
//   { id: 1, category: 'Current', weight: 50, exercise: 'Squat'},
// ]

// export const currentCategories = [
//   {type: 'Squat', weight: 0, color: currentColors[0]},
//   {type: 'Deadlift', weight: 0, color: currentColors[1]},
//   {type: 'Hip Thrust', weight: 0, color: currentColors[2]},
// ];

const useInputs = (title) => {
  resetCategories();
  const { inputs } = useContext(StrengthProgressContext);
  const inputsCategory = inputs.filter((input) => input.category === title); // array only keep inputs for certain category
  const total = inputsCategory.reduce((accum, val) => accum += val.weight, 0); // sum of weights of all input left
  const categories = title === 'Current' ? currentCategories : startCategories; // categories with weight set to 0 for exercises

  console.log({inputsCategory, total, categories});

  inputsCategory.forEach((input) => {
    const exercise = categories.find((exercise) => exercise.type === input.exercise); // for each input, need to find exercise it belongs to

    // loop through all inputs in category
    // in categories, find type that matches input exercises, and increment by input weight amount
    if (exercise) exercise.weight += input.weight;
  });

  const filteredExercises = categories.filter((exercise) => exercise.weight > 0);

  const chartData = {
    datasets: [{
      data: filteredExercises.map((exercise) => exercise.weight),
      backgroundColor: filteredExercises.map((exercise) => exercise.color)
    }],
    labels: filteredExercises.map((exercise) => exercise.type)
  };

  return { total, chartData };
};

export default useInputs;
