import React from 'react';

export interface AppProps {
  name: string;
}

const App: React.FC<AppProps> = ({ name }) => (
  <div className="container">
    <div>Name: isolated-app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <div>{name}</div>
  </div>
);

export default App;
