import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it('Shows a CommentBox component', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('Shows a CommentList component', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(CommentList).length).toEqual(1);
});
