import React from 'react';
// import * as hooks from '../../../services/products';
import FOProductsSection from '../FOProductsSection';
import { AllTheProviders, render } from '../../../__mocks__/wrapper';
import { renderHook } from '@testing-library/react-hooks/native';
import { useGetProductQuery } from '../../../services';
import { products } from '../../../__mocks__/testData';

const updateTimeout = 5000;

beforeEach((): void => {
  fetchMock.resetMocks();
});

describe('FOProductsSection screen', () => {
  it('handles good response', async () => {
    // jest
    //   .spyOn(hooks, 'useGetProductQuery')
    //   .mockRejectedValue({ data: products, isError: false, isLoading: false });

    fetchMock.mockResponse(JSON.stringify({ data: products }));
    const { result, waitForNextUpdate } = renderHook(() => useGetProductQuery(undefined), {
      wrapper: AllTheProviders,
    });
    const { getByText, container } = render(<FOProductsSection query={'Apple'} />);

    const initialResponse = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);
    expect(getByText('Loading')).toBeDefined();
    // expect(getByTestId('scrollview')).toBeDefined();
    await waitForNextUpdate({ timeout: updateTimeout });
    // await act(async () => {
    //   // await waitForNextUpdate({ timeout: updateTimeout });
    //   expect(getByTestId('scrollview')).toBeDefined();
    // });
    expect(container).toBeDefined();

    const nextResponse = result.current;
    expect(nextResponse.data).not.toBeUndefined();
    expect(nextResponse.isLoading).toBe(false);
    expect(nextResponse.isSuccess).toBe(true);
  });

  it('handles error response', async () => {
    fetchMock.mockReject(new Error('Internal Server Error'));
    const { result, waitForNextUpdate } = renderHook(() => useGetProductQuery(undefined), {
      wrapper: AllTheProviders,
    });
    const initialResponse = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);

    await waitForNextUpdate({ timeout: updateTimeout });

    const nextResponse = result.current;
    expect(nextResponse.data).toBeUndefined();
    expect(nextResponse.isLoading).toBe(false);
    expect(nextResponse.isError).toBe(true);
  });
});
