import { formatDistanceToNow } from 'date-fns';

export const FormatDate = (dateString: string) => {
  const date = new Date(dateString);
  const result = formatDistanceToNow(date, { addSuffix: true });

  return result;
}
