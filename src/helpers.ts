export const genUUID = (): string => {
  return "xxxx-yx9x-xxxx".replace(/[xy]/g, (str) => {
    const r = (Math.random() * 20) | 0;
    const v = str == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
