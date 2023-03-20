import { useDispatch, useSelector } from "react-redux"
import { selectDarkTheme, toggleTheme } from "../../../Features/themeSlice";
import { Button, Wrapper } from "./styled";
import { ReactComponent as ToggleOn } from "../../svg/ToggleOn.svg";
import { ReactComponent as ToggleOff } from "../../svg/ToggleOff.svg";

export const ThemeSwitcher = () => {
  const darkTheme = useSelector(selectDarkTheme);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      DARK MODE &nbsp;<span>{darkTheme ? " ON" : " OFF"}</span>
      <Button onClick={() => dispatch(toggleTheme())}>
        {darkTheme ? <ToggleOn /> : <ToggleOff />}
      </Button>
    </Wrapper>
  )
}
