import Button from "./Button";
import { useItemsStore } from "./stores/itemsStore";

export default function ButtonGroup() {
  const markAllAsComlite = useItemsStore((state) => state.markAllAsComlite);
  const markAllAsInComlite = useItemsStore((state) => state.markAllAsInComlite);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "Mark all as complite",
      onClick: markAllAsComlite,
    },
    {
      text: "Mark all as uncomplite",
      onClick: markAllAsInComlite,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button
          key={button.text + button.onClick.toString()}
          onClick={button.onClick}
          buttonType="secondary">
          {button.text}
        </Button>
      ))}
    </section>
  );
}
