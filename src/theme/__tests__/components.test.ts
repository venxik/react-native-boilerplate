import * as components from '../components';

describe('Components Native Base', () => {
  it('Button', () => {
    expect(components.default.Button).toBeTruthy();
  });
  it('Input', () => {
    expect(components.default.Input).toBeTruthy();
  });
});
