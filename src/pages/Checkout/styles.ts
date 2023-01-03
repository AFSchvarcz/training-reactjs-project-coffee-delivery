import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;

  h2 {
    margin-bottom: 1rem;
    font-size: ${(props) => props.theme.fontSize["title-xs"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;
