import Button from "./Button";

export default function ButtonGroup({
  handleMarkAllAsComlite,
  handleMarkAllInComlite,
  handleResetToInitial,
  handleRemoveAllItems,
  
}) {
  const secondaryButtons = [
    {
      text: "Mark all as complite",
      onClick: handleMarkAllAsComlite,
    },
    {
      text: "Mark all as uncomplite",
      onClick: handleMarkAllInComlite,
    },
    {
      text: "Reset to initial",
      onClick: handleResetToInitial,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
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
