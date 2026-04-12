const mongoose = require('mongoose');

const userPreferencesSchema = new mongoose.Schema({
    favoriteSongs: [{ type: String }],
    mainReferenceSong: { type: Object },
    famousSongs: [{ type: String }],
    searchHistory: [{ type: String }],
    learnedProfile: {
        avgBPM: { type: Number },
        preferredMoods: [{ type: String }],
        preferredYears: [{ type: Number }],
        preferredInstruments: [{ type: String }],
        energyLevel: { type: Number }
    },
    cachedMatches: { type: Object }
}, { timestamps: true });

module.exports = mongoose.model('UserPreferences', userPreferencesSchema);