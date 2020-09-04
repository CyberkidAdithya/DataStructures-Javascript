class Node {
  constructor(data)
  {
    this.data = data;	
    this.next = null;	//orphaned node 
  }

  setNextNode(node)
  {
  	if(node instanceof Node || node == null)
  	{
  		this.next = node;
  	}
  	else
  	{
  		throw new Error('Datatype Mismatch');
  	}
  }

  getNextNode()
  {
  	return this.next;
  }

}

const firstNode = new Node("First Value");	// new instance 1
const secondNode = new Node("Second Value"); // new instance 2
firstNode.setNextNode(secondNode);
secondNode.setNextNode('String');
console.log(firstNode.data);
console.log(firstNode.next);
console.log(firstNode.getNextNode());

module.exports = Node;
