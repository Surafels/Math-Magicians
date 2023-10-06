import React from 'react';
import renderer from 'react-test-renderer';
import InputButton from './button';

test('Should render buttons correctly', () => {
  const onClick = jest.fn();

  const tree = renderer
    .create(<InputButton value="Test" onClick={onClick} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
