import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className=" ui container comments">
      <CommentDetail author="Gagan"
                    timeAgo=" Today at 4:45 PM"
                    avatar={faker.image.avatar()}
                    message="I am the son"
      />
      <CommentDetail author="Shantha"
                     timeAgo="Today at 2:00 PM"
                     avatar={faker.image.avatar()}
                     message="I am the wife"
      />
      <CommentDetail author="Kumar"
                     timeAgo="Yesterdat at 5:00 PM"
                     avatar={faker.image.avatar()}
                     message="I am the husband" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))
