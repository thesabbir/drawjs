export const genUUID = () => {
  return ([1e4] + -1e4 + -1e4).replace(/[018]/g, (str) =>
    (
      str ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (str / 4)))
    ).toString(16)
  );
};

export const mapToArray = (object) => {
  const items = [];
  for (let i = 0, keys = Object.keys(object); i < keys.length; i++) {
    items.push(object[keys[i]]);
  }
  return items;
};

export const eachToObject = (items) => {
  return items.map((item) => item.toObject());
};
