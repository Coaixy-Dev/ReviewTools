import {Component} from "solid-js";
import styles from '../Styles/App.module.css';
import {ALL_DONE_COUNT, ALL_ERROR_COUNT, ALL_QUESTION_COUNT} from "../utils";

const Header: Component = () => {
    return (
        <div className={styles.header}>
            Review-Tools Beta

            <div className={styles.subHeader}>
                <span>成功解析题目数:</span>
                <span>{ALL_QUESTION_COUNT()}</span>
            </div>
            <div className={styles.subHeader}>
                <span>已复习题目数:</span>
                <span>{ALL_DONE_COUNT()}</span>
            </div>
            <div className={styles.subHeader}>
                <span>已复习题目错题数:</span>
                <span>{ALL_ERROR_COUNT()}</span>
            </div>
        </div>
    )
}
export default Header