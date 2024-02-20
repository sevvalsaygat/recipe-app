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
        "cursor-pointer py-5 px-6 border-transparent w-fit bg-lime-800 text-white text-sm font-normal rounded-sm hover:bg-green-600":
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
