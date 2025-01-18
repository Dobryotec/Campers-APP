export const truncatedText = (text: string): string => {
  if (text.length > 63) {
    return text.split('').slice(0, 60).join('').trim() + '...';
  }
  return text;
};
