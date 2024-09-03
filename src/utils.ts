import {createSignal} from "solid-js";

export function getMiddleStr(fullStr: string, prefix: string, suffix: string) {
    const start = prefix.length;
    const end = fullStr.length - suffix.length;
    // 返回中间文本
    return fullStr.slice(start, end);
}

export const [ALL_QUESTION_COUNT, set_ALL_QUESTION_COUNT] = createSignal(0)
export const [ALL_DONE_COUNT, set_ALL_DONE_COUNT] = createSignal(0)
export const [ALL_ERROR_COUNT, set_ALL_ERROR_COUNT] = createSignal(0)