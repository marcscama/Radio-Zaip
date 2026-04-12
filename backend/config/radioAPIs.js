// backend/config/radioAPIs.js

const radioAPIs = {
    spotify: {
        name: "Spotify",
        url: "https://api.spotify.com/v1/",
        apiKey: "YOUR_SPOTIFY_API_KEY"
    },
    deezer: {
        name: "Deezer",
        url: "https://api.deezer.com/",
        apiKey: "YOUR_DEEZER_API_KEY"
    },
    tuneIn: {
        name: "TuneIn",
        url: "https://opml.radiotime.com/Search.ashx",
        apiKey: "YOUR_TUNEIN_API_KEY"
    },
    siriusXM: {
        name: "SiriusXM",
        url: "https://api.siriusxm.com/v1/",
        apiKey: "YOUR_SIRIUSXM_API_KEY"
    },
    radioBrowser: {
        name: "radioBrowser",
        url: "http://api.radio-browser.info/api/json/",
        apiKey: "YOUR_RADIOBROWSER_API_KEY"
    },
    lastFM: {
        name: "LastFM",
        url: "http://ws.audioscrobbler.com/2.0/",
        apiKey: "YOUR_LASTFM_API_KEY"
    },
    // Additional APIs can be added below...

    // Example additional API
    exampleAPI: {
        name: "ExampleAPI",
        url: "https://api.example.com/",
        apiKey: "YOUR_EXAMPLE_API_KEY"
    }
};

module.exports = radioAPIs;
