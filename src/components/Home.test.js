import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

test('should render home div', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
