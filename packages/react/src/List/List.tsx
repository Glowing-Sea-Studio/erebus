import React from 'react';
export interface ListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  as?: 'ul' | 'ol';
}
export const List = React.forwardRef<HTMLElement, ListProps>((props, ref) => {
  const { as: Component = 'ul', className = '', ...rest } = props;
  const listClass = Component === 'ol' ? 'erb-list--ordered' : 'erb-list--unordered';
  return React.createElement(Component, { ref, className: `erb-list ${listClass} ${className}`.trim(), ...rest });
});
List.displayName = 'List';

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}
export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  const { className = '', ...rest } = props;
  return <li ref={ref} className={`erb-list-item ${className}`.trim()} {...rest} />;
});
ListItem.displayName = 'ListItem';
