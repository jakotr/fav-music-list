import { useDispatch } from "react-redux";
import { RiDeleteBinLine, RiHeart3Line, RiHeart3Fill } from "react-icons/ri";

//store
import { removeItem, toggleBest } from "../store/apps/music";

//images
import { vinyl } from "../assets";

const GridItem = ({ listItem: { id, name, isBest, date } }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col gap-2 p-3 rounded-xl border border-lightGray transition bg-stone-100 drop-shadow-lg">
      <div className="w-full flex justify-center items-center mb-3 bg-white p-4">
        <img className="w-10/12 h-auto" src={vinyl} alt="placeholder image" />
      </div>
      <span className={`${isBest ? "font-bold" : "font-normal"}`}>
        {id}. {name}
      </span>
      <span className="text-xs block -mt-1">{date}</span>
      <div className="flex gap-4 justify-between items-center text-2xl mt-3">
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
    </div>
  );
};

export default GridItem;
