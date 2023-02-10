import Button from './Button';
// npm install prop-types
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={'Continue'} />
    </div>
  );
}

export default App;
