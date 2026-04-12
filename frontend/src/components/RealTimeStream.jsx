import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const RealTimeStream = () => {
    const [songs, setSongs] = useState([]);
    const socket = io('http://your-radio-stream-url'); // Update with your server URL

    useEffect(() => {
        socket.on('update', (newSong) => {
            setSongs((prevSongs) => [...prevSongs, newSong]);
        });

        return () => {
            socket.off('update');
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <h2>Real-Time Song Stream</h2>
            <ul>
                {songs.map((song, index) => (
                    <li key={index}> 
                        <strong>{song.title}</strong> by {song.artist}<br />
                        BPM: {song.bpm} | Mood: {song.mood} | Energy Level: {song.energy} | Source: {song.source}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RealTimeStream;
