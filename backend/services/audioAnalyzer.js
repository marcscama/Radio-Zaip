// audioAnalyzer.js

const { Analyzer, getMetadata } = require('essentia.js');

async function analyzeAudio(filePath) {
    const analyzer = new Analyzer();
    const metadata = await getMetadata(filePath);

    // Analyze BPM, Mood, Energy, and Instruments
    const bpm = await analyzer.getBPM(filePath);
    const mood = determineMood();  // implement your own mood detection logic here
    const energyLevel = getEnergyLevel();  // implement your own energy level logic
    const instruments = await analyzer.getInstruments(filePath);
    const productionYear = metadata.production_year || 'Unknown';

    return { bpm, mood, energy_level: energyLevel, instruments, production_year: productionYear };
}

function determineMood() {
    // Sample logic to determine mood
    return 'energetic'; // Example: return energetic, tranquilo, triste, euforico
}

function getEnergyLevel() {
    // Sample logic for energy level
    return 'high'; // Example: return low, medium, high
}

module.exports = { analyzeAudio };