import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  info?: string;
  warning?: string;
  error?: string;
}

/** 2023/07/05 - "react-hook-form" 전용 input 컴포넌트 - by 1-blue */
const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ id, info, warning, error, className, ...props }, ref) => {
    const [isFocus, setIsFocus] = useState(false);

    return (
      <fieldset className="flex flex-col space-y-0.5">
        <label
          htmlFor={id}
          className="cursor-pointer text-main-text font-bold text-sm"
        >
          {id}
        </label>
        <input
          id={id}
          className={twMerge(
            "px-3 py-2 bg-main-box-bg border border-main-line rounded-sm transition-colors hover:border-main-300 placeholder:text-main-text placeholder:text-xs focus:outline-none",
            isFocus && "border-main-500 hover:border-main-500",
            className
          )}
          ref={ref}
          {...props}
          onFocus={(e) => {
            props.onFocus?.(e);
            setIsFocus(true);
          }}
          onBlur={(e) => {
            props.onBlur?.(e);
            setIsFocus(false);
          }}
        />
        {info && (
          <span className="pt-0.5 text-xxs text-blue-500">** {info} **</span>
        )}
        {warning && (
          <span className="pt-0.5 text-xxs text-yellow-500">
            ** {warning} **
          </span>
        )}
        {error && (
          <span className="pt-0.5 text-xxs text-red-500">** {error} **</span>
        )}
      </fieldset>
    );
  }
);

export default Input;
