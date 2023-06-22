import { ButtonHTMLAttributes } from "react";
import {
  ButtonSizes,
  ButtonVariants,
  Colors,
  IconList,
} from "../../utils/enums";
import "./styles.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: keyof typeof ButtonVariants;
  disableShadow?: boolean;
  color?: keyof typeof Colors;
  disabled?: boolean;
  startIcon?: keyof typeof IconList;
  endIcon?: keyof typeof IconList;
  size?: keyof typeof ButtonSizes;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    variant = "default",
    disableShadow = false,
    color = "default",
    disabled = false,
    startIcon,
    endIcon,
    size = "md",
    ...otherProps
  } = props;

  const className = !disabled
    ? `${variant} color-${color} ${disableShadow && "disable-shadow"} ${size}`
    : `${variant}-disabled ${size} ${disableShadow && "disable-shadow"}`;

  return (
    <button className={className} disabled={disabled} {...otherProps}>
      {startIcon && (
        <span className="material-symbols-outlined">{startIcon}</span>
      )}
      <span>{children}</span>
      {endIcon && <span className="material-symbols-outlined">{endIcon}</span>}
    </button>
  );
};
