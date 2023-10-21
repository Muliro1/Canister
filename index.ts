import { Canister, query, text, update, record, opt, Vec, Null, Bool, Int, Principal, nat } from 'azle';

let message = '';
let users: Record<string, string> = {};

export default Canister({
    // Function to get the current message
    getMessage: query([], text, () => {
        return message;
    }),

    // Function to set a new message
    setMessage: update([text], Null, (newMessage) => {
        message = newMessage;
    }),

    // Function to add a user
    addUser: update([text, text], Null, (username, email) => {
        users[username] = email;
    }),

    // Function to get the email of a user
    getUserEmail: query([text], opt(text), (username) => {
        return users[username] || null;
    }),

    // Function to delete a user
    deleteUser: update([text], Null, (username) => {
        delete users[username];
    }),

    // Function to check if a user exists
    userExists: query([text], Bool, (username) => {
        return users.hasOwnProperty(username);
    }),

    // Function to update the message conditionally
    updateMessageIfMatch: update([text, text], Null, (currentMessage, newMessage) => {
        if (message === currentMessage) {
            message = newMessage;
        }
    }),

    // Function to increment a counter
    incrementCounter: update([Int], Int, (value) => {
        return value + 1;
    }),

    // Function to transfer ownership
    transferOwnership: update([Principal], Null, (newOwner) => {
        // Implement ownership transfer logic here
    }),

    // Function to get the current counter value
    getCounterValue: query([], Int, () => {
        // Return the current value of a counter (you can implement this logic)
        return 0;
    })
});
