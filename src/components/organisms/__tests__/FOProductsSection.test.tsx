import React from 'react';
import { rest } from 'msw';
import { render, waitFor } from '@testing-library/react-native';

import { server } from '../../../__mocks__/server';
import FOProductsSection from '../FOProductsSection';
import { wrapper } from '../../../__mocks__/wrapper';

// make debug output for TestingLibrary Errors larger
// process.env.DEBUG_PRINT_LIMIT = '15000';

// enable API mocking in test runs using the same request handlers
// as for the client-side mocking.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('FOProductsSection screen', () => {
  it('handles good response', async () => {
    const { getByTestId } = render(<FOProductsSection query={'Apple'} />, {
      wrapper,
    });

    waitFor(() => expect(getByTestId('scrollview')).toBeDefined());
  });

  it('handles error response', () => {
    // force msw to return error response
    server.use(
      rest.get('https://dummyjson.com/products/search?q=', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );
    const { getByTestId } = render(<FOProductsSection query={'Apple'} />, {
      wrapper,
    });

    const errorText = getByTestId('error-text');
    waitFor(() => expect(errorText).toBeDefined());
  });
});
