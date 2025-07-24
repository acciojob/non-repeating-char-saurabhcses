function firstNonRepeatedChar(str) {
 // Write your code here
	let a=str.sort()
	let s=a[0];
	let c=0;
	
		
	for (let index = 1; index < str.length; index++) {
		if(s==a[i]){
			c++;
		}
         else if(c>=2 && a!=a[i]) {
			 c=0
			 s=a[i]
			  }
		else{
			return a[i];
		}
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
