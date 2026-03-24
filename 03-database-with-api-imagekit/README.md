# Backend API Project (Simple Instagram-like)

A Node.js + Express backend for uploading posts with images and captions, storing data in MongoDB, and serving APIs to create and fetch posts.

---

## Features

- Upload image and caption as a post
- Store images using ImageKit
- Store post data in MongoDB
- REST APIs for creating and fetching posts

---

## Tech Stack

- Node.js
- Express
- MongoDB (with Mongoose)
- Multer (for file uploads)
- ImageKit SDK
- dotenv

---

## Project Structure

```
backend/
  .env
  package.json
  server.js
  src/
    app.js
    database/
      db.js
    model/
      post.model.js
    services/
      storage.services.js
```

---

## Installation & Setup

1. **Install Node.js** (if not already installed):  
   Download from https://nodejs.org/

2. **Install dependencies:**  
   In your backend folder, run:

   ```
   npm install
   ```

3. **Install Mongoose and Nodemon (if needed):**

   ```
   npm install mongoose
   npm install --save-dev nodemon
   ```

4. **Create a `.env` file** in the backend folder:

   ```
   MONGO_URI=your_mongodb_connection_string
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   ```

   - `MONGO_URI`: Your MongoDB connection string (from MongoDB Atlas or local MongoDB)
   - `IMAGEKIT_PRIVATE_KEY`: Your ImageKit private key

5. **Run the server:**
   ```
   node server.js
   ```
   Or, for auto-restart on changes (if using nodemon):
   ```
   npx nodemon server.js
   ```

---

## How the Code Works

### 1. server.js

- Loads environment variables from `.env`
- Connects to MongoDB using Mongoose
- Starts the Express server on port 3001

### 2. src/database/db.js

- Connects to MongoDB using the URI from `.env`
- Logs a message when connected

### 3. src/model/post.model.js

- Defines a Mongoose schema for posts (fields: image, caption)
- Exports the model for use in routes

### 4. src/services/storage.services.js

- Uses ImageKit SDK to upload image buffers
- Returns the uploaded image URL

### 5. src/app.js

- Sets up Express and JSON middleware
- Uses Multer for file uploads (memory storage)
- **POST /create-post**:
  - Accepts an image file and caption
  - Uploads image to ImageKit
  - Saves post (image URL + caption) to MongoDB
  - Returns the created post
- **GET /posts**:
  - Fetches all posts from MongoDB
  - Returns the list

---

## API Endpoints

### POST `/create-post`

- **Type:** `multipart/form-data`
- **Fields:**
  - `image` (file)
  - `caption` (text)
- **Example (curl):**
  ```
  curl -X POST http://localhost:3001/create-post \
    -F "caption=My first post" \
    -F "image=@sample-upload.txt"
  ```

### GET `/posts`

- **Type:** GET
- **Returns:** All posts in the database
- **Example (curl):**
  ```
  curl http://localhost:3001/posts
  ```

---

## How .env Works

- The `.env` file stores sensitive info (like database URI and API keys).
- The `dotenv` package loads these values into `process.env` so your code can use them securely.

---

## Troubleshooting

- **MongoDB connection error:**
  - Check your `MONGO_URI` in `.env`
  - Make sure MongoDB is running and accessible

- **Image upload error:**
  - Check your `IMAGEKIT_PRIVATE_KEY` in `.env`
  - Make sure the file field is named `image` in your request

- **Server not restarting on code changes:**
  - Use `npx nodemon server.js` for auto-reload

---

## Useful Commands

- Install all dependencies:
  ```
  npm install
  ```
- Install nodemon (for development):
  ```
  npm install --save-dev nodemon
  ```
- Start server:
  ```
  node server.js
  ```
- Start server with nodemon:
  ```
  npx nodemon server.js
  ```

---

If you need more details or want to add usage examples, let me know!

### 1) Server start (`server.js`)

- Loads environment variables with `dotenv`
- Imports Express app from `src/app.js`
- Connects MongoDB using `connectDB()`
- Starts server on port `3001`

### 2) Database connection (`src/database/db.js`)

- Uses `mongoose.connect(process.env.MONGO_URI)`
- Logs success message when connected

### 3) Post schema (`src/model/post.model.js`)

- Defines `postSchema` with:
  - `image: String`
  - `caption: String`
- Creates `postModel`

### 4) Image upload service (`src/services/storage.services.js`)

- Creates ImageKit client with `IMAGEKIT_PRIVATE_KEY`
- Uploads image buffer (base64) to ImageKit
- Returns upload result (including URL)

### 5) API routes (`src/app.js`)

- `POST /create-post`
  - Accepts one file with field name `image`
  - Accepts text field `caption`
  - Uploads image to ImageKit
  - Saves `{ image: result.url, caption }` in MongoDB
  - Returns created post
- `GET /posts`
  - Fetches all posts from MongoDB
  - Returns list of posts

## Installation and Setup

### 1) Clone and move into project

```bash
git clone <your-repo-url>
cd "project backend simple like insta"
```

### 2) Install dependencies

```bash
npm install
```

### 3) Create `.env`

Create a `.env` file in project root:

```env
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

## Run Project

```bash
node server.js
```

Expected console output:

- `connected to Databse`
- `app is listen on port 3001`

## API Details

Base URL:

- `http://localhost:3001`

### POST `/create-post`

Creates a new post with image and caption.

Request type:

- `multipart/form-data`

Fields:

- `image` (file)
- `caption` (text)

Example with curl:

```bash
curl -X POST http://localhost:3001/create-post \
  -F "caption=My first post" \
  -F "image=@sample-upload.txt"
```

Sample success response:

```json
{
  "message": "post create sucessfully ",
  "post": {
    "_id": "...",
    "image": "https://ik.imagekit.io/...",
    "caption": "My first post",
    "__v": 0
  }
}
```

### GET `/posts`

Fetches all posts.

Example:

```bash
curl http://localhost:3001/posts
```

Sample success response:

```json
{
  "message": "post fetched sucessfully  ",
  "posts": [
    {
      "_id": "...",
      "image": "https://ik.imagekit.io/...",
      "caption": "My first post",
      "__v": 0
    }
  ]
}
```

## Database Creation Notes

You do not need to manually create tables/collections first.

- MongoDB database is created automatically when first write happens.
- `post` collection is created when `postModel.create(...)` runs.

## Common Problems

- If server crashes at startup:
  - Check `.env` exists and `MONGO_URI` is valid.
- If image upload fails:
  - Check `IMAGEKIT_PRIVATE_KEY` is correct.
  - Ensure request is `multipart/form-data` and file field name is exactly `image`.
- If API gives no response:
  - Ensure route handler always returns `res.status(...).json(...)`.

## Useful Development Commands

```bash
npm install express mongoose multer dotenv @imagekit/nodejs
node server.js
```
