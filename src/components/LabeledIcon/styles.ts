import styled from "styled-components";

export type LabeledIconVariants =
  | "purple-dark"
  | "purple"
  | "purple-light"
  | "yellow-dark"
  | "yellow"
  | "yellow-light"
  | "base-text";

interface LabeledIconContainerProps {
  variant: LabeledIconVariants;
}

export const LabeledIconContainer = styled.div<LabeledIconContainerProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors[props.variant]};
    color: ${(props) => props.theme.colors.white};
  }
  span {
    font-size: ${(props) => props.theme.fontSize["text-md"]};
  }
`;
