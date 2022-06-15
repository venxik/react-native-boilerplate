import { render } from '@testing-library/react-native';
import React from 'react';
import { wrapper } from '../../__mocks__/wrapper';
import RemoteConfig from '../RemoteConfig';

describe('RemoteConfig screen', () => {
  it('should remote config screen can render', async () => {
    const settingRender = render(<RemoteConfig />, { wrapper });
    expect(settingRender).toMatchSnapshot();
  });
});
