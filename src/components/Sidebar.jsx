import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemsStore } from "./stores/itemsStore";

export default function Sidebar() {
  const addItems = useItemsStore((state) => state.addItems);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItems} />
      <ButtonGroup />
    </div>
  );
}
