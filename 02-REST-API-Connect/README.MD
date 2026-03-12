# 02 — REST API Connect

A beginner-friendly **REST API** built with **Node.js** and **Express.js**.
Supports full **CRUD** — Create, Read, Update, Delete for Notes.

---

## Folder Structure

```
02-REST-API-Connect/
│
├── server.js        ← Starts the server on port 3000
├── package.json     ← Project dependencies
│
└── src/
    └── app.js       ← All 4 REST API routes are here
```

---

## Packages Used

Only **one** package is used:

| Package | Version | What it does |
|---|---|---|
| **express** | ^5.2.1 | Builds the server and handles all API routes |

Install it:
```bash
npm install
```

---

## How to Run

```bash
cd 02-REST-API-Connect
nodemon server.js
```

Terminal will show:
```
app is listen on port 3000
```

Your API is live at **http://localhost:3000**

---

## How the Code Works

### Middleware
```js
app.use(express.json())
```
This line is **critical** — it tells Express to read JSON data from Postman requests.
Without this, `req.body` will be `undefined` and nothing will work.

### In-Memory Storage
```js
const notes = []
```
Notes are stored in this array while the server is running.
Data is lost when you restart the server — no database connected yet.

---

## All 4 REST API Routes

### 1. POST `/notes` — Create a new note
```js
app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.status(200).json({ massaage: "note are created sucessfullly" })
})
```
Receives data from Postman and pushes it into the `notes` array.

---

### 2. GET `/notes` — Fetch all notes
```js
app.get('/notes', (req, res) => {
    res.status(200).json({ massaage: "Notes fatchh sucessfully", notes: notes })
})
```
Returns all notes stored in the array.

---

### 3. PATCH `/notes/:id` — Update a note by index
```js
app.patch('/notes/:id', (req, res) => {
    const id = req.params.id
    notes[id].description = req.body.description
    notes[id].title = req.body.title
    res.status(200).json({ massaage: "data are update sucessfullly" })
})
```
`:id` is the index number of the note — `0` for first note, `1` for second, etc.

---

### 4. DELETE `/notes/:id` — Delete a note by index
```js
app.delete('/notes/:id', (req, res) => {
    const id = req.params.id
    delete notes[id]
    res.status(200).json({ massaage: "data deleted sucessfully" })
})
```
Removes the note at the given index.

---

## How to Test APIs in Postman

### Where to put data in Postman

Always use **Body → raw → JSON** for sending data.
Never use **form-data** for these APIs — form-data is only for file uploads.

| Section | Use for |
|---|---|
| **Body → raw → JSON** | Sending notes data — use for POST and PATCH |
| **Body → form-data** | Do NOT use — this is for file/image uploads only |
| **Params** | `:id` in URL is handled automatically via the URL |
| **Headers** | Auto-set by Postman when you pick raw JSON |

---

### TEST 1 — Create a Note (POST)

```
Method  : POST
URL     : http://localhost:3000/notes
Body    : raw → JSON
```
```json
{
  "title": "My First Note",
  "description": "This is my note content"
}
```
**Expected Response:**
```json
{
  "massaage": "note are created sucessfullly"
}
```

---

### TEST 2 — Get All Notes (GET)

```
Method  : GET
URL     : http://localhost:3000/notes
Body    : none — GET has no body
```
**Expected Response:**
```json
{
  "massaage": "Notes fatchh sucessfully",
  "notes": [
    { "title": "My First Note", "description": "This is my note content" }
  ]
}
```

---

### TEST 3 — Update a Note (PATCH)

First create a note using POST, then update it.

```
Method  : PATCH
URL     : http://localhost:3000/notes/0
Body    : raw → JSON
```
```json
{
  "title": "Updated Title",
  "description": "Updated description"
}
```
**Expected Response:**
```json
{
  "massaage": "data are update sucessfullly"
}
```

---

### TEST 4 — Delete a Note (DELETE)

```
Method  : DELETE
URL     : http://localhost:3000/notes/0
Body    : none — DELETE has no body
```
**Expected Response:**
```json
{
  "massaage": "data deleted sucessfully"
}
```

---

## Postman Setup — Step by Step

```
1. Open Postman
2. Click [ + ] to open a new tab
3. Select the METHOD (GET / POST / PATCH / DELETE) from the dropdown
4. Type the URL:  http://localhost:3000/notes
5. For POST and PATCH only:
      - Click "Body" tab
      - Select "raw"
      - On the right dropdown change "Text" to "JSON"
      - Type your JSON data in the box
6. Click the blue "Send" button
7. See the response at the bottom of Postman
```

---

## Common Errors & Fixes

| Error | Cause | Fix |
|---|---|---|
| `req.body` is undefined | Missing `express.json()` middleware | Add `app.use(express.json())` at top |
| `Cannot read properties of undefined` | Note at that id does not exist | First POST a note, then use id `0` |
| Empty response in Postman | Wrong HTTP method selected | Match the method — POST / GET / PATCH / DELETE |
| `Cannot find module` | Packages not installed | Run `npm install` |
| `EADDRINUSE port 3000` | Port already in use | Restart terminal or change port to `3001` |
