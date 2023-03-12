export const getMostVals = (data) => {
  return [
    ...Object.values(data)
      .sort((a, b) => b.value - a.value)
      .slice(0, 5),
  ];
};
export const calcProgressWidth = (used, limit) => {
  const width = Math.floor((used / limit) * 100);

  return width;
};
