// First off we need to create the indexedDB.
// Then we want to make our db and also open a pane into our indexedDB.


// That opened pane should be set up with functions based on onupgradeneeded, onsuccess, and also onerror.


// Then we need to use the saveRecord function to save a record into storage of our database.


// We'll also want a function that checks the database (probably called checkDatabase) that will get all of the stored transactions.


// onsuccess of this action, we'll use our API bulk post route to push all of the data to our database.


// If we succeed in our post, then we should clear the store.



// You should also probably add an event listened that checks if the window has gone back online that also calls that checkDatabase function for good measure.



// //const transaction = db.transaction(["pending"], "readwrite");
// const store = transaction.objectStore("pending");
// store//.[action] where [action] is something like add(record) or clear()
