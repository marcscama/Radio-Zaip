const express = require('express');
const router = express.Router();

// Mock database for playlists and favorites
let playlists = [];
let favorites = [];

// Create a dynamic playlist from matched songs
router.post('/create-playlist', (req, res) => {
    const { songs } = req.body;
    const newPlaylist = { id: playlists.length + 1, songs };
    playlists.push(newPlaylist);
    res.status(201).json(newPlaylist);
});

// Add a song to favorites
router.post('/favorites', (req, res) => {
    const { song } = req.body;
    favorites.push(song);
    res.status(201).json({ message: 'Song added to favorites', song });
});

// Get user favorite songs
router.get('/favorites', (req, res) => {
    res.status(200).json(favorites);
});

// Get playlist recommendations based on learning profile
router.get('/recommendations', (req, res) => {
    // Just returning all playlists for the sake of example
    // In a real scenario, this would be more sophisticated based on user data
    res.status(200).json(playlists);
});

module.exports = router;