Vehicle Rental Form – Full Stack Test Project

Tech Used

    Frontend: React.js, Material UI
    Backend: Node.js, Express.js, Sequelize ORM
    Database: SQLite (local file)

How to Run the Project 

Backend

1. Open terminal → go to the backend folder:

	cd backend

2. Install backend dependencies:

	npm install

3. Start the backend server:

    npx nodemon index.js

4. Make sure the server is running at:
    http://localhost:3001

Note: A file named database.sqlite is already included in the backend folder and preloaded with sample data.

Frontend

1. Open another terminal → go to the frontend folder:

	cd frontend

2. Install frontend dependencies:

	npm install

3. Start the frontend:

    npm start

4. The app will open in the browser at:
    http://localhost:3000

Main Features

    Multi-step form: name → wheels → vehicle type → model → date range
    Vehicle type & model are loaded from backend dynamically
    Backend checks for overlapping bookings
    Success confirmation screen on booking