import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { initialItems } from "../lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleMarkAllAsComlite = () => {
    setItems(
      items.map((item) => {
        return { ...item, packed: true };
      })
    );
  };

  const handleMarkAllInComlite = () => {
    setItems(
      items.map((item) => {
        return { ...item, packed: false };
      })
    );
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          numberOfItemsPacked={items.filter((item) => item.packed).length}
          totalNimberOfItems={items.length}
        />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleMarkAllAsComlite={handleMarkAllAsComlite}
          handleMarkAllInComlite={handleMarkAllInComlite}
          handleResetToInitial={handleResetToInitial}
          handleRemoveAllItems={handleRemoveAllItems}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
