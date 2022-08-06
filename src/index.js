module.exports = function toReadable (number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number === 0) return 'zero';
  if (number < 10) {
    return ones[number];
  }
  if (number < 20 && number > 9) {
    return teens[number - 10];
  }
  let arr = number.toString().split('');
  if (arr.length === 2 && arr[1] === '0') {
    return tens[+arr[0] - 2];
  }
  if (arr.length === 2 && number > 19) {
    return tens[+arr[0] - 2] + ' ' + ones[+arr[1]];
  }
  if (arr.length === 3 && arr[1] === '1') {
    return ones[arr[0]] + ' ' + 'hundred' + ' ' + teens[arr[2]];
  }
  if (arr.length === 3 && arr[2] === '0' && arr[1] === '0') {
    return ones[arr[0]] + ' ' + 'hundred';
  }
  if (arr.length === 3 && arr[1] === '0') {
    return ones[arr[0]] + ' ' + 'hundred' + ' ' + ones[arr[2]];
  }
  if (arr.length === 3 && arr[2] === '0') {
    return ones[arr[0]] + ' ' + 'hundred' + ' ' + tens[+arr[1] - 2];
  }
  if (arr.length === 3) {
    return ones[arr[0]] + ' ' + 'hundred' + ' ' + tens[+arr[1] - 2] + ' ' + ones[arr[2]];
  }
}
