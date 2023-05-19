import { useCalculateColums } from "../useHooks";
import { ListWrapper, StyledUl, StyledLi, Circle } from "./styled";

interface Prop {
  id: Number;
  skill: String;
}

interface Props {
  props: Prop[];
}

const Skillset = ({ props }: Props) => {
  const { firstColumn, secondColumn, lastColumn, firstOfTwo } =
    useCalculateColums(props);

  return (
    <ListWrapper>
      <StyledUl
        firstColumn={firstColumn}
        secondColumn={secondColumn}
        lastColumn={lastColumn}
        firstOfTwo={firstOfTwo}
      >
        {props.map(({ skill, id }) => (
          <StyledLi key={id.toString()}>
            <Circle /> {skill}
          </StyledLi>
        ))}
      </StyledUl>
    </ListWrapper>
  );
};

export default Skillset;
