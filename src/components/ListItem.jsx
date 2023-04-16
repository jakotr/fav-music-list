import { useDispatch } from "react-redux";
import { RiDeleteBinLine, RiHeart3Line, RiHeart3Fill } from "react-icons/ri";

//store
import { removeItem, toggleBest } from "../store/apps/music";

const ListItem = ({ listItem: { id, name, isBest, date } }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full gap-2 grid grid-cols-list items-center p-3 rounded-xl transition hover:bg-stone-100">
      <span>{id}.</span>
      <span className={`${isBest ? "font-bold" : "font-normal"}`}>{name}</span>
      <div className="flex gap-4 items-center text-xl sm:mr-12">
        <button
          className="transition hover:text-primary hover:scale-105"
          onClick={() => dispatch(toggleBest(id))}
        >
          {isBest ? <RiHeart3Fill /> : <RiHeart3Line />}
        </button>
        <button
          className="transition hover:text-red-600 hover:scale-105"
          onClick={() => dispatch(removeItem(id))}
        >
          <RiDeleteBinLine />
        </button>
      </div>
      <span className="text-xs">{date}</span>
    </div>
  );
};

export default ListItem;
