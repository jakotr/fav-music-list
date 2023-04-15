import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-dropdown";

import { selectTranslation } from "../store/apps/lang";

const SORT_OPTIONS = ["id", "name"];

const ChangeSort = () => {
  //translation
  const { sortOptions } = useSelector(selectTranslation);

  //preapre options array from SORT_OPTIONS
  const options = SORT_OPTIONS.map((option) => ({
    value: option,
    label: sortOptions[option],
  }));

  //state
  const [sortOption, setSortOption] = useState("id");

  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Dropdown
        value={sortOption}
        onChange={(e) => handleChange(e)}
        options={options}
        controlClassName="rounded-xl text-sm py-[5px] pl-2 pr-8"
        menuClassName="text-sm"
      />
    </div>
  );
};

export default ChangeSort;
