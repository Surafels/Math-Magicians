import React from 'react';
import Home from './Home';
import renderer from  'react-test-renderer';

test('should render home div', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
});
