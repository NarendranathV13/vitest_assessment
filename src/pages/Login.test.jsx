import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login Form', () => {
  test('displays validation error when email is missing', async () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/user email/i), {
      target: { value: '' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: 'ValidPass@123' },
    });
    fireEvent.click(screen.getByTestId("loginBtn"));

    expect(await screen.findByText('Email is required')).toBeInTheDocument();
  });

  test('displays validation error when password is missing', async () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/user email/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByTestId("loginBtn"));

    expect(await screen.findByText('Password is required')).toBeInTheDocument();
  });

  test('displays success message on valid submission', async () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/user email/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: 'ValidPass@123' },
    });
    fireEvent.click(screen.getByTestId("loginBtn"));

    expect(await screen.findByText('Successfully logged in')).toBeInTheDocument();
  });
});
