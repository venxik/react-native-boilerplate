import React from 'react';
import { render, waitFor } from '../../__mocks__/wrapper';
import RemoteConfig from '../RemoteConfig';

describe('RemoteConfig screen', () => {
  it('should remote config screen can render', async () => {
    const settingRender = render(<RemoteConfig />);
    await waitFor(() => expect(settingRender).toBeDefined());
  });
});
