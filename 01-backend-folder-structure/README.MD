# 01 - Backend Folder Structure

A basic backend server built with **Node.js** and **Express.js**.  
This project shows how to properly structure a backend project with separate files for the server and app logic.

---

## First — What You Need to Download & Install

Before running this project, you must install these tools on your computer:

### 1. Node.js (REQUIRED)
- Node.js lets you run JavaScript on your computer (outside the browser).
- It also installs **npm** (Node Package Manager) automatically — npm is used to install packages.
- Download from: https://nodejs.org
- Choose the **LTS version** (recommended for beginners).
- After installing, verify in terminal:
  ```bash
  node -v
  npm -v
  ```

### 2. A Terminal (already available)
- **Windows**: Use PowerShell or Command Prompt (already installed on Windows).
- **Mac/Linux**: Use the built-in Terminal app.
- You use the terminal to run commands like `node server.js` or `npm install`.

### 3. nodemon (optional but recommended)
- `nodemon` automatically restarts your server every time you save a file — very useful during development.
- Install it globally once:
  ```bash
  npm install -g nodemon
  ```

---

## Project Folder Structure

```
01-backend-folder-structure/
├── server.js         ← Entry point: starts the server on port 3000
├── package.json      ← Lists all packages/dependencies for this project
└── src/
    └── app.js        ← Creates the Express app and exports it
```

**Why two files (server.js and app.js)?**
- `app.js` — only creates and configures the Express app.
- `server.js` — imports the app and starts listening on a port.
- This separation is a best practice. It keeps your code clean and organized.

---

## Packages Installed & Their Purpose

All packages are listed in `package.json` under `dependencies`.  
Install them all at once by running: `npm install`

| Package | Version | What it does |
|---|---|---|
| **express** | ^5.2.1 | The main framework for building the backend server. It handles routes, requests, and responses. |
| **mongoose** | ^9.3.0 | Connects your Node.js app to a **MongoDB** database. Makes it easy to create, read, update, and delete data. |
| **multer** | ^2.1.1 | Handles **file uploads** (like images or PDFs) sent from a form or frontend. |
| **imagekit** | ^6.0.0 | Connects to **ImageKit.io** — a cloud service for storing, optimizing, and delivering images. |

---

## How to Run This Project

### Step 1 — Go into the project folder
```bash
cd 01-backend-folder-structure
```

### Step 2 — Install all packages
```bash
npm install
```
This reads `package.json` and downloads all packages into a `node_modules` folder.

### Step 3 — Start the server

**Option A: Normal start (using Node)**
```bash
node server.js
```

**Option B: Auto-restart on file save (using nodemon)**
```bash
nodemon server.js
```

### Step 4 — Confirm it is running
You should see this message in the terminal:
```
port listen on 3000
```
This means your server is running at: **http://localhost:3000**

---

## How the Code Works

### `src/app.js`
```js
const express = require('express');   // import express package
const app = express();                // create the express app
module.exports = app;                 // export it so server.js can use it
```

### `server.js`
```js
const app = require('./src/app');     // import the app from app.js
app.listen('3000', () => {            // start the server on port 3000
    console.log("port listen on 3000");
});
```

---

## Common Errors & Fixes

| Error | Cause | Fix |
|---|---|---|
| `Cannot find module 'express'` | Packages not installed | Run `npm install` |
| `Cannot find module './src/app'` | Running server.js from wrong folder | Make sure you are inside `01-backend-folder-structure` |
| `nodemon: command not found` | nodemon not installed | Run `npm install -g nodemon` |
| `EADDRINUSE: port 3000` | Port 3000 already in use | Stop the other process or change port to 3001 |
