export const parseDateString = ({ dateString }: { dateString: string }) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    weekday: 'short',
    day: 'numeric',
  });
};
