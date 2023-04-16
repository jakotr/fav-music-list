import { useSelector } from "react-redux";

//components
import LangDropdown from "./LangDropdown";

//store
import { selectTranslation } from "../store/apps/lang";

//images
import { logo } from "../assets/index";

const Header = () => {
  //translation
  const {
    header: { title },
  } = useSelector(selectTranslation);

  return (
    <header className="section rounded-none mb-4">
      <div className="container flex justify-between items-center">
        <span className="logo flex items-center gap-4">
          <img src={logo} alt="Logo" width={"48px"} height={"48px"} />
          <span>{title}</span>
        </span>
        <LangDropdown />
      </div>
    </header>
  );
};

export default Header;
