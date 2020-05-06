export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('sc-state');
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export const saveState = state => {
  try {
    localStorage.setItem('sc-state', JSON.stringify(state));
  } catch {}
}
