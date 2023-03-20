export const skills = [
  {
    id: 1,
    skill: "1React"
  },
  {
    id: 2,
    skill: "2Redux"
  },
  {
    id: 3,
    skill: "3Redux-saga"
  },
  {
    id: 4,
    skill: "4Styled-components"
  },
  {
    id: 5,
    skill: "5JavaScript"
  },
  {
    id: 6,
    skill: "6React"
  },
  {
    id: 7,
    skill: "7 node.js"
  },
  {
    id: 8,
    skill: "8 praca zbiorowa"
  },
  {
    id: 9,
    skill: "9 homepage"
  },
  {
    id: 10,
    skill: "10 node.js"
  },
  {
    id: 11,
    skill: "11 praca zbiorowa"
  },
  {
    id: 12,
    skill: "12 homepage"
  },
];

export const skillsToLearn = [
  {
    id: 1,
    skill: "Node.js"
  },
  {
    id: 2,
    skill: "backend"
  },
  {
    id: 3,
    skill: "React Native"
  },
  {
    id: 4,
    skill: "Others"
  },
];

// column logic:

const skillLength = Object.keys(skills).length;
export const firstColumn = Math.ceil(skillLength / 3) ;
export const secondColumn = firstColumn + 1;
export const thirdColumn = skillLength - (Math.floor(skillLength/3) - 1);
export const firstOfTwo = Math.ceil(skillLength / 2) ;

const skillsLengthToLearn = Object.keys(skillsToLearn).length ;
export const firstColumnToLearn = Math.ceil(skillsLengthToLearn / 3) ;
export const secondColumnToLearn = firstColumnToLearn + 1;
export const thirdColumnToLearn = skillsLengthToLearn - (Math.floor(skillsLengthToLearn/3) - 1);
export const firstOfTwoToLearn = Math.ceil(skillsLengthToLearn / 2) ;