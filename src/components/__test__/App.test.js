import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
})

it('Shows a CommentBox component', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('Shows a CommentList component', () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});
