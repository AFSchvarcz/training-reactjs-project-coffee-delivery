import { Minus, Plus } from "phosphor-react";
import { QuantitySelectorContainer } from "./styles";

interface QuantitySelectorProps {
  value: number;
  onChange: (quantity: number) => void;
}

export function QuantitySelector({ value, onChange }: QuantitySelectorProps) {
  const handleMinusClick = () => onChange(value === 1 ? 1 : value - 1);

  const handlePlusClick = () => onChange(value + 1);

  return (
    <QuantitySelectorContainer>
      <button onClick={handleMinusClick}>
        <Minus />
      </button>
      <span>{value}</span>
      <button onClick={handlePlusClick}>
        <Plus />
      </button>
    </QuantitySelectorContainer>
  );
}
