function isStringLengthValid(string, maxLength) {
  return string.length <= maxLength;
}

//проверка на палиндром
function isPalindrome(string) {
  const normilizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = normilizedString.length - 1; i >= 0; i--) {

    reversedString+= normilizedString.charAt(i);

  }

  return (reversedString === normilizedString)

}
