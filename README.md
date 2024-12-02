# Task_management_API

## **Features**
- Create, retrieve, update, and delete tasks
- Authentication using JWT
- Error handling middleware

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/SiratoonNahar/Task_management_API.git
   cd Task_management_API
2. Install dependencies:
 npm init -y
 npm i express mongoose dotenv...

3. Create a .env file based on .env.example and add necessary environment variables.

4. Run the server:
npx nodemon server.js


## Testing the API

Using Postman:
Import the provided Postman Collection file:
Path: /postman_collection.json
Run the collection to test the endpoints.

1. Create a task

curl -X POST http://localhost:5000/tasks/create \
-H "Authorization: Bearer <generated_token>" \

-d '{
  "title": "New Task",
  "description": "Task description",
  "priority": "High"
}'

2. Get all task
curl -X GET http://localhost:5000/tasks/gettask \
-H "Authorization: Bearer <generated_token>"

3. Get a Task by ID

curl -X GET http://localhost:5000/tasks/<task_id> \
-H "Authorization: Bearer <generated_token>"

4. Update a Task

curl -X PUT http://localhost:5000/tasks/<task_id> \
-H "Authorization: Bearer <generated_token>" \
-H "Content-Type: application/json" \
-d '{
  "title": "Updated Task Title",
  "status": "Inprogress"
}'

5. Delete a task

curl -X DELETE http://localhost:5000/tasks/<task_id> \
-H "Authorization: Bearer <generated_token>"




Directory structure:

Task_Management_API/
│
├── controllers/       # Controller logic for handling requests
├── config/            #connection of mongodb
├── middlewares/       # Custom middleware (e.g., authentication)
├── models/            # Mongoose schemas
├── routes/            # Route definitions
├── server.js          # Server entry point
├── package.json
└── .env               # Environment variables
