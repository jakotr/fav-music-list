import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-dropdown";

//store
import { selectTranslation } from "../store/apps/lang";
import { sortList } from "../store/apps/music";

//config
import { SORT_OPTIONS } from "../config";

const ChangeSort = () => {
  const dispatch = useDispatch();

  //translation
  const { sortOptions } = useSelector(selectTranslation);

  //current sort option
  const { currentSortOption } = useSelector((state) => state.music);

  //preapre options array from SORT_OPTIONS
  const options = SORT_OPTIONS.map((option) => ({
    value: option,
    label: sortOptions[option],
  }));

  const handleChange = (e) => {
    // const [key, order] = e.value.split("-");
    dispatch(sortList(e.value));
  };

  return (
    <div>
      <Dropdown
        value={currentSortOption}
        onChange={(e) => handleChange(e)}
        options={options}
        controlClassName="rounded-xl text-sm py-[5px] pl-2 pr-8"
        menuClassName="text-sm w-[150px]"
      />
    </div>
  );
};

export default ChangeSort;
