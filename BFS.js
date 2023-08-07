/*
code impementation of a Breadth First Search 

Tree - 

            100
        20       76
    18    27 |  50 82

    output result --> [100, 20, 76, 18, 27, 50, 82]
*/



class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
  }                                                              
  
  class BinarySearchTree {
    constructor(){
        this.root = null;
    }
  
    insert(value){
      const newNode = new Node(value); // create new Node
      if(this.root === null){ // if there's no root, newNode becomes root
          this.root = newNode;
          return this;
      }
      let current = this.root;
      while(true){
          if(value === current.value){ // check if value is already present in the tree
            return `${value} already exists, duplicates not allowed`; // return message if value is duplicate
          }
          if(value < current.value){
              if(current.left === null){
                  current.left = newNode;
                  return this;
              }
              current = current.left;
          }else if(value > current.value){
              if(current.right === null){
                  current.right = newNode;
                  return this;
              }
              current = current.right;
          }
      }
    }
  
    BFS() {
      let node = this.root;
      let queue = []; 
      let data = []; // results
  
      queue.push(node);
  
      while(queue.length){
         node = queue.shift(); 
         data.push(node.value); 
         if(node.left) queue.push(node.left); 
         if(node.right) queue.push(node.right); 
      }
  
      return data; 
    }
  }
  
  let bst2 = new BinarySearchTree();
  bst2.insert(3);
  bst2.insert(73);
  bst2.insert(1);
  bst2.insert(72);
  bst2.insert(74);
  console.log(bst2.insert(3)); // Output: "Value already exists, duplicates not allowed"
  console.log(bst2.BFS()); // [3, 1, 73, 72, 74]
  