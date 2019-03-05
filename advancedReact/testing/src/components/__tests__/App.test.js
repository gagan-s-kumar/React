import React from 'react';
//import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it('shows a comment box', () => {
  /* *** Not required from Enzyme ***
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain('Comment Box');
  ReactDOM.unmountComponentAtNode(div);
  */
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentBox).length).toEqual(1);

});

it('shows a comment list', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentList).length).toEqual(1);

});
