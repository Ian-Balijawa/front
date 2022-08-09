<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> 2bc6d5e5718e636d6f81447713d7f77fff3d1eb0
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
