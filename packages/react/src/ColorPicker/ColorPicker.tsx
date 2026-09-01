import React, { InputHTMLAttributes } from 'react';

export interface ColorPickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  value?: string;
  onChange?: (color: string) => void;
  className?: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value = '#000000',
  onChange,
  className = '',
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={`erb-color-picker ${className}`.trim()}>
      <input
        type="color"
        className="erb-color-picker-input"
        value={value}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};
