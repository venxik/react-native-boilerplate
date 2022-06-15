import { setupServer } from 'msw/node';
import { productsHandler, usersHandler } from './serverHandlers';

const server = setupServer(...productsHandler, ...usersHandler);

export { server };
