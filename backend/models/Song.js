const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    bpm: { type: Number, required: true },
    mood: { type: String, required: true },
    energyLevel: { type: Number, required: true },
    instruments: [{ type: String }],
    productionYear: { type: Number, required: true },
    radioSource: { type: String, required: true },
    metadata: { type: Object },
    analyzedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Song', songSchema);