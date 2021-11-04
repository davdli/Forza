const currentColors = ['#04e38d', '#0bc77e', '#10ac6e', '#14915f', '#16784f', '#165f40', '#154731', '#123123'];
const startColors = ['#f79d79', '#ee8d68', '#e57c58', '#dc6a48', '#d3583a', '#c9452c', '#bf2f1f', '#b50d12'];

export const currentCategories = [
  {type: 'Bench', weight: 0, color: currentColors[0]},
  {type: 'Squat', weight: 0, color: currentColors[1]},
  {type: 'Deadlift', weight: 0, color: currentColors[2]},
  {type: 'Shoulder Press', weight: 0, color: currentColors[3]},
  {type: 'Hip Thrust', weight: 0, color: currentColors[4]},
  {type: 'Pendlay Row', weight: 0, color: currentColors[5]},
  {type: 'Dip', weight: 0, color: currentColors[6]},
  {type: 'Pull-up', weight: 0, color: currentColors[7]},
];

export const startCategories = [
  {type: 'Bench', weight: 0, color: startColors[0]},
  {type: 'Squat', weight: 0, color: startColors[1]},
  {type: 'Deadlift', weight: 0, color: startColors[2]},
  {type: 'Shoulder Press', weight: 0, color: startColors[3]},
  {type: 'Hip Thrust', weight: 0, color: startColors[4]},
  {type: 'Pendlay Row', weight: 0, color: startColors[5]},
  {type: 'Dip', weight: 0, color: startColors[6]},
  {type: 'Pull-up', weight: 0, color: startColors[7]},
];

export const resetCategories = () => {
  currentCategories.forEach((category) => category.weight = 0);
  startCategories.forEach((category) => category.weight = 0);
};
