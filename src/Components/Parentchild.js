import React, { useState } from 'react';
import ChildParent from './ChildParent';

const Parentchild = () => {
  const [parentData, setParentData] = useState('');

  const changehandle = (props) => {
    setParentData(props);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from child: {parentData}</p>
      <ChildParent props={changehandle} />
    </div>
  );
};

export default Parentchild;
