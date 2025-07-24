function firstNonRepeatedChar(str) {
 // Write your code here
	freq={}
	for (let i = 0; i < str.length; i++) {
    const char = str[i];
    freq[char] = (freq[char] || 0) + 1;
  }
	for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) {
      return str[i];
    }
  }

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
