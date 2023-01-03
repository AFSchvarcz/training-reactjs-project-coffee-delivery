import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 1.25rem;

  border-radius: 6px 36px 6px 36px;

  background-color: ${(props) => props.theme.colors["base-card"]};
  color: ${(props) => props.theme.colors["base-text"]};

  h3 {
    font-size: ${(props) => props.theme.fontSize["title-sm"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  p {
    font-size: ${(props) => props.theme.fontSize["text-sm"]};
    color: ${(props) => props.theme.colors["base-label"]};
    margin-top: -0.5rem;
  }
`;

export const CoffeeCardImage = styled.img`
  height: 7.5rem;
  width: auto;
  margin-top: -2.5rem;
`;

export const CoffeeCardTags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TagBadge = styled.span`
  background-color: ${(props) => props.theme.colors["yellow-light"]};
  color: ${(props) => props.theme.colors["yellow-dark"]};
  padding: 0.25rem 0.5rem;
  text-align: center;
  border-radius: 9999px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 0.8rem;
  font-size: ${(props) => props.theme.fontSize["text-xxs"]};
`;

export const CoffeeCardFooter = styled.div`
  width: 13rem;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PriceLabel = styled.span`
  margin-right: auto;
  font-family: "Baloo 2", sans-serif;
  font-size: ${(props) => props.theme.fontSize["title-md"]};
  white-space: nowrap;
  &::before {
    content: "R$ ";
    font-family: "Roboto", sans-serif;
    font-size: ${(props) => props.theme.fontSize["text-sm"]};
  }
`;

export const AddToCartButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors["purple-dark"]};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.purple};
  }
`;
