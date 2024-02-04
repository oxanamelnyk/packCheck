import Button from "./Button";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      <Button type="secondary">Mark all as complite</Button>
      <Button type="secondary">Mark all as uncomplite</Button>
      <Button type="secondary">Reset to initial</Button>
      <Button type="secondary">Remove all items</Button>
    </section>
  );
}
