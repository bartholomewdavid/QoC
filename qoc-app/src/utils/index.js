export function FormatDate(input) {
  const date = new Date(input);

  // MM/DD/YYYY
  return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
}