import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('the app starts', () => {
  render(<App />);
  const linkElement = screen.getByText(/booking app/i);
  expect(linkElement).toBeInTheDocument();
});
