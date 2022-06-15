import { rest } from 'msw';

const productsHandler = [
  rest.get('https://dummyjson.com/products/search?q=', (req, res, ctx) => {
    const mockApiResponse = {
      products: [
        {
          id: 1,
          title: 'test',
          description: 'test',
          thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
          images: ['https://dummyjson.com/image/i/products/1/thumbnail.jpg'],
        },
        {
          id: 2,
          title: 'test',
          description: 'test',
          thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
          images: ['https://dummyjson.com/image/i/products/1/thumbnail.jpg'],
        },
        {
          id: 3,
          title: 'test',
          description: 'test',
          thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
          images: ['https://dummyjson.com/image/i/products/1/thumbnail.jpg'],
        },
        {
          id: 4,
          title: 'test',
          description: 'test',
          thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
          images: ['https://dummyjson.com/image/i/products/1/thumbnail.jpg'],
        },
      ],
    };
    return res(ctx.json(mockApiResponse));
  }),
];

const usersHandler = [
  rest.get('https://dummyjson.com/users/search?q=', (req, res, ctx) => {
    const mockApiResponse = {
      products: [
        {
          id: 1,
          firstName: 'test',
          lastName: 'test',
          image: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
        },
        {
          id: 2,
          firstName: 'test',
          lastName: 'test',
          image: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
        },
        {
          id: 3,
          firstName: 'test',
          lastName: 'test',
          image: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
        },
        {
          id: 4,
          firstName: 'test',
          lastName: 'test',
          image: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
        },
      ],
    };
    return res(ctx.json(mockApiResponse));
  }),
];

export { productsHandler, usersHandler };
