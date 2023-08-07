# BFS Social Network

This repository contains two main parts of code: 
1. An implementation of a Binary Search Tree (BST) with a Breadth-First Search (BFS) method.
2. An implementation of a social network that uses BFS to find the shortest friendship path between two users.

## Binary Search Tree with BFS

The BST is implemented in JavaScript. Each node of the tree contains a value, a reference to the left child, and a reference to the right child. The BST also includes a method to insert a new value and a method to perform BFS.

The BFS method starts at the root of the tree and visits all nodes level by level. The values of the visited nodes are returned in an array.

## Social Network with BFS

The social network is implemented with a `User` class and a `SocialNetwork` class. Each user has a name and a list of friends. The social network maintains a list of all users.

Users can be added to the social network, and friendships can be created between users. The `shortestFriendshipPath` method uses BFS to find the shortest path of friendships from one user to another.

For instance, in a social network with users Alice, Bob, Charlie, and David, where Alice is friends with Bob, Bob is friends with Charlie, and Charlie is friends with David, the shortest friendship path from Alice to David is ['Alice', 'Bob', 'Charlie', 'David'].

## How to Run

The code can be executed in any JavaScript environment. Just copy the code into a JavaScript file and run it.

