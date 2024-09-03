import {Component, createEffect, createSignal} from "solid-js";
import styles from '../Styles/App.module.css';
const mainContent: Component = () => {
    const [display,setDisplay] = createSignal(false)
    const [answerDom,setAnswerDom] = createSignal<NodeListOf<Element>>()
    const displayButtonName = () => {
        return !display() ? "隐藏" : "显示"
    }
    const switchDisplay = () => {
        setDisplay(!display())

        if (display()){
            answerDom()?.forEach(element => {
                (element as HTMLElement).style.display = "none"
            })
        }else{
            answerDom()?.forEach(element => {
                (element as HTMLElement).style.display = ""
            })
        }
    }
    createEffect(() => {
        const elements = document.querySelectorAll(".mark_answer");
        setAnswerDom(elements)
        console.log(answerDom())
    })
    return (
        <div class={styles.content}>
            <button onclick={switchDisplay}>{displayButtonName()}</button>
        </div>
    )
}
export default mainContent;