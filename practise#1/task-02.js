function defineNumber(number) {
  str = '';
  if (number > 0) {
    str += "Число является положительным"
  } else if (number === 0) {
    str += "Число является нулем"
  } else {
    str += "Число является отрицательным"
  }
  if (String(number).length < 4) {
    str += `,содержит ${String(number).length} цифр`;
    return str;
  }
  return "Некорректное значение!"
}