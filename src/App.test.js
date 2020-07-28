import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders robot heading', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/robot/i);
  expect(linkElement).toBeInTheDocument();
});
