import React, { useRef, KeyboardEvent, ChangeEvent, forwardRef, Ref } from 'react';

export interface PinInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const PinInput = forwardRef((
  { length = 4, value = '', onChange, disabled = false }: PinInputProps,
  ref: Ref<HTMLDivElement>
) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    const char = val.slice(-1);
    
    if (char && !/^[0-9]$/.test(char)) return;

    const newValue = value.split('');
    newValue[index] = char;
    const finalValue = newValue.join('');
    
    onChange?.(finalValue.slice(0, length));

    if (char && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (!value[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      } else {
        const newValue = value.split('');
        newValue[index] = '';
        onChange?.(newValue.join(''));
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').replace(/\D/g, '').slice(0, length);
    if (pastedData) {
      onChange?.(pastedData);
      const nextFocus = Math.min(pastedData.length, length - 1);
      inputsRef.current[nextFocus]?.focus();
    }
  };

  return (
    <div className="erb-pin-input" ref={ref}>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={el => inputsRef.current[index] = el}
          className="erb-pin-input__field"
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[index] || ''}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          disabled={disabled}
        />
      ))}
    </div>
  );
});

PinInput.displayName = 'PinInput';
