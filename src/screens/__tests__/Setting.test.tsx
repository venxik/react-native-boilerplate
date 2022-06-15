import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import Setting from '../Setting';
import { wrapper } from '../../__mocks__/wrapper';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

describe('Setting screen', () => {
  it('Render Setting screen', async () => {
    const setting = render(<Setting />, { wrapper });

    const btnSubmit = setting.getByTestId('btn-demo-rcd');
    expect(btnSubmit).toBeTruthy();
    fireEvent.press(btnSubmit);

    await waitFor(() => expect(mockedNavigate).toHaveBeenCalledTimes(1));
    expect(mockedNavigate).toHaveBeenCalledWith('RemoteConfigScreen');
    expect(setting.toJSON()).toMatchSnapshot();
  });
});
