import { useDispatch, useSelector } from "react-redux"
import { selectDarkTheme, toggleTheme } from "../../../Features/themeSlice";
import { Wrapper } from "./styled";
import toggleOff from "../../svg/ToggleOff.svg";
import toggleOn from "../../svg/ToggleOn.svg";

export const ThemeSwitcher = () => {
  const darkTheme = useSelector(selectDarkTheme);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      DARK MODE &nbsp;<span>{darkTheme ? " ON" : " OFF"}</span><button onClick={()=>dispatch(toggleTheme())}><img src={darkTheme ? toggleOn : toggleOff}></img></button>
    </Wrapper>
  )
}
