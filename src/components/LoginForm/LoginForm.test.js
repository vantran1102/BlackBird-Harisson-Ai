import { render, screen } from '@testing-library/react';
import LoginForm from '.';
import * as EmailValidator from 'email-validator';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

// Add more unit test here