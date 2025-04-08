export const convUnixToTimestamp = (unixTimestamp: number): string => {
  const date = new Date(unixTimestamp * 1000);
  const formatedDate = `${date.getHours()}h${
    date.getMinutes().toString().length == 1
      ? "0" + date.getMinutes()
      : date.getMinutes()
  }`;
  return formatedDate;
};
