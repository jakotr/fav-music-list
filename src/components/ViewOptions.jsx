import { useDispatch, useSelector } from "react-redux";

//store
import { changeView } from "../store/apps/view";

const ViewOptions = () => {
  const dispatch = useDispatch();

  //view Slice
  const { currentView, viewOptions } = useSelector((state) => state.view);

  return (
    <>
      {viewOptions.map(({ name, icon }) => (
        <button
          key={name}
          onClick={() => dispatch(changeView(name))}
          className={`${
            currentView === name ? "bg-stone-50" : ""
          } w-8 h-8 flex items-center justify-center rounded-full transition`}
        >
          <img src={icon} alt={name} width="16px" height="16px" />
        </button>
      ))}
    </>
  );
};

export default ViewOptions;
