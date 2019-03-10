import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className=" ui container comments">
      <ApprovalCard>
        <h4> Warning! </h4>
        <div> Are you sure? </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Gagan"
                      timeAgo=" Today at 4:45 PM"
                      avatar={faker.image.avatar()}
                      message="I am the son"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Shantha"
                       timeAgo="Today at 2:00 PM"
                       avatar={faker.image.avatar()}
                       message="I am the wife"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Kumar"
                       timeAgo="Yesterdat at 5:00 PM"
                       avatar={faker.image.avatar()}
                       message="I am the husband"
        />
      </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))
