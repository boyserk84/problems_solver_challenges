/**
* Palindrome.js
*
* Solution
* 
* @author nkemavaha
*/
module.exports = {

	isPalindrome: 
	
	/**
	* Check whether the given string is a palindrome
	* @param	s		String
	* @return True if it is palindrome. Otherwise, false is returned.
	*/
	function isPalindrome(s) {

		if ( s == "" || s == null ) {
			return true;
		}
		
		j = s.length - 1;
		result = true;
		// Check the leftmost element against the rightmost element
		for (i = 0; i < (s.length/2); ++i) {
			
			if (s[i] == s[j]) {
				result = result && true;
			} else {
				result = false;
			}
			
			--j;
		
		}
		
		return result;
	}

};



