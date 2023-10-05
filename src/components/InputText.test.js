import React from 'react';
import renderer from 'react-test-renderer';
import InputText
 from './InputText';

test('Should render input correctly', () =>{
const onClick = jest.fn();

const tree = renderer.create(
    <InputText value="Test" className="custom-class" onClick ={onClick} />) .toJSON();

expect(tree).toMatchSnapshot();
});