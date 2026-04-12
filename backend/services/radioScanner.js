// radioScanner.js

const axios = require('axios');

// List of radio APIs to fetch current songs from
const radioAPIs = [
    { name: 'Spotify', url: 'https://api.spotify.com/v1/...'},
    { name: 'Deezer', url: 'https://api.deezer.com/...'},
    { name: 'TuneIn', url: 'https://tunein.com/api/...'},
    { name: 'SiriusXM', url: 'https://api.siriusxm.com/...'},
    { name: 'radioBrowser', url: 'https://api.radiobrowser.info/...'},
    // Add more APIs as needed
];

async function fetchCurrentSongs() {
    const promises = radioAPIs.map(api => 
        axios.get(api.url).then(response => {
            // Extract song data from the response
            return {
                source: api.name,
                title: response.data.title,
                artist: response.data.artist,
                metadata: response.data.metadata
            };
        }).catch(error => {
            console.error(`Error fetching from ${api.name}:`, error);
            return null;
        })
    );

    const results = await Promise.all(promises);
    return results.filter(result => result !== null);
}

// Uncomment to run the function and log the results
// fetchCurrentSongs().then(songs => console.log(songs));

module.exports = fetchCurrentSongs;