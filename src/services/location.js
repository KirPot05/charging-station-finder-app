import { REVERSE_GEOCODING_API_KEY } from "../config";

export async function fetchUserLocation(coordinates, signal) {
  try {
    if (
      typeof coordinates !== "object" ||
      Object.keys(coordinates).length === 0
    ) {
      throw new Error("Coordinates are required for displaying location");
    }

    const MAPS_API_URL = `https://www.mapquestapi.com/geocoding/v1/reverse?key=${REVERSE_GEOCODING_API_KEY}&location=${Object.values(
      coordinates
    ).join(", ")}&includeRoadMetadata=true&includeNearestIntersection=true`;

    const res = await fetch(MAPS_API_URL, { signal });
    const userLocation = await res.json();

    if (
      userLocation?.results === undefined ||
      userLocation?.results?.length === 0
    )
      throw new Error("location not found");

    return userLocation?.results;
  } catch (error) {
    throw error;
  }
}
