const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

// Simulated User Database
let users = [];

// Registration Route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).send('User registered');
});

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(403).send('Invalid credentials');
    }
    const token = jwt.sign({ username }, 'secret_key'); // Use a more secure key in production
    res.json({ token });
});

// Logout Route
router.post('/logout', (req, res) => {
    // Implementation is up to client-side (e.g., deleting token)
    res.send('User logged out');
});

// Profile Update Route
router.put('/profile', authenticateToken, async (req, res) => {
    const { username, newPassword } = req.body;
    const user = users.find(u => u.username === req.user.username);
    if (!user) return res.sendStatus(404);

    if (newPassword) {
        user.password = await bcrypt.hash(newPassword, 10);
    }
    res.send('Profile updated');
});

// Middleware to authenticate token
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, 'secret_key', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = router;