import React from 'react';
import renderer from 'react-test-renderer';
import App from '../index';

describe('Testing App', () => {
  test('should render App correctly', () => {
    renderer.create(<App />);
  });
});
