export const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const parsPosition = (position) => {
  return position === 1 ? -1.5 : position === 2 ? 0 : 1.5;
};
