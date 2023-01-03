import styled from "styled-components";

export const CartContainer = styled.div`
  flex: 1;
`;

export const CartCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 0.75rem;
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  background-color: ${(props) => props.theme.colors["base-card"]};

  > hr {
    height: 1px;
    background-color: ${(props) => props.theme.colors["base-button"]};
    border: none;
  }

  > p {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: ${(props) => props.theme.fontSize["text-sm"]};
      color: ${(props) => props.theme.colors["base-text"]};
    }
  }

  > p:last-of-type {
    span {
      font-weight: bold;
      font-size: ${(props) => props.theme.fontSize["text-lg"]};
      color: ${(props) => props.theme.colors["base-subtitle"]};
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 6px;
    outline: none;
    box-shadow: none;
    padding: 0.75rem;
    background-color: ${(props) => props.theme.colors.yellow};
    font-size: ${(props) => props.theme.fontSize["text-md"]};
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.colors["yellow-dark"]};
    }
  }
`;
