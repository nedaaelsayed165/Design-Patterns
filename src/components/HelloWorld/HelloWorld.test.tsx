import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HelloWorld from './HelloWorld';

describe('HelloWorld Component', () => {
  it('should render the name correctly', () => {
    const { getByText } = render(<HelloWorld name="Nedaa" />);
    expect(getByText(/Hello, Nedaa!/)).toBeInTheDocument();
  });

  it('should render the age if provided', () => {
    const { getByText } = render(<HelloWorld name="Nedaa" age={23} />);
    expect(getByText(/You are 23 years old./)).toBeInTheDocument();
  });

  it('should not render the age if not provided', () => {
    const { queryByText } = render(<HelloWorld name="Nedaa" />);
    expect(queryByText(/You are/)).toBeNull();
  });
});
