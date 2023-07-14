import React, { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** label의 이름 */
  id: string;
  /** 정보 메시지 */
  info?: string;
  /** 경고 메시지 */
  warning?: string;
  /** 에러 메시지 */
  error?: string;
}

/** 2023/07/14 - "react-hook-form" 전용 textarea 컴포넌트 - by 1-blue */
const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ id, info, warning, error, className, required, ...props }, ref) => {
    const [isFocus, setIsFocus] = useState(false);

    /** 2023/07/14 - 입력된 내용에 맞게 textarea 높이 지정 - by 1-blue */
    const handleResizeHeight: React.ChangeEventHandler<HTMLTextAreaElement> =
      useCallback(({ target }) => {
        target.style.height = "0px";
        target.style.height = target.scrollHeight + "px";
      }, []);

    return (
      <fieldset className="relative flex flex-col space-y-0.5">
        <label
          htmlFor={id}
          className={twMerge(
            "flex items-center space-x-1.5 cursor-pointer text-main-text font-bold",
            warning && "text-yellow-500",
            error && "text-red-500"
          )}
        >
          <span className="text-sm">{id}</span>
          {required && (
            <span
              className={twMerge(
                "text-xs text-blue-400",
                warning && "text-yellow-500",
                error && "text-red-500"
              )}
            >
              ( 필수 )
            </span>
          )}
        </label>
        <textarea
          id={id}
          className={twMerge(
            "px-3 py-2 bg-main-box-bg border border-main-line min-h-[60px] rounded-sm resize-none overflow-hidden transition-colors hover:border-main-300 placeholder:text-main-text placeholder:text-xs focus:outline-none",
            isFocus && "border-main-500 hover:border-main-500",
            warning && "border-yellow-400 hover:border-yellow-600",
            error && "border-red-500 hover:border-red-700",
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
          onChange={(e) => {
            props.onChange?.(e);
            handleResizeHeight(e);
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

export default Textarea;
