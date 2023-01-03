import { IconProps } from "phosphor-react";
import { LabeledIconContainer, LabeledIconVariants } from "./styles";

interface LabeledIconProps {
  variant?: LabeledIconVariants;
  icon: IconProps;
  label: string;
}

export function LabeledIcon({
  variant = "base-text",
  icon,
  label,
}: LabeledIconProps) {
  return (
    <LabeledIconContainer variant={variant}>
      <>
        {icon}
        <span>{label}</span>
      </>
    </LabeledIconContainer>
  );
}
