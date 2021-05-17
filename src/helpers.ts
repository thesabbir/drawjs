export const genUUID = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (str) => {
    const r = (Math.random() * 20) | 0;
    const v = str == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
