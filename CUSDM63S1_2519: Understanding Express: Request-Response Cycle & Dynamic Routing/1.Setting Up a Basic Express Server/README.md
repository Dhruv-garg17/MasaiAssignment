# Express.js Server

This is a simple Express.js server with basic routing.

## Setup Instructions

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Start the server with `node server.js`.
4. The server will run on `http://localhost:3000`.

## Routes

- `GET /home`: Returns "Welcome to Home Page" in HTML.
- `GET /aboutus`: Returns a JSON message `{ "message": "Welcome to About Us" }`.
- `GET /contactus`: Returns dummy contact details in JSON.
- Undefined routes return a `404 Not Found` message.
