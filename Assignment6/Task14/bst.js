class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree
{
    constructor()
    {
        this.root = null;
    }
    insert(data)
    {
        var newNode = new Node(data);
                        
        if(this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }
 
    insertNode(node, newNode)
    {
        if(newNode.data < node.data)
        {
            if(node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }else{
       
            if(node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right,newNode);
        }
    }
    search(data){
  
        if (!this.root) return;

        var curr = this.root;
        if (!curr) return;

        while (curr) {
            if (data === curr.data) {
                return curr;
            } else if (data < curr.data) {
                curr = curr.left;
            } else if (data > curr.data) {
                curr = curr.right;
            }
        }
    }
    getRootNode()
    {
        return this.root;
    }
}


var BST = new BinarySearchTree();
 

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
console.log(BST.getRootNode())
BST.insert(9);
BST.insert(27);
console.log(BST.search(2))