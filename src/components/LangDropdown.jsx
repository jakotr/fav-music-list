import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

//store
import { changeLang } from "../store/apps/lang";

const LangDropdown = () => {
  const dispatch = useDispatch();
  
  //get current language and the whole list
  const { currentLang, languages } = useSelector((state) => state.language);

  return (
    <Dropdown
      value={currentLang}
      onChange={(e) => dispatch(changeLang(e.value))}
      options={languages}
      controlClassName="rounded-xl text-sm py-[5px] pl-2 pr-8"
      menuClassName="text-sm"
    />
  );
};

export default LangDropdown;
