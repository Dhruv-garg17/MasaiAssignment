# Express.js User Routes

This is a basic Express.js application that provides routes related to user information.

## Setup Instructions

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Start the server with `node server.js`.
4. The server will run on `http://localhost:3000`.

## Routes

- `GET /users/get`: Returns a JSON response with a single user's details.
- `GET /users/list`: Returns a JSON response with a list of users' details.
- Undefined routes return a `404 Not Found` error.
