import React, { LegacyRef } from 'react';

interface TextInputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'size'
  > {
  className?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: TextInputSize;
  helperText?: string;
}

type TextInputSize = 'small' | 'medium' | 'large';

const getTextInputSize = (size?: TextInputSize) => {
  if (size === 'small') return 'px-4 py-1.5';
  if (size === 'medium') return 'px-6 py-2.5';
  if (size === 'large') return 'px-7 py-3';
  return 'px-6 py-2.5';
};

export const TextInput = React.forwardRef(
  (
    {
      className,
      disabled,
      label,
      placeholder,
      size,
      helperText,
      ...rest
    }: TextInputProps,
    ref: LegacyRef<HTMLInputElement> | undefined,
  ) => {
    return (
      <>
        {label && (
          <label
            className="block mb-1 text-sm font-medium text-gray-900 "
            htmlFor="default-input"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-ap2 focus:border-ap2 block dark:bg-white text-[16px] font-normal 
          ${disabled && 'text-gray-200'} 
          ${getTextInputSize(size)} 
          ${className}`}
          disabled={disabled}
          placeholder={placeholder}
          type="text"
          {...rest}
        />
        {helperText && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">{helperText}</span>
          </p>
        )}
      </>
    );
  },
);

TextInput.displayName = 'TextInput';
