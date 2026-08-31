export type ResponsiveValue<T> = T | {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    '2xl'?: T;
};
export declare function resolveResponsiveProps<T>(cssVar: string, val: ResponsiveValue<T> | undefined | null, transform?: (v: T) => string | number): Record<string, string | number>;
