import express from 'express';
import { getTrackMetadata } from '../services/metadataService.js';

export const metadataRoutes = express.Router();

/**
 * GET /api/metadata/track
 * Fetch metadata for a track
 */
metadataRoutes.get('/track', async (req, res) => {
  try {
    const { artist, title } = req.query;

    if (!artist || !title) {
      return res.status(400).json({
        success: false,
        error: 'artist and title parameters required',
      });
    }

    const metadata = await getTrackMetadata(artist, title);

    res.json({
      success: true,
      query: { artist, title },
      metadata,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default metadataRoutes;