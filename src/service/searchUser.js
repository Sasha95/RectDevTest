export const search = (users, searchvalue) => {
  let d = [];
  users.map(x => {
    if (JSON.stringify(x).indexOf(searchvalue) !== -1) {
      d.push(x);
    }
    return d;
  });
  return d;
};
