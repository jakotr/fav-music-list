import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

//store
import { selectTranslation } from "../store/apps/lang";
import { addItem } from "../store/apps/music";

const AddItemList = () => {
  //state
  const [showForm, setShowForm] = useState(false);
  const [itemValue, setItemValue] = useState("");

  //dispatch
  const dispatch = useDispatch();

  //store
  const {
    form: { title, placeholder, button },
  } = useSelector(selectTranslation);

  //handle form submit - add item to store
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(itemValue));
    setShowForm(false);
    setItemValue("");
  };

  return (
    <>
      <button
        className="md:text-4xl text-2xl"
        onClick={() => setShowForm(true)}
      >
        <AiOutlinePlusCircle />
      </button>
      {showForm && (
        <>
          <div className="fixed top-0 left-0 bg-black/25 w-full h-full z-10"></div>
          <div className="fixed top-1/8 left-1/2 -translate-x-1/2 px-4 py-2 w-[95%] max-w-[500px] transition z-20 bg-white rounded-md">
            <div className="relative mb-3 pb-1 pr-5 border-b border-lightGray">
              <h2 className="font-bold">{title}</h2>
              <button
                className="absolute right-0 top-[12px] -translate-y-1/2 text-xl transition hover:text-red-600"
                onClick={() => setShowForm(false)}
              >
                <MdOutlineClose />
              </button>
            </div>
            <div className="py-4">
              <form
                className="flex gap-3 justify-center"
                onSubmit={(e) => handleSubmit(e)}
              >
                <input
                  className="border rounded-[4px] py-1 px-3 w-full"
                  type="text"
                  name="name"
                  value={itemValue}
                  onChange={(e) => setItemValue(e.target.value)}
                  placeholder={placeholder}
                />
                <button
                  className="bg-primary px-6 py-1 text-white rounded-[4px]"
                  type="submit"
                >
                  {button}
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddItemList;
