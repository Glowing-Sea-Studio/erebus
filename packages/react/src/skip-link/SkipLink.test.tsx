import { render } from '@testing-library/react';
import { SkipLink } from './SkipLink';

describe('SkipLink', () => {
  it('renders without crashing', () => {
    render(<SkipLink href="#main">Skip</SkipLink>);
  });
});
