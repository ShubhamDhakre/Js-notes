//@@...check for the local storage
if (typeof localStorage !== 'undefined') {
  // Local Storage is supported
} else {
  alert("Your browser doesn't support Local Storage!");
}


//..CRUD operation
  // 1. SET data (store)
   localStorage.setItem('username', 'JohnDoe');
   localStorage.setItem('theme', 'dark');
   localStorage.setItem('score', '100');

  // 2. GET data (retrieve)
   const username = localStorage.getItem('username'); // "JohnDoe"
   const theme = localStorage.getItem('theme');       // "dark"
   const score = localStorage.getItem('score');       // "100" (string!)

  // 3. REMOVE data
   localStorage.removeItem('theme'); // Removes only 'theme'

  // 4. CLEAR all data
    localStorage.clear(); // Clears everything for this domain

  // 5. Check if key exists
   if (localStorage.getItem('username') !== null) {
       console.log('Username exists!');
      }

   // 6. Get key name by index
     const firstKey = localStorage.key(0); // Gets first key name    


//@@...storage of array and string 

   // Store an object
   const user = {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
     };

   // Convert to JSON string before storing
     localStorage.setItem('user', JSON.stringify(user));

   // Retrieve and parse back to object
     const storedUser = JSON.parse(localStorage.getItem('user'));
     console.log(storedUser.name); // "Alice"

   // Store an array
      const tasks = ['Task 1', 'Task 2', 'Task 3'];
       localStorage.setItem('tasks', JSON.stringify(tasks));

   // Retrieve array
       const storedTasks = JSON.parse(localStorage.getItem('tasks'));
       console.log(storedTasks[0]); // "Task 1"