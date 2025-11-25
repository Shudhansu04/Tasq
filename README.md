
#  Tasq API

A simple and clean RESTful API to manage tasks, built with **Node.js**, **Express**, and **MongoDB**. This backend-only project demonstrates API design principles, custom error handling, and Swagger documentation.

---

##  API Documentation

- Swagger Docs URL: [Click Here](https://tasq-huml.onrender.com/api-docs/)
- Format: YAML-based (`swagger.yaml`)
- Tool: Swagger UI Express + YAML parser
- Postman Documentation available :- [Click Here](https://shudhansupamdey.postman.co/workspace/74aabce3-b77d-44e6-8adf-c1b77ad6474d/collection/46490544-6a5f3f5e-2d16-40d8-b255-1a0ce881dad9?action=share&source=collection_link&creator=46490544)

---

##  Features

-  Create, Read, Update, and Delete tasks
-  RESTful API using Express router
-  Modular structure (Controllers, Routes, Models, Middleware)
-  Security via Helmet
-  Custom error handler and 404 middleware
-  Swagger API documentation (`swagger.yaml`)
-  Postman Collection for testing

---

##  Folder Structure

```
task-manager-api/
│
├── controller/
│   └── tasks.js
│
├── db/
│   └── connect.js
│
├── middleware/
│   ├── async.js
│   ├── custom-error.js
│   ├── error-handler.js
│   └── not-found.js
│
├── models/
│   └── task.js
│
├── routes/
│   └── tasks.js
│
├── public/
│   └── (static files if any)
│
├── swagger.yaml
├── app.js
├── .env
├── package.json
├── package-lock.json
└── README.md
└── Tasq.postman_collection.json
```

---

##  Setup Instructions

### 1. Clone the Repository

```bash
git clone  
cd tasq-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/task-manager?retryWrites=true&w=majority
```

> Replace `<username>` and `<password>` with your MongoDB Atlas credentials or use local MongoDB URI.

### 4. Run the Server

```bash
# For development with nodemon
npm run dev

# For production
npm start
```

---


##  API Endpoints

Base URL: `/api/v1/tasks`

###  Task Routes

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| GET    | `/getall`          | Get all tasks           |
| POST   | `/create`          | Create a new task       |
| GET    | `/get/:id`         | Get a task by ID        |
| PATCH  | `/update/:id`      | Update a task by ID     |
| DELETE | `/delete/:id`      | Delete a task by ID     |

---

##  Task Schema

```js
{
  name: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: Date,
  updatedAt: Date
}
```

> The model uses timestamps if `timestamps: true` is set in the schema.

---

##  Middlewares

### `async.js`

Handles async errors using a wrapper function.

### `custom-error.js`

Creates custom error with message and status code.

### `not-found.js`

Handles 404 - Not Found error:

```js
res.status(404).json({ msg: 'Route does not exist' });
```

### `error-handler.js`

Handles all server-side errors:

```js
res.status(500).json({ msg: err.message || 'Internal Server Error' });
```

---

##  Security & Middleware

- `helmet` – Sets secure HTTP headers
- `express.json()` – Parses incoming JSON requests
- `express.static()` – Serves static files from `/public`

---

##  Postman Collection

A complete Postman collection is available to test all routes.

### Collection Name: `Tasq API`

| Name            | Method | URL                       | Body (if any)          |
|-----------------|--------|---------------------------|------------------------|
| Get All Tasks   | GET    | `/api/v1/tasks/getall`    | None                   |
| Create Task     | POST   | `/api/v1/tasks/create`    | `{ "name": "Task" }`   |
| Get Task by ID  | GET    | `/api/v1/tasks/get/:id`   | None                   |
| Update Task     | PATCH  | `/api/v1/tasks/update/:id`| `{ "completed": true }`|
| Delete Task     | DELETE | `/api/v1/tasks/delete/:id`| None                   |

---

##  Requirements

- Node.js >= 14.x
- MongoDB Atlas or local MongoDB
- Postman (for testing)

---

##  Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---


##  Acknowledgments

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Swagger](https://swagger.io/)
- [Postman](https://www.postman.com/)
