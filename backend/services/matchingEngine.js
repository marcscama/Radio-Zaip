// matchingEngine.js

/**
 * Intelligent Similarity Algorithm
 * Matches songs based on multiple features: BPM range, mood, instruments, year range, and energy level.
 * Returns a score between 0-100 indicating similarity.
 */

function calculateSimilarity(song1, song2) {
    let score = 0;

    // Weighting factors for each feature
    const weights = {
        bpm: 0.2,
        mood: 0.2,
        instruments: 0.2,
        year: 0.2,
        energy: 0.2
    };

    // BPM similarity score
    const bpmScore = 100 - Math.abs(song1.bpm - song2.bpm);
    score += (bpmScore * weights.bpm);

    // Mood similarity score (assuming mood is represented as a string)
    const moodScore = song1.mood === song2.mood ? 100 : 0;
    score += (moodScore * weights.mood);

    // Instruments similarity score
    const sharedInstruments = song1.instruments.filter(instrument => song2.instruments.includes(instrument)).length;
    const instrumentsScore = (sharedInstruments / Math.max(song1.instruments.length, song2.instruments.length)) * 100;
    score += (instrumentsScore * weights.instruments);

    // Year similarity score
    const yearScore = 100 - Math.abs(song1.year - song2.year);
    score += (yearScore * weights.year);

    // Energy level similarity score
    const energyScore = 100 - Math.abs(song1.energy - song2.energy);
    score += (energyScore * weights.energy);

    // Normalize score to 0-100
    return Math.round(score);
}

// Example usage:
const songA = { bpm: 120, mood: 'happy', instruments: ['guitar', 'drums'], year: 2020, energy: 80 };
const songB = { bpm: 125, mood: 'happy', instruments: ['guitar', 'bass'], year: 2019, energy: 75 };
const similarityScore = calculateSimilarity(songA, songB);
console.log(`Similarity Score: ${similarityScore}`);
