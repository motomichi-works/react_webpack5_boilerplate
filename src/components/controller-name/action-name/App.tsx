import * as ReactDOM from 'react-dom';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.App}>
    <h1 className={`${styles.App__Heading} ${styles['App__Heading--hoge']}`}>
      Hello React!
    </h1>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));
