// create custom hook
// map through inputsCategory, for each input we need the exercise it belongs to

import { useContext } from "react";
import { StrengthProgressContext } from "./context/context";
import { currentCategories, startCategories, resetCategories } from "./constants/categories";

const useInputs = (title) => {
  resetCategories();
  const { inputs } = useContext(StrengthProgressContext);
  const inputsCategory = inputs.filter((input) => input.category === title); // array only keep inputs for certain category
  const categories = title === 'Current' ? currentCategories : startCategories; // categories with weight set to 0 for exercises

  const bench = inputsCategory.filter((input) => input.exercise === 'Bench');
  const squat = inputsCategory.filter((input) => input.exercise === 'Squat');
  const deadlift = inputsCategory.filter((input) => input.exercise === 'Deadlift');
  const shoulderPress = inputsCategory.filter((input) => input.exercise === 'Shoulder Press');
  const hipThrust = inputsCategory.filter((input) => input.exercise === 'Hip Thrust');
  const pendlayRow = inputsCategory.filter((input) => input.exercise === 'Pendlay Row');
  const dip = inputsCategory.filter((input) => input.exercise === 'Dip');
  const pullup = inputsCategory.filter((input) => input.exercise === 'Pull-up');

  // total of most recent weights of inputed exercises
  let total = 0;
  const all = [bench, squat, deadlift, shoulderPress, hipThrust, pendlayRow, dip, pullup];
  for (let i = 0; i < all.length; i++) {
    if (all[i][0]) total += all[i][0].weight;
  }

  inputsCategory.forEach((input) => {
    const exercise = categories.find((exercise) => exercise.type === input.exercise); // for each input, need to find exercise it belongs to

    // if exercise matches input, find most recent input in that exercises's category
    if (exercise && input.exercise === 'Bench') {
      exercise.weight = bench[0].weight;
    }
    if (exercise && input.exercise === 'Squat') {
      exercise.weight = squat[0].weight;
    }
    if (exercise && input.exercise === 'Deadlift') {
      exercise.weight = deadlift[0].weight;
    }
    if (exercise && input.exercise === 'Shoulder Press') {
      exercise.weight = shoulderPress[0].weight;
    }
    if (exercise && input.exercise === 'Hip Thrust') {
      exercise.weight = hipThrust[0].weight;
    }
    if (exercise && input.exercise === 'Pendlay Row') {
      exercise.weight = pendlayRow[0].weight;
    }
    if (exercise && input.exercise === 'Dip') {
      exercise.weight = dip[0].weight;
    }
    if (exercise && input.exercise === 'Pull-up') {
      exercise.weight = pullup[0].weight;
    }
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



