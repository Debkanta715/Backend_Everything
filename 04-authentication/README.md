# Authentication API Project

This project demonstrates a simple authentication system using Node.js, Express, MongoDB, JWT, and cookies. It covers user registration, token creation, and storing tokens in cookies using middleware.

## Folder Structure

```
04-authentication/
│   .env
│   package.json
│   server.js
│   notes.js
│   README.md
│
└───src/
		│   app.js
		├───controllers/
		│       auth.controller.js
		├───db/
		│       db.js
		├───models/
		│       user.models.js
		└───routes/
						auth.route.js
```

## Installation

Install all dependencies:

```
npm install
```

Main packages used:
- mongoose 
- express
- mongoose
- dotenv
- jsonwebtoken
- cookie-parser

## Environment Variables

Create a `.env` file in the root folder with the following:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## How It Works

### 1. User Registration & Token Creation

- When a user registers (`POST /api/auth/register`), a new user is created in MongoDB.
- A JWT token is generated using the user's ID and your secret key.
- The token is stored in a cookie (`token-dev`) using `cookie-parser` middleware.

**Example registration request:**

```
POST /api/auth/register
Content-Type: application/json
{
	"username": "testuser",
	"email": "test@example.com",
	"password": "yourpassword"
}
```

**Response:**

```
{
	"maessage": "user registerd sucessfully",
	"user": { ...user data... }
}
```

### 2. Middleware Used

- `express.json()` to parse JSON bodies.
- `cookie-parser()` to parse and set cookies.

### 3. API Routes

- `POST /api/auth/register` — Register a new user and set JWT token in cookies.
- `GET /api/auth/test` — Test route to view cookies sent by the client.

### 4. How JWT & Cookies Work

- JWT is created with `jsonwebtoken` and signed using your secret from `.env`.
- The token is sent to the client as a cookie, so the server can verify the user's identity on future requests.

## Example Code Snippets

**Token Creation & Setting Cookie:**

```js
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
res.cookie("token-dev", token);
```

**Using Middleware:**

```js
app.use(express.json());
app.use(cookieParser());
```

## Running the Project

Start the server:

```
node server.js
```

The app will run on [http://localhost:4002](http://localhost:4002)

---

This README is designed for easy future reference and revision. All steps and examples are based on the actual code in this folder.
