const currentColors = ['#2e8b57', '#90ee90', '#3cb371', '#008000', '#8fbc8f', '#006400', '#004700', '#003300'];
const startColors = ['#87cefa', '#87ceeb', '#6495ed', '#4169e1', '#1e90ff', '#00bfff', '#0000cd', '#00008b'];

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
