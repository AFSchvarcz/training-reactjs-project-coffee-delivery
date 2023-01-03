import styled, { css } from "styled-components";

export const CoffeListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  > h1 {
    font-size: ${(props) => props.theme.fontSize["title-lg"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;

export const CoffeeListFilters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

export const CoffeListBody = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  > div {
    margin-bottom: 1rem;
  }
`;

export interface FilterButtonProps {
  filterActive: boolean;
}

export const FilterButton = styled.button<FilterButtonProps>`
  background-color: transparent;
  border: ${(props) => `1px solid ${props.theme.colors["yellow-dark"]}`};
  color: ${(props) => props.theme.colors["yellow-dark"]};
  padding: 0.25rem 0.5rem;
  text-align: center;
  border-radius: 9999px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1rem;
  font-size: ${(props) => props.theme.fontSize["text-sm"]};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors["yellow-light"]};
    color: ${(props) => props.theme.colors["yellow-dark"]};
    border-color: transparent;
  }

  ${(props) => {
    if (!props.filterActive)
      return css`
        color: ${(props) => props.theme.colors["base-hover"]};
        border-color: ${(props) => props.theme.colors["base-hover"]};
      `;
  }}
`;
