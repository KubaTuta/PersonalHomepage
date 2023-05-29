export const useCalculateColums = (skills) => {
  const skillLength = Object.keys(skills).length;
  const firstColumn = Math.ceil(skillLength / 3);
  const secondColumn = firstColumn + 1;
  const lastColumn = skillLength - (Math.floor(skillLength / 3) - 1);
  const firstOfTwo = Math.ceil(skillLength / 2);

  return { firstColumn, secondColumn, lastColumn, firstOfTwo };
};
