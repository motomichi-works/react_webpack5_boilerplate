import * as ReactDOM from 'react-dom';

export const App = function () {
  return (
    <div>
      <h1>Hello React!</h1>
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
