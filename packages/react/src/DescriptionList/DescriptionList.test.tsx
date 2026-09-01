import { render } from '@testing-library/react';
import { DescriptionList, DescriptionTerm, DescriptionDetails } from './DescriptionList';

describe('DescriptionList', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <DescriptionList>
        <DescriptionTerm>Term</DescriptionTerm>
        <DescriptionDetails>Details</DescriptionDetails>
      </DescriptionList>
    );
    expect(getByText('Term')).toBeInTheDocument();
    expect(getByText('Details')).toBeInTheDocument();
  });
});
