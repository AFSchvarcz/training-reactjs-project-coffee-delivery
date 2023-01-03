import styled from "styled-components";

export const OrderDetailsContainer = styled.div`
  flex: 1.5;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors["base-card"]};

  header {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;

    p:first-of-type {
      font-size: ${(props) => props.theme.fontSize["text-md"]};
      color: ${(props) => props.theme.colors["base-subtitle"]};
    }
    p:nth-of-type(2) {
      font-size: ${(props) => props.theme.fontSize["text-sm"]};
      color: ${(props) => props.theme.colors["base-text"]};
    }
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;

    input {
      padding: 0.75rem;
      border: 1px solid ${(props) => props.theme.colors["base-button"]};
      border-radius: 4px;
      outline: none;
      box-shadow: none;
      background-color: ${(props) => props.theme.colors["base-input"]};
      font-size: ${(props) => props.theme.fontSize["text-sm"]};
      color: ${(props) => props.theme.colors["base-text"]};
      ::placeholder {
        color: ${(props) => props.theme.colors["base-label"]};
      }
      :focus {
        border-color: ${(props) => props.theme.colors["yellow-dark"]};
        ::placeholder {
          color: transparent;
        }
      }
    }

    input:nth-of-type(1) {
      width: 12.5rem;
    }
    input:nth-of-type(2) {
      flex: 100%;
    }
    input:nth-of-type(3) {
      width: 12.5rem;
    }
    input:nth-of-type(4) {
      flex: 1;
    }
    input:nth-of-type(5) {
      width: 12.5rem;
    }
    input:nth-of-type(6) {
      flex: 1;
    }
    input:nth-of-type(7) {
      width: 3.75rem;
    }
  }
`;

export const PaymentMethodConatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors["base-card"]};

  header {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;

    p:first-of-type {
      font-size: ${(props) => props.theme.fontSize["text-md"]};
      color: ${(props) => props.theme.colors["base-subtitle"]};
    }
    p:nth-of-type(2) {
      font-size: ${(props) => props.theme.fontSize["text-sm"]};
      color: ${(props) => props.theme.colors["base-text"]};
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const CustomRadioButton = styled.div`
  display: inline-block;
  position: relative;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 6px;

    background-color: ${(props) => props.theme.colors["base-button"]};

    font-size: ${(props) => props.theme.fontSize["text-sm"]};
    color: ${(props) => props.theme.colors["base-text"]};

    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme.colors["base-hover"]};
    }
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  input[type="radio"]:checked + label {
    border-color: ${(props) => props.theme.colors.purple};
  }
`;
