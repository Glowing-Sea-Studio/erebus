import { render } from '@testing-library/react';
import { Stepper } from './Stepper';

describe('Stepper', () => {
  it('renders without crashing', () => {
    render(<Stepper currentStep={0} steps={['A']} />);
  });
});
