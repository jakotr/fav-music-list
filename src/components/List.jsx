import React from "react";
import { useSelector } from "react-redux";

//components
import ListOptions from "./ListOptions";
import ListItem from "./ListItem";
import GridItem from "./GridItem";

//store
import { selectTranslation } from "../store/apps/lang";

const List = () => {
  //get list elements
  const { list } = useSelector((state) => state.music);

  //get currentView view
  const { currentView } = useSelector((state) => state.view);

  //get translation
  const {
    list: { name, date, empty },
  } = useSelector(selectTranslation);

  const isListView = currentView === "list";

  return (
    <main className="container">
      <ListOptions />
      <section className="section bg-transparent px-0">
        {list.length > 0 ? (
          <div className={`${!isListView && "gap-5 grid grid-cols-grid"}`}>
            {isListView && (
              <div className="w-full grid grid-cols-list gap-2 px-3 pb-1 border-b border-darkGray">
                <span>#</span>
                <span>{name}</span>
                <div></div>
                <span>{date}</span>
              </div>
            )}
            {list.map((listItem, index) => {
              return isListView ? (
                <ListItem key={listItem.id} listItem={listItem} />
              ) : (
                <GridItem key={listItem.id} listItem={listItem} />
              );
            })}
          </div>
        ) : (
          <p>{empty}</p>
        )}
      </section>
    </main>
  );
};

export default List;
