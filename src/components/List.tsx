import React, { useState } from "react";

const List: React.FC<ListProps> = ({ initialItems }) => {
  const [ListItems, setListItems] = useState<string[]>([...initialItems]);

  const addItemToList = () => {
    setListItems((state) => [...state, "Novo Item"]);
  };

  const removeFromTheList = (index: number) => {
    const updateItems = [...ListItems];
    updateItems.splice(index, 1);
    setListItems(updateItems);
  };

  return (
    <div>
      {ListItems.map((item, index) => (
        <li key={item}>
          {item}
          <button onClick={() => removeFromTheList(index)}>Remover</button>
        </li>
      ))}
      <button onClick={addItemToList}>Adicionar Item</button>
    </div>
  );
};

export default List;
