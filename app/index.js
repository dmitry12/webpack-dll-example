import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return (
        <div>
            Webpack DLL example
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
