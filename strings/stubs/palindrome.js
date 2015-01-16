/**
* Palindrome.js
* Method stub file for you to implement your own solution.
* 
* Provided by
* @author nkemavaha
*/


/**
* Check whether the given string is a palindrome
* @param	s		String
* @return True if it is palindrome. Otherwise, false is returned.
*/
function isPalindrome(s) {
	var result = false;
	
	// TODO: Your implementation
	
	return result;
}

/**
* Helper function to test the function
* @param	input			Input to be passed to the given function 
* @param	func			Function to execute
* @param	expV			Expected output of the given function
*/
function testOutput(input, func, expV ) {
	result = func.call( null, input );
	console.log( ( result ? (input + " is a palindrome.") : (input + " is NOT a palindrome.")) + " Test: " + ((result!=expV)?"FAIL":"PASS") );
}
	
	
// Test cases	
testOutput("malam", isPalindrome, true );
testOutput("aadbaa", isPalindrome, false );
testOutput("mallam", isPalindrome, true );
testOutput("malalam", isPalindrome, true );
testOutput("a", isPalindrome, true );
testOutput("", isPalindrome, true );
testOutput("ab", isPalindrome, false);
testOutput("abccba", isPalindrome, true);


