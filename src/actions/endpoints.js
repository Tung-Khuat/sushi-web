const SUSHI_API_URI = process.env.API_BASE_URI || 'http://localhost:3002';

export const sushiEndpoints = {
  // Get a list of all sushi
  fetchSushiList: `${SUSHI_API_URI}/api/v1/sushi`,

  // Get sushi by ID
  sushiById: (id) => `${SUSHI_API_URI}/api/v1/sushi/${id}`
};
