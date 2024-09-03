import {Component, createEffect, createSignal} from "solid-js";
import styles from '../Styles/App.module.css';
import {getMiddleStr} from "../utils";


const mainContent: Component = () => {
    const [display, setDisplay] = createSignal(false)
    const [answerDom, setAnswerDom] = createSignal<Array<Element>>([])
    const [questionDom, setQuestionDom] = createSignal<Array<Element>>([])
    const displayButtonName = () => {
        return !display() ? "隐藏" : "显示"
    }
    const initialTool = (answerElements: NodeListOf<Element>) => {
        setAnswerDom(answerElements.length > 0 ? Array.from(answerElements) : [])
        answerDom()?.forEach(element => {
            const temp = element.parentElement
            if (temp) {
                // mark_letter colorDeep
                // <li> <li> <li>
                questionDom().push(temp.children[1])
                setQuestionDom(questionDom())
            }
        })
        // 添加点击事件
        questionDom().forEach((element, index) => {
            const tAnswerDom = answerDom()[index] as HTMLElement;
            let answerValue: Array<string> = Array.from([])
            tAnswerDom.querySelectorAll(".colorGreen.marginRight40.fl").forEach(element => {
                let tempAnswerValue = (element as HTMLElement).innerText;
                if (!tempAnswerValue.includes("正确答案")) {
                    if (tempAnswerValue.includes(":") && tempAnswerValue.includes(";")) {
                        answerValue.push(getMiddleStr(tempAnswerValue, ":", ";"))
                    }
                }
            })
            for (let i = 0; i < element.children.length; i++) {
                element.children[i].addEventListener("click", () => {
                    const optionDom = (element.children[i] as HTMLElement)
                    if (optionDom.innerText.includes(answerValue[0])) {
                        optionDom.style.color = "DarkGreen"
                    } else {
                        optionDom.style.color = "red"
                    }
                    optionDom.style.fontWeight = "bold"
                    tAnswerDom.style.display = ""
                })
            }
        })

    }
    const switchDisplay = () => {
        setDisplay(!display())

        if (display()) {
            answerDom()?.forEach(element => {
                (element as HTMLElement).style.display = "none";
            })
        } else {
            answerDom()?.forEach(element => {
                (element as HTMLElement).style.display = ""
            })
        }
    }
    createEffect(() => {
        const elements = document.querySelectorAll(".mark_answer");
        initialTool(elements)
    })
    return (
        <div class={styles.content}>
            <button onclick={switchDisplay}>{displayButtonName()}</button>
        </div>
    )
}
export default mainContent;