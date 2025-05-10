# Express.js CRUD Operations with db.json

This is an Express.js application that performs CRUD operations on a collection of dishes using `db.json` as a database.

## Setup Instructions

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the server with `node server.js`.
4. The server will be available at `http://localhost:3000`.

## Routes

- `POST /dishes`: Add a new dish.
- `GET /dishes`: Retrieve all dishes.
- `GET /dishes/:id`: Retrieve a dish by its ID.
- `PUT /dishes/:id`: Update a dish by its ID.
- `DELETE /dishes/:id`: Delete a dish by its ID.
- `GET /dishes/get?name=<dish_name>`: Search for dishes by name (partial matches allowed).
