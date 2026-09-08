export const sortAlphabetically = array => {
  return array.sort((a, b) => {
    if (a.data.title.toLowerCase() < b.data.title.toLowerCase()) return -1;
    if (a.data.title.toLowerCase() > b.data.title.toLowerCase()) return 1;
    return 0;
  });
};
