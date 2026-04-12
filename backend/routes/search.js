const express = require('express');
const router = express.Router();

// Mock data - replace this with actual data fetching from your database or radio stream
const radioStreams = [
    // Example stream objects
    { title: "Song A", mood: "happy", bpm: 120, year: 2020, instruments: ["guitar", "drums"], matchScore: 0.8 },
    { title: "Song B", mood: "sad", bpm: 95, year: 2018, instruments: ["piano"], matchScore: 0.9 },
    // More song objects...
];

// Search route
router.get('/search', (req, res) => {
    const { mood, minBPM, maxBPM, minYear, maxYear, instruments } = req.query;

    let results = radioStreams.filter(song => {
        const moodMatch = mood ? song.mood === mood : true;
        const bpmMatch = (minBPM ? song.bpm >= minBPM : true) && (maxBPM ? song.bpm <= maxBPM : true);
        const yearMatch = (minYear ? song.year >= minYear : true) && (maxYear ? song.year <= maxYear : true);
        const instrumentsMatch = instruments ? song.instruments.some(instr => instruments.includes(instr)) : true;

        return moodMatch && bpmMatch && yearMatch && instrumentsMatch;
    }).map(song => ({
        title: song.title,
        mood: song.mood,
        bpm: song.bpm,
        year: song.year,
        instruments: song.instruments,
        matchScore: song.matchScore
    }));

    res.json(results);
});

module.exports = router;