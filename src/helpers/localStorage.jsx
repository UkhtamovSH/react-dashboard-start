export const getLocalStorage = (keys) => {
  const parameters = keys.reduce((parameter, key) => {
    const value = window.localStorage.getItem(key);
    parameter[key] = value;
    return parameter;
  }, {});
  return parameters;
};
export const setLocalStorage = (keys) => {
  keys.forEach(({ name, value }) => {
    window.localStorage.setItem(name, value);
  });
};
export const removeLocalStorage = (keys) => {
  keys.forEach((key) => {
    window.localStorage.removeItem(key);
  });
};
export const clearLocalStorage = () => {
  window.localStorage.clear();
};
