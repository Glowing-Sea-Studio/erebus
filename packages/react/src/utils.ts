import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Layout helper
export type ResponsiveValue<T> = T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
};

export function resolveResponsiveProps<T>(
  cssVar: string,
  val?: ResponsiveValue<T>,
  transform?: (v: T) => string | number
): Record<string, string | number> {
  if (val === undefined || val === null) return {};

  if (typeof val !== 'object') {
    return { [cssVar]: transform ? transform(val as T) : String(val) };
  }

  const obj = val as Record<string, T>;
  const result: Record<string, string | number> = {};
  
  if (obj.base !== undefined) result[cssVar] = transform ? transform(obj.base) : String(obj.base);
  if (obj.sm !== undefined) result[`${cssVar}-sm`] = transform ? transform(obj.sm) : String(obj.sm);
  if (obj.md !== undefined) result[`${cssVar}-md`] = transform ? transform(obj.md) : String(obj.md);
  if (obj.lg !== undefined) result[`${cssVar}-lg`] = transform ? transform(obj.lg) : String(obj.lg);
  if (obj.xl !== undefined) result[`${cssVar}-xl`] = transform ? transform(obj.xl) : String(obj.xl);
  if (obj['2xl'] !== undefined) result[`${cssVar}-2xl`] = transform ? transform(obj['2xl']) : String(obj['2xl']);
  
  return result;
}
