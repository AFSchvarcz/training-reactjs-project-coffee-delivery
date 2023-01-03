import styled from "styled-components";

export const CoffeeCardSmallContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem;

  border-radius: 6px 36px 6px 36px;

  background-color: ${(props) => props.theme.colors["base-card"]};
  color: ${(props) => props.theme.colors["base-text"]};
`;

export const CoffeeCardSmallImage = styled.img`
  height: 4rem;
  width: auto;
`;

export const CoffeeCardSmallInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  > span {
    font-size: ${(props) => props.theme.fontSize["text-md"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const PriceLabel = styled.span`
  margin-left: auto;
  margin-bottom: auto;
  font-family: "Baloo 2", sans-serif;
  font-size: ${(props) => props.theme.fontSize["title-sm"]};
  white-space: nowrap;
  &::before {
    content: "R$ ";
    font-family: "Roboto", sans-serif;
    font-size: ${(props) => props.theme.fontSize["text-sm"]};
  }
`;

export const RemoveButton = styled.button`
  border-radius: 6px;
  padding: 0 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border: none;
  box-shadow: none;
  outline: none;

  background-color: ${(props) => props.theme.colors["purple-light"]};
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: ${(props) => props.theme.fontSize["text-sm"]};

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors["base-hover"]};
  }
`;
