import React from 'react';

interface HelloWorldProps {
  name: string;
  age?: number; 
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age !== undefined && <p>You are {age} years old.</p>}
    </div>
  );
};

export default HelloWorld;
