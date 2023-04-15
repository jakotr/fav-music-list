//components
import ChangeSort from "./ChangeSort";
import AddItemList from "./AddItemList";
import ViewOptions from "./ViewOptions";

const ListOptions = () => {
  return (
    <div className="section flex justify-between items-center">
      <AddItemList />
      <span className="flex items-center gap-2">
        <ChangeSort />
        <ViewOptions />
      </span>
    </div>
  );
};

export default ListOptions;
