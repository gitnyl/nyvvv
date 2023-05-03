// enter key 감지 및 blur처리
const inputEnterKeyFired = (e: KeyboardEvent, ref: HTMLInputElement) => {
  if (e.code === "Enter") {
    ref.blur();
    return true;
  } else {
    return false;
  }
};
export { inputEnterKeyFired };
