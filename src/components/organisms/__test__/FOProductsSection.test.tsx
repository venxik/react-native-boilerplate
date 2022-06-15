import { render } from '@testing-library/react-native';
import React from 'react';
import { wrapper } from '../../../__mocks__/wrapper';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import FOProductsSection from '../FOProductsSection';

const query = 'book';
const server = setupServer(
  // Describe the requests to mock.
  rest.get(`/products/search`, (req, res, ctx) => {
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

describe('FOProductsSection Test', () => {
  test('should render FOProductsSection correctly', () => {
    const rendered = render(<FOProductsSection query={query} />, { wrapper }).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
