/**
* BTreeNode.js
* @author nkemavaha
*/


/**
* BTreeNode class (in javascript)
* @param v		Value for this node (for constructor)
*/
function BTreeNode(v) {
	/** Value of this node */
	this.value = v;
	/** Left child node */
	this.lnode = null;
	/** Right child node */
	this.rnode = null;
	
	/** Helper function to print out this node's value. */
	this.printV = function printVal() {
		console.log( this.value );
	}
	
	/** 
	* Set this node's children given values
	* @param lv			Left node value
	* @param rv			Right node value
	*/
	this.setChildrenVals = function setChildrenValues(lv, rv) {
		this.lnode = new BTreeNode(lv);
		this.rnode = new BTreeNode(rv);
	}

}

/**
* Helper function to print out the given tree node and its children
* @param	n		Root/Tree Node
*/
function printBTreeNode(n) {
	if ( n != null && n instanceof BTreeNode ) {

		console.log ( "node=" + n.value + " with { left=" + ((n.lnode != null)?n.lnode.value:"NULL") + " right=" + ((n.rnode != null)?n.rnode.value:"NULL") + " }");
	
	} else {
		console.log ( n + " is invalid BTreeNode object!");
	}
}


/**
* Binary Tree example data/input
*/

/**
				    1
				  /   \
				 2     3
				/ \   / \
			   4   5 6   7

*/
var rootExOne = new BTreeNode(1);
rootExOne.setChildrenVals(2,3);
rootExOne.lnode.setChildrenVals(4,5);
rootExOne.rnode.setChildrenVals(6,7);


/**
				    1
				  /   \
				 2     3
				/       \
			   4         7

*/
var rootExTwo = new BTreeNode(1);
rootExTwo.setChildrenVals(2,3);
rootExTwo.lnode.setChildrenVals(4,null);
rootExTwo.rnode.setChildrenVals(null,7);

/**
				       1
					/	   \
				   /		\
				  /   		 \
				 2        	  3
				  \     	/   \
			       4   	   8     9
				 /   \    /
				5     6  10
					 /
				    7
*/

var rootExThree = new BTreeNode(1);
rootExThree.setChildrenVals(2,3);
rootExThree.lnode.setChildrenVals(null, 4);
rootExThree.lnode.rnode.setChildrenVals(5,6);
rootExThree.lnode.rnode.lnode.setChildrenVals(7,null);
rootExThree.rnode.setChildrenVals(8, 9);
rootExThree.rnode.lnode.setChildrenVals(10, null);