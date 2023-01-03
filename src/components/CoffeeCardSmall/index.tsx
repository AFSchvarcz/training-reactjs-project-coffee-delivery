import {
  CoffeeCardSmallContainer,
  CoffeeCardSmallImage,
  CoffeeCardSmallInfo,
  PriceLabel,
  RemoveButton,
} from "./styles";
import { CoffeeDataProps } from "../../database/coffee-data";
import { QuantitySelector } from "../QuantitySelector";
import { Trash } from "phosphor-react";
import { ProductDataType } from "../../reducers/orders/reducer";

interface CoffeeCardSmallProps extends CoffeeDataProps {
  quantity: number;
  onQuantityChange: (productData: ProductDataType) => void;
  onRemoveClick: (id: string) => void;
}

export function CoffeeCardSmall({
  id,
  name,
  description,
  price,
  img,
  quantity,
  onQuantityChange,
  onRemoveClick,
}: CoffeeCardSmallProps) {
  const handleQuantityChange = (qty: number) => {
    onQuantityChange({ id, qty });
  };
  const handleRemoveClick = () => {
    onRemoveClick(id);
  };

  return (
    <CoffeeCardSmallContainer>
      <CoffeeCardSmallImage
        src={`./images/${img}`}
        alt={`Café ${name}. ${description}`}
      />
      <CoffeeCardSmallInfo>
        <span>{name}</span>
        <div>
          <QuantitySelector value={quantity} onChange={handleQuantityChange} />
          <RemoveButton onClick={handleRemoveClick}>
            <Trash size={22} />
            REMOVER
          </RemoveButton>
        </div>
      </CoffeeCardSmallInfo>
      <PriceLabel>
        {new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2 }).format(
          price * quantity
        )}
      </PriceLabel>
    </CoffeeCardSmallContainer>
  );
}
