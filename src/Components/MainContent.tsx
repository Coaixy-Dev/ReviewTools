import {Component, createEffect, createSignal} from "solid-js";
import styles from '../Styles/App.module.css';
import {
    ALL_DONE_COUNT, ALL_ERROR_COUNT,
    ALL_QUESTION_COUNT,
    getMiddleStr,
    set_ALL_DONE_COUNT,
    set_ALL_ERROR_COUNT,
    set_ALL_QUESTION_COUNT
} from "../utils";


const mainContent: Component = () => {
    const [display, setDisplay] = createSignal(false)
    const [answerDom, setAnswerDom] = createSignal<Array<Element>>([])
    const [questionDom, setQuestionDom] = createSignal<Array<Element>>([])
    const doneQuestionList = new Set()
    const displayButtonName = () => {
        return !display() ? "隐藏" : "显示"
    }
    const initialTool = (answerElements: NodeListOf<Element>) => {
        setAnswerDom(answerElements.length > 0 ? Array.from(answerElements) : [])
        set_ALL_QUESTION_COUNT(answerDom().length)
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
            /**
             * 获取答案
             */
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
            /**
             * 循环所有选项
             * 并添加单击事件
             */
            for (let i = 0; i < element.children.length; i++) {
                element.children[i].addEventListener("click", () => {
                    if (display()) {
                        if (!doneQuestionList.has(index)) {
                            set_ALL_DONE_COUNT(ALL_DONE_COUNT() + 1)
                            const optionDom = (element.children[i] as HTMLElement)
                            // 选择中还包含了选项，因此要用选择去检测答案
                            if (optionDom.innerText.split(". ")[1].includes(answerValue[0])) {
                                optionDom.style.color = "DarkGreen"
                            } else {
                                optionDom.style.color = "red"
                                set_ALL_ERROR_COUNT(ALL_ERROR_COUNT() + 1)
                            }
                            optionDom.style.fontWeight = "bold"
                            tAnswerDom.style.display = ""
                        }
                        doneQuestionList.add(index)
                    }
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