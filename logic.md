# Counter Application Logic

## General Description
The application lets the user increase or decrease a number counter.  
Each user has their own counter that is stored on the server.

## First Start – User Identification
When the user opens the application for the first time:

1. The system checks if a user key exists in localStorage.
2. If the user does not exist:
    - the client sends a request to the server to create a new user
    - the server generates a new user key
    - the client saves this user key in localStorage
3. If the userId already exists:
    - the application uses it for all next requests.

## Loading Data
After getting the user key:

1. the client asks the server for the current counter value
2. the server returns:
    - the current counter value
    - the history of previous values
3. the client shows this data on the screen

## Counter Actions
The user can:

- increase the value
- decrease the value
- generate a random value
- clear the value
- save the value to history

After each change:

1. the new value appears on the screen
2. the new value is saved on the server

## Saving the Result
When the user decides to save the result:

1. the current counter value is sent to the server
2. the server adds this record to the history
3. the current counter value resets to 0
4. the client updates the interface:
    - the counter shows 0
    - a new record appears in the history list

## History
The history should contain:

- the counter value
- the time when the record was created

The user can:

- look histiry
- delete history

The history is shown as a list on the screen.  
New records appear at the top of the list.

