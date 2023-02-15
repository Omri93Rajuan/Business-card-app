export const getTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const milisecond = date.getMilliseconds();
  return `${time}. ${milisecond}`;
};

export const colorLog = (text, color) =>
  console.log(`%c${text}: ${getTime()}`, `color: ${color}; font-weight: bold`);
