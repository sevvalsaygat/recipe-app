"use client";

import React from "react";

import {
  Controller,
  useFormContext,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";
import cn from "classnames";

type InputPropTypes = {
  name: string;
  label?: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  placeholder?: string;
  defaultValue?: string;
  variant?: "primary" | "opacity";
  className?: string;
  type?: "text";
};

const Input: React.FC<InputPropTypes> = ({
  name,
  label,
  rules,
  placeholder,
  defaultValue = "",
  variant,
  className,
  type = "text",
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name];

  return (
    <React.Fragment>
      {label && (
        <label className="block text-sm font-serif leading-6 text-orange-900">
          {label}
        </label>
      )}
      <div
        className={cn({
          "mt-2": !!label,
        })}
      >
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
          render={({ field }) => (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={cn(className, {
                "w-full mb-4 bg-orange-100 bg-opacity-20 border border-orange-300 rounded-lg p-3 placeholder:text-xs font-light placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-350 focus:bg-white text-sm":
                  variant === "primary",
              })}
            />
          )}
        />
      </div>
      {fieldError && (
        <div className="mt-2 text-red-500">{fieldError.message as string}</div>
      )}
    </React.Fragment>
  );
};

export default Input;
