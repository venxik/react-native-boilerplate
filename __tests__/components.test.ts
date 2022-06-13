import * as components from '../src/theme/components';

describe('Components Native Base', () => {
  it('Button', () => {
    expect(components.default.Button).toBeTruthy();
  });
  it('Input', () => {
    expect(components.default.Input).toBeTruthy();
  });
});
