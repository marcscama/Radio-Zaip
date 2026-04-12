import React, { useState } from 'react';

const SearchPanel = () => {
    const [mood, setMood] = useState('');
    const [bpmRange, setBpmRange] = useState([60, 180]);
    const [yearRange, setYearRange] = useState([2000, 2025]);
    const [instruments, setInstruments] = useState([]);

    const handleSearch = () => {
        const query = {
            mood,
            bpmRange,
            yearRange,
            instruments
        };
        // Send query to backend
        console.log('Search query:', query);
        // Here you would typically make an API call to search based on the query
    };

    return (
        <div>
            <h2>Search Panel</h2>
            <form>
                <div>
                    <label>Mood:</label>
                    <input type="text" value={mood} onChange={(e) => setMood(e.target.value)} />
                </div>
                <div>
                    <label>BPM Range:</label>
                    <input type="range" min="60" max="180" value={bpmRange[0]} onChange={(e) => setBpmRange([e.target.value, bpmRange[1]])} />
                    <input type="range" min="60" max="180" value={bpmRange[1]} onChange={(e) => setBpmRange([bpmRange[0], e.target.value])} />
                </div>
                <div>
                    <label>Year Range:</label>
                    <input type="range" min="2000" max="2025" value={yearRange[0]} onChange={(e) => setYearRange([e.target.value, yearRange[1]])} />
                    <input type="range" min="2000" max="2025" value={yearRange[1]} onChange={(e) => setYearRange([yearRange[0], e.target.value])} />
                </div>
                <div>
                    <label>Instruments:</label>
                    <select multiple value={instruments} onChange={(e) => setInstruments([...e.target.selectedOptions].map(option => option.value))}>
                        <option value="guitar">Guitar</option>
                        <option value="piano">Piano</option>
                        <option value="drums">Drums</option>
                        <option value="violin">Violin</option>
                        <option value="flute">Flute</option>
                    </select>
                </div>
                <button type="button" onClick={handleSearch}>Search</button>
            </form>
        </div>
    );
};

export default SearchPanel;