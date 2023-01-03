import styled from "styled-components";

export const QuantitySelectorContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 100%;
  gap: 0.5rem;
  border-radius: 6px;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors["base-title"]};
  background-color: ${(props) => props.theme.colors["base-button"]};
  font-size: ${(props) => props.theme.fontSize["text-md"]};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    box-shadow: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.purple};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors["base-text"]};
    }
  }
`;
