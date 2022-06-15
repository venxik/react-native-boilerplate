import { render } from '@testing-library/react-native';
import React from 'react';
import { wrapper } from '../../../__mocks__/wrapper';
import FOUserSection from '../FOUserSection';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
const server = setupServer(
  // Describe the requests to mock.
  rest.get('/users', (req, res, ctx) => {
    return res(ctx.json({}));
  }),
);
beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen();
});
afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});

describe('FOUserSection Test', () => {
  test('should render FOUserSection correctly', async () => {
    const rendered = render(<FOUserSection />, { wrapper }).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
