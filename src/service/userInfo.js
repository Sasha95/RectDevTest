export const userInfo = () => {
  let v = [];
  for (var i = 0, len = localStorage.length; i < len; ++i) {
    v.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  return v;
};
