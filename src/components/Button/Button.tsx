import React from "react";
import cx from "classnames";

import styles from "./Button.module.scss";

interface Props {
  type?: "text-only" | "bold" | "orange" | "round-orange";
  className?: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<Props> = ({
  children,
  className = "",
  type = "",
  size = 'medium',
  onClick = () => {},
}) => {
  const btnClassName = cx({
    [styles["container"]]: true,
    [styles["text-only"]]: type === "text-only",
    [styles["bold"]]: type === "bold",
    [styles["orange"]]: type === "orange",
    [styles["round-orange"]]: type === "round-orange",
    [className]: true,
  });
  return (
    <div onClick={onClick} className={btnClassName}>
      {children}
    </div>
  );
};

export default Button;