export const skills = [
  {
    id: 1,
    skill: "HTML"
  },
  {
    id: 2,
    skill: "CSS"
  },
  {
    id: 3,
    skill: "JavaScript"
  },
  {
    id: 4,
    skill: "React"
  },
  {
    id: 5,
    skill: "Styled Components"
  },
  {
    id: 6,
    skill: "Redux"
  },
  {
    id: 7,
    skill: "Redux-saga"
  },
  {
    id: 8,
    skill: "Github"
  },
  {
    id: 9,
    skill: "Teamwork - Pull requests, merge"
  },
  {
    id: 10,
    skill: "Fetch"
  },
  {
    id: 11,
    skill: "Async/Await"
  },
  {
    id: 12,
    skill: "Axios"
  },
  {
    id: 13,
    skill: "Redux-toolkit"
  },
];

export const skillsToLearn = [
  {
    id: 1,
    skill: "Typescript"
  },
  {
    id: 2,
    skill: "Python"
  },
  {
    id: 3,
    skill: "React Native"
  },
  {
    id: 4,
    skill: "SQL"
  },
  {
    id: 5,
    skill: "Material-UI"
  },
  {
    id: 6,
    skill: "More and more..."
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