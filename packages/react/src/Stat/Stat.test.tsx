import React from 'react';
import { render } from '@testing-library/react';
import { Stat } from './Stat';

describe('Stat', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Stat label="Users" value="1,024" helpText="+5%" />);
    expect(getByText('Users')).toBeInTheDocument();
    expect(getByText('1,024')).toBeInTheDocument();
    expect(getByText('+5%')).toBeInTheDocument();
  });
});
