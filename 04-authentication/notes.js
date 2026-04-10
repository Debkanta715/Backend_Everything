/**
 * Authentication & Authorization Concepts
 * --------------------------------------
 * This file outlines the core concepts and best practices for user authentication and authorization.
 * Organized for clarity and future expansion.
 */

// =========================
// 1. Validation
// =========================
// - Check input formats and correctness before processing.
// - Examples:
//   - Mobile: Should be a valid number, e.g., 12345678
//   - Email: Should be a valid email format, e.g., user@example.com
//   - Full Name: Should not be empty, e.g., "Debknata"
//   - Password: Should meet security requirements, e.g., "test123"

// Example validation functions (to implement):
// function validateMobile(mobile) { /* ... */ }
// function validateEmail(email) { /* ... */ }
// function validateFullName(name) { /* ... */ }
// function validatePassword(password) { /* ... */ }

// =========================
// 2. Verification
// =========================
// - Check if the email or mobile exists in the database.
// - Ensure the provided email/mobile is correct and belongs to the user.
// - Used for registration, login, and password reset flows.

// Example verification function (to implement):
// function verifyEmailExists(email) { /* ... */ }

// =========================
// 3. Authentication
// =========================
// - Process of confirming a user's identity (e.g., login).
// - Multiple users can exist on one server.
// - Identify which user is making a request to the server.
// - Common methods: password, OTP, OAuth, etc.

// Example authentication function (to implement):
// function authenticateUser(credentials) { /* ... */ }

// =========================
// 4. Authorization
// =========================
// - Determines what actions a user can perform after authentication.
// - Example: On Spotify, a regular user can listen to music, but an artist can upload songs.
// - Role-based access control (RBAC) is common.

// Example authorization function (to implement):
// function authorizeAction(user, action) { /* ... */ }

// =========================
// 5. Future Expansion
// =========================
// - Add JWT/session management
// - Implement middleware for validation/authentication/authorization
// - Add logging and error handling
// - Integrate with frontend/mobile apps

// This file serves as a conceptual and planning guide for building robust authentication systems.


// here we follow token based autorization 

// one is session base


