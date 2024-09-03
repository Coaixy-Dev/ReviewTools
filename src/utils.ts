export function getMiddleStr(fullStr: string, prefix: string, suffix: string) {
    const start = prefix.length;
    const end = fullStr.length - suffix.length;
    // 返回中间文本
    return fullStr.slice(start, end);
}