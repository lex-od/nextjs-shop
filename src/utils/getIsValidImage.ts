const validPathsStart = ["http://", "https://", "/"];

export const getIsValidImage = (src: string) => {
  const trimmedSrc = src.trim();

  return validPathsStart.some((pathStart) => {
    return trimmedSrc.startsWith(pathStart);
  });
};
