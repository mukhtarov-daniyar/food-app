import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BaseLoader from './index';

it('renders correctly', () => {
  const tree = renderer.create(<BaseLoader />).toJSON();
  expect(tree).toMatchSnapshot();
});
