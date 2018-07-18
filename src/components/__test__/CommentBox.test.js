import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => wrapped.unmount());

it('Has a textarea and a button element', () => {

  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});


/* Group tests using describe */
describe('Handle Textarea', () => {

  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {
        value: 'new comment',
      }
    });

    wrapped.update(); /* Force update component */
  });

  it('Has a textarea that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });
  
  it('input is submitted, textarea should get emptied', () => {  
    wrapped.find('form').simulate('submit');
    wrapped.update();
  
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});