import React from 'react';
import { render } from '@testing-library/react';
import { List, ListItem } from './List';

describe('List', () => {
  it('renders ul correctly', () => {
    const { getByText, container } = render(
      <List>
        <ListItem>Item 1</ListItem>
      </List>
    );
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(container.querySelector('ul.erb-list')).toBeInTheDocument();
  });
  it('renders ol correctly', () => {
    const { container } = render(
      <List as="ol">
        <ListItem>Item 1</ListItem>
      </List>
    );
    expect(container.querySelector('ol.erb-list--ordered')).toBeInTheDocument();
  });
});
