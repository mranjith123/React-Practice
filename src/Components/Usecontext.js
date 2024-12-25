import React, { useContext } from 'react';

const Context = React.createContext(); // instance of context API

function Usecontext() {
  const data = { id: 10, name: "ranjith", city: "bangalore" };

  return (
    <div>
      <Context.Provider value={data}> {/* value is global store */}
        <E /> 
        {/* E component send cheyali anukunte */}
      </Context.Provider>
    </div>
  );
}

function A() {
  return <div>A component</div>;
}

function E() {
  const data = useContext(Context);
  return (
    <div>
      <h1>{data.id}</h1>
      <h1>{data.name}</h1>
      <h1>{data.city}</h1>
    </div>
  );
}

export default Usecontext;
