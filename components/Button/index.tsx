import React from "react";

import cn from "classnames";

type ButtonPropTypes = {
  title?: string;
  className?: string;
  variant?: "primary" | "danger";
  onClick: () => void;
  leftIcon?: React.FC;
  rightIcon?: React.FC;
};

const Button: React.FC<ButtonPropTypes> = ({
  title,
  className,
  variant,
  onClick,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
}: ButtonPropTypes) => {
  return (
    <button
      onClick={onClick}
      className={cn(className, {
        "cursor-pointer py-4 px-6 border-transparent rounded-2xl w-fit bg-orange-800 hover:bg-orange-700 text-white text-sm font-serif":
          variant === "primary",
      })}
    >
      {LeftIcon && <LeftIcon />}
      {title}
      {RightIcon && <RightIcon />}
    </button>
  );
};

export default Button;
