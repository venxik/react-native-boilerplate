import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { wrapper } from '../../../__mocks__/wrapper';
import SignUp from '../SignUp';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

describe('SignUp screen', () => {
  const data = {
    name: 'Kholiq',
    phone: '0818181818',
    email: 'abdul@finetiks.com',
    password: 'test123',
    passwordConfirmation: 'test123',
  };
  it('should can input form', async () => {
    const rendered = render(<SignUp />, { wrapper });

    const inputName = rendered.getByTestId('input-name');
    fireEvent.changeText(inputName, data.name);
    const inputPhone = rendered.getByTestId('input-phone');
    fireEvent.changeText(inputPhone, data.phone);
    const inputEmail = rendered.getByTestId('input-email');
    fireEvent.changeText(inputEmail, data.email);
    const inputPassword = rendered.getByTestId('input-password');
    fireEvent.changeText(inputPassword, data.password);
    const inputPasswordConfirmation = rendered.getByTestId('input-password-confirmation');
    fireEvent.changeText(inputPasswordConfirmation, data.passwordConfirmation);

    const btnSubmit = rendered.getByTestId('btn-submit');
    fireEvent.press(btnSubmit);

    expect(rendered).toMatchSnapshot();
  });
});
