import Logo from "./Logo";
import Counter from "./Counter";

export default function Header({ numberOfItemsPacked, totalNimberOfItems }) {
  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={numberOfItemsPacked}
        totalNimberOfItems={totalNimberOfItems}
      />
    </header>
  );
}
