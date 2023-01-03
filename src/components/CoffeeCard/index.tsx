import {
  AddToCartButton,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeCardImage,
  CoffeeCardTags,
  PriceLabel,
  TagBadge,
} from "./styles";
import { QuantitySelector } from "../QuantitySelector";
import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { CoffeeDataProps } from "../../database/coffee-data";
import { TagsDataIndexed } from "../../database/tags-data";
import { ProductDataType } from "../../reducers/orders/reducer";

interface CoffeeCardProps extends CoffeeDataProps {
  onAddToCartClick: (obj: ProductDataType) => void;
}

export function CoffeeCard({
  id,
  name,
  description,
  price,
  img,
  tags = [],
  onAddToCartClick,
}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (qty: number) => setQuantity(qty);

  const handleAddToCartClick = () => onAddToCartClick({ id, qty: quantity });

  return (
    <CoffeeCardContainer>
      <CoffeeCardImage
        src={`./images/${img}`}
        alt={`Café ${name}. ${description}`}
      />
      <CoffeeCardTags>
        {tags.length ? (
          tags.map((tagId) => (
            <TagBadge key={tagId}>{TagsDataIndexed[tagId]}</TagBadge>
          ))
        ) : (
          <></>
        )}
      </CoffeeCardTags>
      <h3>{name}</h3>
      <p>{description}</p>
      <CoffeeCardFooter>
        <PriceLabel>
          {new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2 }).format(
            price
          )}
        </PriceLabel>
        <QuantitySelector value={quantity} onChange={handleQuantityChange} />
        <AddToCartButton>
          <ShoppingCart
            size={22}
            weight="fill"
            onClick={handleAddToCartClick}
          />
        </AddToCartButton>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  );
}
