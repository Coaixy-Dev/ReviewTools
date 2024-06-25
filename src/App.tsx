import type { Component } from 'solid-js';

import styles from './App.module.css';
import Header from "./Header";
import mainContent from "./MainContent";
import MainContent from "./MainContent";

const App: Component = () => {
  return (
    <div class={styles.container}>
      <Header></Header><MainContent></MainContent>
    </div>
  );
};

export default App;
