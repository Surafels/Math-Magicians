import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from './quotes';

test('should render', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
