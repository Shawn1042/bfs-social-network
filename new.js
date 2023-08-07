/*
let's first implement a Binary Search Tree including the BFS.

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





/*
Now that we know how to implement a BFS to a BST, let's create a social network utilizing BFS
*/





class User {
  constructor(name) {
    this.name = name;
    this.friends = [];
  }

  addFriend(otherUser) {
    this.friends.push(otherUser);
    otherUser.friends.push(this);
  }
}

class SocialNetwork {
  constructor() {
    this.users = [];
  }

  addUser(name) {
    const newUser = new User(name);
    this.users.push(newUser);
    return newUser;
  }

  shortestFriendshipPath(startUser, targetUser) {
    const queue = [{user: startUser, path: [startUser.name]}];
    const visited = new Set();

    while (queue.length > 0) {
      const {user, path} = queue.shift();
      if (user === targetUser) {
        return path;
      }
      visited.add(user);

      for (const friend of user.friends) {
        if (!visited.has(friend)) {
          const newPath = [...path, friend.name];
          queue.push({user: friend, path: newPath});
        }
      }
    }

    return null;
  }
}

// Create a new social network and add some users
const sn = new SocialNetwork();
const alice = sn.addUser('Alice');
const bob = sn.addUser('Bob');
const charlie = sn.addUser('Charlie');
const david = sn.addUser('David');

// Create friendships
alice.addFriend(bob);
bob.addFriend(charlie);

// Find shortest friendship path
console.log(sn.shortestFriendshipPath(alice, charlie)); // Output: ['Alice', 'Bob', 'Charlie']

console.log(sn.shortestFriendshipPath(bob, david)); // returns null

// Add more friendships and try again
charlie.addFriend(david);
console.log(sn.shortestFriendshipPath(alice, david)); // Output: ['Alice', 'Bob', 'Charlie', 'David']

