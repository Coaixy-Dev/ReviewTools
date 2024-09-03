import type {Component} from 'solid-js';

import styles from './Styles/App.module.css';
import Header from "./Components/Header";
import mainContent from "./Components/MainContent";
import MainContent from "./Components/MainContent";

const App: Component = () => {
    return (
        <div class={styles.container}>
            <Header></Header>
            <MainContent></MainContent>
        </div>
    );
};

export default App;
