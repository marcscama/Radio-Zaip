# Radio-Zaip

## Features
- Real-time streaming of various radio stations
- User-friendly interface
- Playlist management
- Search functionality for stations and songs
- Support for multiple formats (MP3, AAC, etc.)
- Scoring system for stations based on user feedback

## Tech Stack
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Deployment: Heroku / AWS
- Authentication: JWT

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/marcscama/Radio-Zaip.git
   cd Radio-Zaip
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```
3. Create a `.env` file in the server folder and add your environment variables:
   ```plaintext
   PORT=5000
   MONGODB_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   ```
4. Start the server:
   ```bash
   npm run start
   ```
5. Start the client:
   ```bash
   cd client
   npm start
   ```

## API Endpoints
- **GET /api/stations**: Retrieve a list of all radio stations.
- **POST /api/stations**: Add a new radio station.
- **GET /api/stations/:id**: Retrieve details for a specific radio station.
- **PATCH /api/stations/:id**: Update information for a specific radio station.
- **DELETE /api/stations/:id**: Delete a specific radio station.

## Scoring Algorithm
The scoring algorithm evaluates radio stations based on user feedback. It uses a weighted average of ratings:

```
Score = (Total Ratings / Number of Ratings) * Weight
```

Where the weight is a factor determined by the age of the station and user engagement.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
