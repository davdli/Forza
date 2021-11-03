const currentColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d'];
const startColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79'];

export const currentCategories = [
  {exercise: 'Squat', weight: 0, color: currentColors[0]},
  {exercise: 'Deadlift', weight: 0, color: currentColors[1]},
  {exercise: 'Hip Thrust', weight: 0, color: currentColors[2]},
  {exercise: 'Bench Press', weight: 0, color: currentColors[3]},
  {exercise: 'Shoulder Press', weight: 0, color: currentColors[4]},
  {exercise: 'Dip', weight: 0, color: currentColors[5]},
  {exercise: 'Pull-up', weight: 0, color: currentColors[6]},
  {exercise: 'Pendlay Row', weight: 0, color: currentColors[7]},
];

export const startCategories = [
  {exercise: 'Squat', weight: 0, color: startColors[0]},
  {exercise: 'Deadlift', weight: 0, color: startColors[1]},
  {exercise: 'Hip Thrust', weight: 0, color: startColors[2]},
  {exercise: 'Bench Press', weight: 0, color: startColors[3]},
  {exercise: 'Shoulder Press', weight: 0, color: startColors[4]},
  {exercise: 'Dip', weight: 0, color: startColors[5]},
  {exercise: 'Pull-up', weight: 0, color: startColors[6]},
  {exercise: 'Pendlay Row', weight: 0, color: startColors[7]},
];

export const resetCategories = () => {
  currentCategories.forEach((category) => category.weight = 0);
  startCategories.forEach((category) => category.weight = 0);
};
