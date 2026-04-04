# 03-database-with-api-imagekit

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Backend Structure](#backend-structure)
5. [Frontend Structure](#frontend-structure)
6. [API Endpoints](#api-endpoints)
7. [How to Run](#how-to-run)
8. [Environment Variables](#environment-variables)
9. [Code Walkthrough](#code-walkthrough)
10. [New Features](#new-features)
11. [Screenshots](#screenshots)
12. [Best Practices](#best-practices)
13. [Troubleshooting](#troubleshooting)
14. [Contributing](#contributing)
15. [License](#license)

---

## Project Overview

**03-database-with-api-imagekit** is a full-stack project that demonstrates how to build a modern image-sharing application using Node.js, Express, MongoDB, React, and ImageKit for image storage. The backend provides RESTful APIs for uploading and fetching posts, while the frontend offers a clean UI for creating and viewing posts.

---

## Features

- Upload images with captions
- Store images securely using ImageKit
- Fetch and display all posts
- Responsive React frontend
- RESTful API design
- Modern CSS styling
- Error handling and validation
- Environment variable support
- Modular code structure
- CORS enabled for frontend-backend communication

---

## Tech Stack

- **Backend:** Node.js, Express, MongoDB, Mongoose, Multer, ImageKit
- **Frontend:** React, Vite, Axios, React Router DOM
- **Styling:** CSS (custom, responsive)
- **Other:** dotenv, cors

---

## Backend Structure

```
Backend/
  ├── server.js
  ├── package.json
  ├── .env
  └── src/
      ├── app.js
      ├── db/
      │   └── db.js
      ├── models/
      │   └── post.model.js
      └── services/
          └── storage.service.js
```

- **server.js**: Entry point, starts the server and connects to DB.
- **src/app.js**: Express app, API routes, middleware.
- **src/db/db.js**: MongoDB connection logic.
- **src/models/post.model.js**: Mongoose schema for posts.
- **src/services/storage.service.js**: Handles image upload to ImageKit.

---

## Frontend Structure

```
Frontend2/new/
  ├── src/
  │   ├── App.jsx
  │   ├── main.jsx
  │   ├── index.css
  │   ├── App.css
  │   └── pages/
  │       ├── Createpost.jsx
  │       └── Feed.jsx
  ├── public/
  │   └── vite.svg
  ├── package.json
  ├── vite.config.js
  └── README.md
```

- **App.jsx**: Main React component, sets up routing.
- **main.jsx**: React entry point.
- **pages/Createpost.jsx**: Form to create a new post.
- **pages/Feed.jsx**: Displays all posts.
- **index.css/App.css**: Styling.

---

## API Endpoints

- `POST /create-post` — Upload an image and caption
- `GET /posts` — Fetch all posts

---

## How to Run

### Backend

1. `cd Backend`
2. `npm install`
3. Set up `.env` (see below)
4. `node server.js`

### Frontend

1. `cd Frontend2/new`
2. `npm install`
3. `npm run dev`

---

## Environment Variables

Create a `.env` file in `Backend/`:

```
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

---

## Code Walkthrough

### Backend

- **server.js**: Loads environment variables, connects to MongoDB, starts Express server.
- **src/app.js**: Sets up Express, CORS, JSON parsing, and API routes. Uses Multer for file uploads. Handles `/create-post` and `/posts` endpoints.
- **src/db/db.js**: Connects to MongoDB using Mongoose.
- **src/models/post.model.js**: Defines a simple schema for posts (image URL, caption).
- **src/services/storage.service.js**: Uploads image buffer to ImageKit and returns the URL.

### Frontend

- **App.jsx**: Uses React Router to switch between Create Post and Feed pages.
- **Createpost.jsx**: Form for uploading an image and caption.
- **Feed.jsx**: Fetches and displays posts from the backend.
- **index.css**: Provides modern, responsive styling for the app.

---

## New Features

- **ImageKit Integration:** Secure, fast image uploads and CDN delivery.
- **Multer Memory Storage:** Efficient in-memory file handling for uploads.
- **React Router:** SPA navigation between Create Post and Feed.
- **Axios:** Modern HTTP client for API requests.
- **Responsive UI:** Mobile-friendly, clean design.
- **Error Handling:** Basic error handling for API calls.
- **Environment Variables:** Securely manage secrets and config.
- **Modular Code:** Clear separation of concerns in both backend and frontend.

---

## Screenshots

<!-- Add screenshots here -->

---

## Best Practices

- Use environment variables for sensitive data
- Keep frontend and backend code modular
- Validate user input on both client and server
- Use async/await for asynchronous code
- Handle errors gracefully
- Use version control (git)
- Write clear commit messages
- Keep dependencies up to date

---

## Troubleshooting

- **MongoDB connection error:** Check your `MONGO_URI` in `.env`.
- **Image upload fails:** Verify ImageKit credentials.
- **CORS issues:** Ensure frontend and backend are running on allowed origins.
- **Port conflicts:** Change ports if 3222 is in use.

---

## Contributing

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## License

MIT

---

<!--
Below this line, you can add more detailed documentation, code samples, API schemas, advanced usage, FAQ, and more. Expand as needed to reach 300 lines. -->

---

## Advanced Usage

### Customizing ImageKit

You can customize the file name, folder, and transformation options in `storage.service.js`.

### Adding More Fields

To add more fields to posts (e.g., user, tags), update the Mongoose schema and frontend forms.

### Deploying to Production

- Use environment variables for production secrets
- Set up HTTPS
- Use a process manager (e.g., PM2) for backend
- Deploy frontend with Vercel, Netlify, or your server

---

## API Reference

### POST /create-post

- **Request:**
  - `image`: File (image)
  - `caption`: String
- **Response:**
  - `message`: String
  - `post`: Object

### GET /posts

- **Response:**
  - `message`: String
  - `posts`: Array of post objects

---

## FAQ

**Q: Can I use another image storage provider?**
A: Yes, update `storage.service.js` to use your preferred provider (e.g., Cloudinary, AWS S3).

**Q: How do I add authentication?**
A: Add JWT or session-based auth in backend and protect routes.

**Q: How do I deploy the backend?**
A: Use services like Heroku, Render, or your own server. Set environment variables accordingly.

---

## Folder Structure Explained

### Backend

- **server.js**: Loads env, connects DB, starts server
- **src/app.js**: Express app, API routes
- **src/db/db.js**: MongoDB connection
- **src/models/post.model.js**: Post schema
- **src/services/storage.service.js**: ImageKit upload

### Frontend

- **App.jsx**: Routing
- **main.jsx**: Entry point
- **pages/Createpost.jsx**: Post form
- **pages/Feed.jsx**: Post feed
- **index.css**: Styles

---

## API Error Codes

- `400`: Bad request (missing fields)
- `500`: Server error (DB, ImageKit)

---

## Customization

- Change port in `server.js`
- Update styles in `index.css`/`App.css`
- Add more routes/pages as needed

---

## Credits

- [ImageKit](https://imagekit.io/)
- [MongoDB](https://mongodb.com/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com/)

---

## Contact

For questions, open an issue or contact the maintainer.

---

<!--
Expand this README with more code samples, diagrams, and advanced documentation as your project grows. This template is designed to be comprehensive and beginner-friendly.
-->
