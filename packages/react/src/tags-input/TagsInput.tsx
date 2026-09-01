import { useState, KeyboardEvent, forwardRef, Ref } from 'react';

export interface TagsInputProps {
  tags?: string[];
  onChange?: (tags: string[]) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const TagsInput = forwardRef((
  { tags = [], onChange, disabled = false, placeholder }: TagsInputProps,
  ref: Ref<HTMLDivElement>
) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        onChange?.([...tags, inputValue.trim()]);
      }
      setInputValue('');
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      onChange?.(tags.slice(0, -1));
    }
  };

  const removeTag = (tagToRemove: string) => {
    if (disabled) return;
    onChange?.(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className={`erb-tags-input ${disabled ? 'erb-tags-input--disabled' : ''}`} ref={ref}>
      {tags.map((tag) => (
        <span key={tag} className="erb-tags-input__tag">
          {tag}
          {!disabled && (
            <button
              type="button"
              className="erb-tags-input__tag-remove"
              onClick={() => removeTag(tag)}
              aria-label={`Remove ${tag}`}
            >
              ×
            </button>
          )}
        </span>
      ))}
      <input
        type="text"
        className="erb-tags-input__input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder={tags.length === 0 ? placeholder : ''}
      />
    </div>
  );
});

TagsInput.displayName = 'TagsInput';
