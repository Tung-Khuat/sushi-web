const SUSHI_API_URI = 'http://localhost:3003/api/v1';

export const sushiEndpoints = {
  // Get a list of all sushi
  fetchSushiList: `${SUSHI_API_URI}/sushi`,

  // Get sushi by ID
  sushiById: (id) => `${SUSHI_API_URI}/sushi/${id}`
};
