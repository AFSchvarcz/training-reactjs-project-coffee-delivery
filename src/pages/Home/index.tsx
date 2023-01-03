import { useContext, useState } from "react";
import { CoffeeCard } from "../../components/CoffeeCard";
import { OrderContext } from "../../contexts/OrderContext";
import { CoffeeData, CoffeeDataProps } from "../../database/coffee-data";
import { TagId, TagsData } from "../../database/tags-data";
import { Banner } from "./Banner";
import {
  CoffeeListFilters,
  CoffeListBody,
  CoffeListHeader,
  FilterButton,
} from "./styles";

export function Home() {
  const { addProductToCart } = useContext(OrderContext);
  const [activeTagsIds, setActiveTagsTds] = useState<TagId[]>(
    TagsData.map(({ id }) => id)
  );
  const [activeCoffeeList, setActiveCoffeList] = useState<CoffeeDataProps[]>([
    ...CoffeeData,
  ]);

  const handleFilterButtonClick = (tagId: TagId) => {
    const newActiveTagsIds = activeTagsIds.includes(tagId)
      ? [...activeTagsIds].filter((id) => id !== tagId)
      : [...activeTagsIds, tagId];
    setActiveTagsTds(newActiveTagsIds);
    setActiveCoffeList(
      CoffeeData.filter(({ tags }) =>
        tags.some((tag) => newActiveTagsIds.includes(tag))
      )
    );
  };

  return (
    <>
      <Banner />
      <main>
        <CoffeListHeader>
          <h1>Nossos cafés</h1>
          <CoffeeListFilters>
            {TagsData.map(({ id, name }) => (
              <FilterButton
                key={id}
                filterActive={activeTagsIds.includes(id)}
                onClick={() => handleFilterButtonClick(id)}
              >
                {name}
              </FilterButton>
            ))}
          </CoffeeListFilters>
        </CoffeListHeader>
        <CoffeListBody>
          {activeCoffeeList.map((data) => (
            <CoffeeCard
              key={data.id}
              {...data}
              onAddToCartClick={addProductToCart}
            />
          ))}
        </CoffeListBody>
      </main>
    </>
  );
}
