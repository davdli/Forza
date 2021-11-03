const currentColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d'];
const startColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79'];

export const currentCategories = [
  {type: 'Squat', weight: 0, color: currentColors[0]},
  {type: 'Deadlift', weight: 0, color: currentColors[1]},
  {type: 'Hip Thrust', weight: 0, color: currentColors[2]},
  {type: 'Bench Press', weight: 0, color: currentColors[3]},
  {type: 'Shoulder Press', weight: 0, color: currentColors[4]},
  {type: 'Dip', weight: 0, color: currentColors[5]},
  {type: 'Pull-up', weight: 0, color: currentColors[6]},
  {type: 'Pendlay Row', weight: 0, color: currentColors[7]},
];

export const startCategories = [
  {type: 'Squat', weight: 0, color: startColors[0]},
  {type: 'Deadlift', weight: 0, color: startColors[1]},
  {type: 'Hip Thrust', weight: 0, color: startColors[2]},
  {type: 'Bench Press', weight: 0, color: startColors[3]},
  {type: 'Shoulder Press', weight: 0, color: startColors[4]},
  {type: 'Dip', weight: 0, color: startColors[5]},
  {type: 'Pull-up', weight: 0, color: startColors[6]},
  {type: 'Pendlay Row', weight: 0, color: startColors[7]},
];

export const resetCategories = () => {
  currentCategories.forEach((category) => category.weight = 0);
  startCategories.forEach((category) => category.weight = 0);
};
