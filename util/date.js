function get2Digit(number) {
  const input = number.toString();

  return input.length === 1 ? `0${input}` : input;
}

export function getFormattedDate(dateInput) {
  const year = dateInput.getFullYear().toString();
  const month = get2Digit(dateInput.getMonth() + 1);
  const date = get2Digit(dateInput.getDate());

  return `${year}-${month}-${date}`;
}
