// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sanitazeData = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};
