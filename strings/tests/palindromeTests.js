/**
* PalindromeTests.js
* Test cases for checking if the given string is a palindrome.
*
* @author nkemavaha
*/

// Solution
//var app = require('../solns/palindrome.js');	// Uncomment this if run the provided solution

// YOUR implemented solution file
var app = require('../stubs/palindrome.js');

/**
* Helper function to test the function
* @param	input			Input to be passed to the given function 
* @param	func			Function to execute
* @param	expV			Expected output of the given function
* @return True if output is expected. Otherwise, false is returned.
*/
function testOutput(input, func, expV ) {
	result = func.call( null, input );
	console.log( ( result ? (input + " is a palindrome.") : (input + " is NOT a palindrome.")) + " Test: " + ((result!=expV)?"FAIL":"PASS") );
	
	return (result == expV);
}
	
// Test cases	
testOutput("malam", app.isPalindrome, true );
testOutput("aadbaa", app.isPalindrome, false );
testOutput("mallam", app.isPalindrome, true );
testOutput("malalam", app.isPalindrome, true );
testOutput("a", app.isPalindrome, true );
testOutput("", app.isPalindrome, true );
testOutput("ab", app.isPalindrome, false);
testOutput("abccba", app.isPalindrome, true);



