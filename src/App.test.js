import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const helloMessage = screen.getByText(/Hello!/i);
  expect(helloMessage).toBeInTheDocument();
});
