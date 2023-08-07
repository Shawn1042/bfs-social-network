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

// Add more friendships and try again
charlie.addFriend(david);
console.log(sn.shortestFriendshipPath(alice, david)); // Output: ['Alice', 'Bob', 'Charlie', 'David']
